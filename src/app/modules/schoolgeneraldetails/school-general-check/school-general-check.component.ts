import { Component,Inject,OnInit } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
import { OtpComponent } from 'src/app/components/otp/otp.component';

@Component({
  selector: 'app-school-general-check',
  templateUrl: './school-general-check.component.html',
  styleUrls: ['./school-general-check.component.scss']
})
export class SchoolGeneralCheckComponent {
  schoolDetails: SchoolGeneralDetails;
  editForm:any
  idOrPass:any
  systems:any
  sasamsOther:any 
  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<SchoolGeneralCheckComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any,public dialog:MatDialog) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true
    this.sasamsOther = data.systemBeingUsed
    this.idOrPass = data.usingIDAndPassport
  }

  ngOnInit():void{
    this.editForm = this.formBuilder.group({

      institutionName:[{value:this.schoolDetails.institutionName,disabled: true}],
      districtName:[{value:this.schoolDetails.districtName,disabled: true}],
      emisNo: [{value:this.schoolDetails.emisNo,disabled: true}],
      schoolEmailAddress: ['', [Validators.required, Validators.email]],
      schoolTelephone: [''],
      principalNameAndSurname: [''],
      usingIDAndPassport: [''],
      principalIDNo: [''],
      passportID: [''],
      schoolID:[this.schoolDetails.id],
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
   
      schoolOfSpecialization: [false],
      statusID:['']
    })
    this.getSchoolSystems()
  this.editForm.patchValue(this.data)
  }

  closeDialog(){
    this.ref.close()
    
  }

  onSubmit(form:any){

    if (this.editForm.valid) {
      let details :any = {
        id:this.data.id,
        emisNo:this.schoolDetails.emisNo,
        schoolEmailAddress: form.schoolEmailAddress,
        schoolTelephone: form.schoolTelephone,
        principalNameAndSurname: form.principalNameAndSurname,
        usingIDAndPassport: form.usingIDAndPassport,
        principalIDNo: form.principalIDNo,
        passportID: form.passportID,
        principalPersal: form.principalPersal,
        principalCellPhone: form.principalCellPhone,
        systemBeingUsed: form.systemBeingUsed,
        schoolAdminManagementSystemID: form.schoolAdminManagementSystemID,
        otherSchoolAdminSystem: form.otherSchoolAdminSystem,
        officialPrincipalEmail: form.officialPrincipalEmail,
        schoolAlternativeEmailAddress: form.schoolAlternativeEmailAddress,
        principalEmail: form.principalEmail,
        alternativeCellNo: form.alternativeCellNo,
        preGradeR: form.preGradeR,
        gradeR: form.gradeR,
        grade1: form.grade1,
        grade2: form.grade2,
        grade3: form.grade3,
        grade4: form.grade4,
        grade5: form.grade5,
        grade6: form.grade6,
        grade7: form.grade7,
        grade8: form.grade8,
        grade9: form.grade9,
        grade10: form.grade10,
        grade11: form.grade11,
        grade12: form.grade12,
        gradeSpecial: form.gradeSpecial,
        gradeOther: form.gradeOther,
        surveyCompilerCellPhone: form.principalCellPhone,
     
        surveyYearID: form.surveyYearID,
        schoolID:form.schoolID,
        statusID:form.statusID,
        dateSurveySubmitted: this.data.dateSurveySubmitted,
        progressStatus:this.data.progressStatus
      }
      this.head.updateSchoolSurvey(details).subscribe({
        next:(res)=>{

          let dialogRef = this.dialog.open(OtpComponent,{
            panelClass:'OTP',
            data:this.data
          })

          
          this.ref.close()
         

        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          console.log(err)
        }
      })
      console.log(details);
      
    }
    
  }
  getSchoolSystems(){
    this.lookup.getSchoolSystems().subscribe({
      next:(data)=>{
        this.systems = data
      }
    })
  }
}
