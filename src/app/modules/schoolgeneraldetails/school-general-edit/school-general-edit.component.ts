import { Component,Inject,OnInit } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
import { emailMatch } from 'src/app/validators/email.validator';


const atLeastOneCheckboxCheckedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const checkboxes = [
    'preGradeR', 'gradeR', 'grade1', 'grade2', 'grade3',
    'grade4', 'grade5', 'grade6', 'grade7', 'grade8',
    'grade9', 'grade10', 'grade11', 'grade12',
    'gradeSpecial', 'gradeOther'
  ];

  const checkedCheckboxes = checkboxes.filter(checkbox => control.get(checkbox)?.value);

  return checkedCheckboxes.length > 0 ? null : { atLeastOneCheckboxChecked: true };
};

@Component({
  selector: 'app-school-general-edit',
  templateUrl: './school-general-edit.component.html',
  styleUrls: ['./school-general-edit.component.scss']
})
export class SchoolGeneralEditComponent {

  schoolDetails: SchoolGeneralDetails;
  editForm:any
  idOrPass:any
  systems:any
  sasamsOther:any 
  progress:any =3
  numberSelect:number = 1;
  sectorTypeId: number | undefined;
  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<SchoolGeneralEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true
    this.sasamsOther = data.systemBeingUsed
    this.idOrPass = data.usingIDAndPassport
  }

  ngOnInit():void{
    this.sectorTypeId = this.schoolDetails.sectorId
    this.editForm = this.formBuilder.group({
      institutionName:[{value:this.schoolDetails.institutionName,disabled: true}],
      districtName:[{value:this.schoolDetails.districtName,disabled: true}],
      emisNo: [{value:this.schoolDetails.emisNo,disabled: true}],
      schoolEmailAddress: [''],
      schoolTelephone: ['',],
      principalNameAndSurname: [''],
      usingIDAndPassport: [''],
      principalIDNo: [{ value: '', disabled: false }],
      passportID: [{ value: '', disabled: false }],
      schoolID:[this.schoolDetails.id],
      principalPersal: [''],
      principalCellPhone: ['',],
      systemBeingUsed: [''],
      schoolAdminManagementSystemID: [''],
      otherSchoolAdminSystem: [''],
      officialPrincipalEmail: ['', [ Validators.email]],
      schoolAlternativeEmailAddress: ['',],
      principalEmail: [''],
      alternativeCellNo: ['',[]],
      schoolGeneralDetailsCompleted: [''],
      generalStatus: [''],
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
      surveyYearID:[''],
      title:[''],
      statusID:['']
    },{
      validators: [atLeastOneCheckboxCheckedValidator,emailMatch]
    })
    this.getSchoolSystems()
  this.editForm.patchValue(this.data)
  this.getLearnerPerclassByEmis()
  }

  closeDialog(){
    this.ref.close()
    
  }

  onSubmit(form:any){
 

    if (this.editForm.valid) {
      console.log(form.statusID);
      let details :any = {
        id:this.data.id,
        emisNo:this.data.emisNo,
        schoolEmailAddress: form.schoolEmailAddress,
        schoolTelephone: form.schoolTelephone,
        principalNameAndSurname: form.principalNameAndSurname,
        usingIDAndPassport: form.usingIDAndPassport,
        principalIDNo: form.principalIDNo,
        passportID: form.passportID,
        principalPersal: form.principalPersal,
        title:form.title,
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
        console.log(res);

          this.router.navigate(['survey'])
          this.ref.close()
          this.toast.success({detail:"Success",summary:"Record Updated Successfully", duration:5000, position: 'topCenter'})
          sessionStorage.setItem('schoolSurveyDetails',JSON.stringify(res.results))
          this.head.getSurveyDetailsByEmisNo(this.schoolDetails.emisNo).subscribe({
            next:(data)=>{
      
                sessionStorage.setItem('learnerPerClassDetails',JSON.stringify(data))
                console.log(data);
                window.location.reload()
                
            },
            error:(err)=>{
              console.log(err);
              
            }
          })
      
         
          

        
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          console.log(err)
        }
      })
      console.log(details);
      
    }
    else{
      console.log('invalid');
      
    }
    
  }
  getSchoolSystems(){
    this.lookup.getSchoolSystems().subscribe({
      next:(data)=>{
        this.systems = data
      }
    })
  }

  getLearnerPerclassByEmis(){
    this.head.getSurveyDetailsByEmisNo(this.schoolDetails.emisNo).subscribe({
      next:(data)=>{

          sessionStorage.setItem('learnerPerClassDetails',JSON.stringify(data))
          console.log(data);
          
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  
    }
}
