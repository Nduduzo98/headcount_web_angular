import { Component, Inject, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit{
  generateOtp:any
  SendotpForm:any
  isSubmitting = false;
  showVerifyForm:boolean = false
  showSendOtpForm:boolean = true
  verifyOtpForm:any
  phoneNumber: any;
  cell: any;
  surveyDetails: any;
  constructor(private ref : MatDialogRef<OtpComponent> ,
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
  }
  closeDialog(){
    this.ref.close()
  }

  sendOtp(form:any){
    this.isSubmitting = true;
    if (this.SendotpForm.valid) {
      this.generateOtp = Math.floor(100000 + Math.random() * 900000);

      let details:any ={
        cellPhone:form.cellPhone,
        otp:this.generateOtp
      }
      this.auth.sendOtp(details).subscribe({
        next:(res)=>{
          this.showSendOtpForm = !this.showSendOtpForm
          this.showVerifyForm = !this.showVerifyForm
          this.cell = form.cellPhone
          const lastFourdigits = form.cellPhone.slice(6);
          const maskedFirstSixDigits = '*'.repeat(6);
           const phoneNumber = maskedFirstSixDigits +lastFourdigits 
          this.toast.info({detail:"Info Message", summary:"An OTP Has been sent to "+phoneNumber,duration:8000, position:'topCenter'})

        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          this.isSubmitting = false;

        },
        complete:() =>{
          this.isSubmitting = false;
        }
      })
    }
  }
  resendOtp(){
     const generateOtp = Math.floor(100000 + Math.random() * 900000);
     const lastFourdigits = this.cell.slice(6);
     const maskedFirstSixDigits = '*'.repeat(6);

     const phoneNumber = maskedFirstSixDigits +lastFourdigits
    let details:any = {
      cellPhone:this.cell,
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
         
          if(this.surveyDetails.progressStatus === 1){
            this.router.navigate(['survey-complete'])
          }
          if (this.surveyDetails.progressStatus === 3) {
            this.router.navigate(['survey'])
          }
          this.ref.close()
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
        }
      })
    }
  }
  
}
