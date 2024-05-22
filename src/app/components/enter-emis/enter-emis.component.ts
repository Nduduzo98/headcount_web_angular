import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { PopiaComponent } from '../popia/popia.component';
import { SchoolGeneralEditComponent } from 'src/app/modules/schoolgeneraldetails/school-general-edit/school-general-edit.component';
import { SchoolGeneralCheckComponent } from 'src/app/modules/schoolgeneraldetails/school-general-check/school-general-check.component';
import { AuthService } from 'src/app/services/auth.service';
import { CheckOtpComponent } from '../otp/check-otp/check-otp.component';
import { OtpComponent } from '../otp/otp.component';


@Component({
  selector: 'app-enter-emis',
  templateUrl: './enter-emis.component.html',
  styleUrls: ['./enter-emis.component.scss']
})
export class EnterEmisComponent implements OnInit {

    emsForm:any
    emsValue :number = 700
    emis:any
    num:number = 0
    generateOtp:any
    SendotpForm:any
    showVerifyForm:boolean = false
    showSendOtpForm:boolean = true
    verifyOtpForm:any
    phoneNumber: any;
    cell: any;
    surveyDetails: any;

    isSubmitting = false;
  learnerPerClassDetails: any;
  constructor(private ref : MatDialogRef<EnterEmisComponent> ,
    public dialog:MatDialog ,private router :Router,
     private formBuilder :FormBuilder , private toast: NgToastService , private head: HeadCountServiceService,private auth:AuthService){
    ref.disableClose = true
  }
  ngOnInit(): void {
    this.emsForm = this.formBuilder.group({
      emisNumber:['',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(6), Validators.minLength(6)]]
    })
  }
  onSubmit(){
    if (this.emsForm.valid) {
      this.isSubmitting = true;
      const emisNum = this.emsValue + this.emis
      this.head.getSchoolDetails(emisNum).subscribe({
        next:(res)=>{
          sessionStorage.setItem('schoolDetails',JSON.stringify(res))
          const emisNo = res.emisNo
          sessionStorage.setItem('emisNo',JSON.stringify(emisNo))
          this.getSchoolSurveyDetails()
          this.getLearnerPerclassByEmis()
          this.getRepeaters()
          this.getHomeLanguage()
          this.getMigrations()
          this.getPersonnel()
          this.getPregnant()
          this.getDisability()
          this.getLearnersMortality()
          this.getPersonnelMortality()
        },
        error:(err) =>{
          this.isSubmitting = false;
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          console.log(err?.error.message)
        },
        complete:() =>{
          this.isSubmitting = false;
        }
      })
    }
    console.log(this.emsForm.value);
 
  }

  getSchoolSurveyDetails(){

    if (this.emsForm.valid) {
      const emisNum = this.emsValue + this.emis
      this.head.getDetailsByEmisAndYear(emisNum).subscribe({
        next:(data)=>{
          console.log(data)
      
          sessionStorage.setItem('schoolSurveyDetails',JSON.stringify(data))
        let dialogRef = this.dialog.open(OtpComponent,{
          panelClass:'OTP'
        })
        
 
       
        this.ref.close()
        },
         
        
        error:(err)=>{  
          let dialogRef = this.dialog.open(PopiaComponent,{
            panelClass:'tcpopup' 
          })
          this.ref.close()
        }
      })
    }
   
  }

  closeDialog(){
    this.ref.close()
  }

  getLearnerPerclassByEmis(){

    if (this.emsForm.valid) {
      const emisNum = this.emsValue + this.emis
      this.head.getSurveyDetailsByEmisNo(emisNum).subscribe({
        next:(data)=>{
  
            sessionStorage.setItem('learnerPerClassDetails',JSON.stringify(data))
            console.log(data);
        }
      })
  
    }
      }

    getRepeaters(){
      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis

        this.head.getRepeaters(emisNum).subscribe({
          next:(data)=>{
    
              sessionStorage.setItem('repeaters',JSON.stringify(data))
              console.log(data);
          }
        })
    
      }
    }

    getHomeLanguage(){
      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis

        this.head.getHomeLanguages(emisNum).subscribe({
          next:(data)=>{
    
              sessionStorage.setItem('homeLanguages',JSON.stringify(data))
              console.log(data);
          }
        })
    
      }
    }

    getMigrations(){
      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis

        this.head.getMigrations(emisNum).subscribe({
          next:(data)=>{
            sessionStorage.setItem('migrations',JSON.stringify(data))
          }
        })
      }
    }

    getPersonnel(){
      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis

        this.head.getPersonnel(emisNum).subscribe({
          next:(data)=>{
            sessionStorage.setItem('personnel',JSON.stringify(data))
          }
        })
      }
    }

    getPregnant(){
      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis

        this.head.getPregnantLearners(emisNum).subscribe({
          next:(data)=>{
            sessionStorage.setItem('pregnant',JSON.stringify(data))
          }
        })
      }
    }

    getDisability(){
   

      if (this.emsForm.valid) {
        const emisNum = this.emsValue + this.emis
      this.head.getDisability(emisNum).subscribe({
        next:(data)=>{
          sessionStorage.setItem('disability',JSON.stringify(data))
        }
      })
    }
  } 
  getLearnersMortality(){
   

    if (this.emsForm.valid) {
      const emisNum = this.emsValue + this.emis
    this.head.getLearnerMortality(emisNum).subscribe({
      next:(data)=>{
        sessionStorage.setItem('learnersMortality',JSON.stringify(data))
      }
    })
  }
}

getPersonnelMortality(){
   

  if (this.emsForm.valid) {
    const emisNum = this.emsValue + this.emis
  this.head.getPersonnelMortality(emisNum).subscribe({
    next:(data)=>{
      sessionStorage.setItem('personnelMortality',JSON.stringify(data))
    }
  })
}
}

download(){
  this.head.downloadSurvey(this.emis).subscribe({
    
  })
}

}
