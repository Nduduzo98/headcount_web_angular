
import { Component, Inject, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-check-otp',
  templateUrl: './check-otp.component.html',
  styleUrls: ['./check-otp.component.scss']
})
export class CheckOtpComponent {




  generateOtp:any
  SendotpForm:any
  isSubmitting = false;
  showVerifyForm:boolean = false
  showSendOtpForm:boolean = true
  verifyOtpForm:any
  phoneNumber: any;
  cell: any;
  surveyDetails: any;
  constructor(private ref : MatDialogRef<CheckOtpComponent> ,
    public dialog:MatDialog ,private router :Router,
     private formBuilder :FormBuilder , private toast: NgToastService ,@Inject(MAT_DIALOG_DATA) public data :any, private head: HeadCountServiceService,private auth:AuthService){
    ref.disableClose = true
    const surveyString = sessionStorage.getItem('schoolSurveyDetails')
   this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }
  ngOnInit(): void {
    this.SendotpForm = this.formBuilder.group({
      cellPhone:['',[Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })

    this.verifyOtpForm = this.formBuilder.group({
      otp:['',[Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })

    const lastFourdigits = this.data.principalCellPhone.slice(6);
    const maskedFirstSixDigits = '*'.repeat(6);

    this.phoneNumber = maskedFirstSixDigits +lastFourdigits
  }
  closeDialog(){
    this.ref.close()
  }

  resendOtp(){
     const generateOtp = Math.floor(100000 + Math.random() * 900000);
     const lastFourdigits = this.data.principalCellPhone.slice(6);
     const maskedFirstSixDigits = '*'.repeat(6);

     const phoneNumber = maskedFirstSixDigits +lastFourdigits
    let details:any = {
      cellPhone:this.data.principalCellPhone,
      otp:generateOtp
    }
    this.auth.sendOtp(details).subscribe({
      next:(res)=>{
        this.toast.info({detail:"Info Message", summary:"An OTP Has been sent to "+phoneNumber,duration:8000, position:'topCenter'})

      },
      error:(err)=>{
        this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
      }
    })
  }
  verifyOtp(form:any){
    if (this.verifyOtpForm.valid) {
      this.auth.verifyOtp(form).subscribe({
        next:(res) =>{
          this.toast.success({detail:"SUCCESS",summary:res.message, duration:5000, position: 'topCenter'})
          this.ref.close()
          if(this.data.progressStatus === 1){
            this.router.navigate(['survey-complete'])
          }
          if (this.data.progressStatus === 3) {
            this.router.navigate(['survey'])
          }
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
        }
      })
    }
  }
  
}
