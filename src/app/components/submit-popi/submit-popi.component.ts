import { Component,Inject } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';

@Component({
  selector: 'app-submit-popi',
  templateUrl: './submit-popi.component.html',
  styleUrls: ['./submit-popi.component.scss']
})
export class SubmitPopiComponent  {
  currentYear: number;
  surveyForm:any
  progress:any =1
  currentDate = new Date()
  dateSubmitted = this.currentDate.toISOString()

  constructor(private ref : MatDialogRef<SubmitPopiComponent>,private head:HeadCountServiceService, private formBuilder:FormBuilder ,public dialog:MatDialog,private router :Router,@Inject(MAT_DIALOG_DATA) public data :any,private toast: NgToastService,){
    ref.disableClose = true
    this.currentYear = new Date().getFullYear();
  }

  checkboxControl = new FormControl(false);

  ngOnInit():void{
    this.surveyForm = this.formBuilder.group({
      progressStatus:[this.progress],
      id:[this.data.id],
      emisNo: [''],
      schoolEmailAddress: ['',],
      schoolTelephone: [''],
      principalNameAndSurname: [''],
      usingIDAndPassport: [''],
      principalIDNo: [''],
      passportID: [''],
      schoolID:[''],
      principalPersal: [''],
      principalCellPhone: [''],
      systemBeingUsed: [''],
      schoolAdminManagementSystemID: [''],
      otherSchoolAdminSystem: [''],
      officialPrincipalEmail: [''],
      schoolAlternativeEmailAddress: [''],
      principalEmail: [''],
      alternativeCellNo: [''],
      schoolGeneralDetailsCompleted: [''],
      generalStatus: [''],
      surveyYearID:[''],
      personalInfoStatus: [''],
      dateSurveyReceived: [''],
      dateSurveySubmitted: [''],
      finalSubmit: [''],
      preGradeR: [false],
      gradeR: [false],
      grade1: [false],
      grade2: [false],
      grade3: [false],
      grade4: [false],
      grade5: [false],
      grade6: [false],
      grade7: [false],
      grade8: [false],
      grade9: [false],
      grade10: [false],
      grade11: [false],
      grade12: [false],
      gradeSpecial: [false],
      gradeOther: [false],
      allowEdit: [''],
      dataAnomaliesEdit: [''],
      cellPhoneVerified: [false],
      surveyCompilerCellPhone: [''],
      specialisationSchool: [false],
      schoolOfSpecialization: [false],
      title:[''],
      statusID:['']
    })

    this.surveyForm.patchValue(this.data)
  }
  closeDialog(){
    this.ref.close()
    
  }

  

  acceptPopia(){
console.log(this.surveyForm.value);

let details :any = {
  id:this.data.id,
  emisNo:this.data.emisNo,
  schoolEmailAddress: this.data.schoolEmailAddress,
  schoolTelephone: this.data.schoolTelephone,
  principalNameAndSurname: this.data.principalNameAndSurname,
  usingIDAndPassport: this.data.usingIDAndPassport,
  principalIDNo: this.data.principalIDNo,
  passportID: this.data.passportID,
  progressStatus:this.progress,
  principalPersal: this.data.principalPersal,
  principalCellPhone: this.data.principalCellPhone,
  systemBeingUsed: this.data.systemBeingUsed,
  schoolAdminManagementSystemID: this.data.schoolAdminManagementSystemID,
  otherSchoolAdminSystem: this.data.otherSchoolAdminSystem,
  officialPrincipalEmail: this.data.officialPrincipalEmail,
  schoolAlternativeEmailAddress: this.data.schoolAlternativeEmailAddress,
  principalEmail: this.data.principalEmail,
  alternativeCellNo: this.data.alternativeCellNo,
  preGradeR: this.data.preGradeR,
  gradeR: this.data.gradeR,
  grade1: this.data.grade1,
  grade2: this.data.grade2,
  grade3: this.data.grade3,
  grade4: this.data.grade4,
  grade5: this.data.grade5,
  grade6: this.data.grade6,
  grade7: this.data.grade7,
  grade8: this.data.grade8,
  grade9: this.data.grade9,
  grade10: this.data.grade10,
  grade11: this.data.grade11,
  grade12: this.data.grade12,
  gradeSpecial: this.data.gradeSpecial,
  gradeOther: this.data.gradeOther,
  surveyCompilerCellPhone: this.data.principalCellPhone,
  specialisationSchool: this.data.specialisationSchool,
  surveyYearID: this.data.surveyYearID,
  title:this.data.title,
  schoolID:this.data.schoolID,
  statusID:this.data.statusID,
  dateSurveySubmitted: this.dateSubmitted
}
    this.head.updateSchoolSurvey(details).subscribe({
      next:(res)=>{

        console.log(res)
      
        this.router.navigate(['survey-complete'])
        sessionStorage.setItem('schoolSurveyDetails',JSON.stringify(res))
        this.ref.close()
        this.toast.success({detail:"School Survey has been Completed",summary:"", duration:10000, position: 'topCenter'})
      },
      error:(err)=>{
        this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
        console.log(err)
      }
    })
  }

}
