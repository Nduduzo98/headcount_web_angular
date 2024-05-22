import { Component,Inject,OnInit } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OtpComponent } from 'src/app/components/otp/otp.component';
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
  selector: 'app-school-general',
  templateUrl: './school-general.component.html',
  styleUrls: ['./school-general.component.scss']
})
export class SchoolGeneralComponent {
  schoolDetails: SchoolGeneralDetails;
  schoolDetailsForm:any
  idOrPass:any
  systems:any
  sasamsOther:any
  sams:number = 2
  otherSystem:any 
  sectorId:any
  stepOne:any
  stepTwo:any
  sectorTypeId: any;
  numberSelect:number = 1;
  
  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
  private toast: NgToastService, private lookup:LookupService, private router:Router,public dialog:MatDialog) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      // ref.disableClose = true
  }

  ngOnInit():void{
    this.sectorTypeId = this.schoolDetails.sectorId
    console.log(this.sectorTypeId);
    
    this.schoolDetailsForm = this.formBuilder.group({
      institutionName:[{value:this.schoolDetails.institutionName,disabled: true}],
      districtName:[{value:this.schoolDetails.districtName,disabled: true}],
      emisNo: [{value:this.schoolDetails.emisNo,disabled: true}, Validators.required],
      schoolEmailAddress: ['', [Validators.required, Validators.email]],
      schoolTelephone: ['',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
      principalNameAndSurname: ['',[Validators.pattern(/^[A-Za-z\s]+$/)]],
      usingIDAndPassport: [''],
      principalIDNo: [{ value: '', disabled: false },[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(13), Validators.minLength(13)]],
      passportID: [{ value: '', disabled: false },[Validators.required]],
      schoolID:[this.schoolDetails.id],
      principalPersal: ['',[Validators.pattern(/^[0-9]+$/),Validators.maxLength(8), Validators.minLength(8)]],
      principalCellPhone: ['',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
      systemBeingUsed: [''],
      schoolAdminManagementSystemID: [''],
      otherSchoolAdminSystem: [''],
      officialPrincipalEmail: ['', [ Validators.email]],
      schoolAlternativeEmailAddress: ['', [Validators.required, Validators.email]],
      principalEmail: [''],
      alternativeCellNo: ['',[Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
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
      principalName: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      principalSurname: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      title:[''],
     
      progressStatus:[3]
    },{
      validators: [atLeastOneCheckboxCheckedValidator,emailMatch]
    })

    this.stepOne = this.formBuilder.group({
      institutionName:[{value:this.schoolDetails.institutionName,disabled: true}],
      districtName:[{value:this.schoolDetails.districtName,disabled: true}],
      emisNo: [{value:this.schoolDetails.emisNo,disabled: true}, Validators.required],
      schoolEmailAddress: ['', [Validators.required, Validators.email]],
      schoolTelephone: ['',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
      principalNameAndSurname: ['',[Validators.pattern(/^[A-Za-z\s]+$/)]],
      usingIDAndPassport: [''],
      principalIDNo: [{ value: '', disabled: false },[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(13), Validators.minLength(13)]],
      passportID: [{ value: '', disabled: false },[Validators.required,Validators.maxLength(9), Validators.minLength(9)]],
      schoolID:[this.schoolDetails.id],
      principalPersal: ['',[Validators.pattern(/^[0-9]+$/),Validators.maxLength(8), Validators.minLength(8)]],
      principalCellPhone: ['',[Validators.required, Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
      systemBeingUsed: [''],
      schoolAdminManagementSystemID: ['',[Validators.required]],
      otherSchoolAdminSystem: [''],
      officialPrincipalEmail: ['', [ Validators.email]],
      schoolAlternativeEmailAddress: ['', [Validators.required, Validators.email]],
      principalEmail: [''],
      alternativeCellNo: ['',[Validators.pattern(/^[0-9]+$/),Validators.maxLength(10), Validators.minLength(10)]],
      schoolGeneralDetailsCompleted: [''],
      generalStatus: [''],
      personalInfoStatus: [''],
      dateSurveyReceived: [''],
      dateSurveySubmitted: [''],
      finalSubmit: [''],
     
      allowEdit: [''],
      dataAnomaliesEdit: [''],
      cellPhoneVerified: [false],
      surveyCompilerCellPhone: [''],
      specialisationSchool: [false],
      principalName: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      principalSurname: ['',[Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      title:[''],
     
      progressStatus:[3]
    },{
      validators: [atLeastOneCheckboxCheckedValidator,emailMatch]
    })

    this.stepTwo = this.formBuilder.group({
  
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
     
    },{
      validators: [atLeastOneCheckboxCheckedValidator,emailMatch]
    })



    this.schoolDetailsForm.get('usingIDAndPassport').valueChanges.subscribe((value:any) => {
      if (value === '1') {
        this.schoolDetailsForm.get('passportID').disable();
      } else {
        this.schoolDetailsForm.get('passportID').enable();
      }

      if (value === '2') {
        this.schoolDetailsForm.get('principalIDNo').disable();

      } else {
        this.schoolDetailsForm.get('principalIDNo').enable();

      }
    });



    

    this.getSchoolSystems()
  } cancelSurvey(){
    sessionStorage.removeItem('schoolDetails');
    sessionStorage.removeItem('schoolSurveyDetails');

    this.router.navigate(['home'])
  }



  getSchoolSystems(){
    this.lookup.getSchoolSystems().subscribe({
      next:(data)=>{
        this.systems = data
      }
    })
  }  closeDialog(){
    // this.ref.close()
    
  }

  onSubmit(form:any){

    const uppCasePrincipalName = form.principalName.toUpperCase()
    const uppCasePrincipalSurname = form.principalSurname.toUpperCase()
    console.log(`${uppCasePrincipalName} ${uppCasePrincipalSurname}`);
    
    if (this.schoolDetailsForm.valid) {


      let details :any = {
        emisNo:this.schoolDetails.emisNo,
        schoolEmailAddress: form.schoolEmailAddress,
        schoolTelephone: form.schoolTelephone,
        principalNameAndSurname: `${uppCasePrincipalName} ${uppCasePrincipalSurname}`,
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
        schoolID:form.schoolID,
        progressStatus:form.progressStatus
        
      }
      this.head.saveToSchoolSurvey(details).subscribe({
        next:(res)=>{
          const schoolSurveyDetails = res.results
         
          sessionStorage.setItem('schoolSurveyDetails',JSON.stringify(schoolSurveyDetails))
          // this.ref.close()
          let dialogRef = this.dialog.open(OtpComponent,{
            panelClass:'OTP'
          })
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
        },
        error:(err)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message, duration:5000, position: 'topCenter'})
          console.log(err)
        }
      })
      console.log(details);
      
    }
    else{
      const invalidField = Object.keys(this.schoolDetailsForm.controls).find(controlName =>{
        const control = this.schoolDetailsForm.get(controlName)
        return control.invalid
      })

      let errorMessage = 'Please make sure all the fields are filled in correctly on previous section'
      if (invalidField) {

        if (invalidField == 'principalSurname') {
          errorMessage = `Please fill in this field: Principal Surname`;
        }
        if (invalidField == 'principalName') {
          errorMessage = `Please fill in this field: Principal Name`;
        }
        if (invalidField == 'title') {
          errorMessage = `Please Select Your Title`;
        }
        if (invalidField == 'usingIDAndPassport') {
          errorMessage = `Please select whether you are using a South African ID or Passport`;
        }
        if (invalidField == 'principalIDNo') {
          errorMessage = `Please fill in this field: ID Number`;
        }
        if (invalidField == 'passportID') {
          errorMessage = `Please fill in this field: Passport Number`;
        }
        if (invalidField == 'principalCellPhone') {
          errorMessage = `Please fill in this field: Principal Cell Number `;
        }
        if (invalidField == 'schoolTelephone') {
          errorMessage = `Please fill in this field: School Telephone Number`;
        }
        if (invalidField == 'schoolAlternativeEmailAddress') {
          errorMessage = `Please fill in this field: School Secondary Email Address `;
        }
        if (invalidField == 'schoolAdminManagementSystemID') {
          errorMessage = `Please select the Electronic School Administration System(s) Being Used`;
        }
        if (invalidField == 'schoolEmailAddress') {
          errorMessage = `Please fill in this field: School Email Address `;
        }if (invalidField == 'principalPersal') {
          errorMessage = `Please fill in this field: Persal Number `;
        }
        
      }
      this.toast.error({
        detail: "ERROR",
        summary: errorMessage,
        duration: 5000,
        position: 'topCenter'
      });
    }
    
  }

  next(){
    const invalidField = Object.keys(this.schoolDetailsForm.controls).find(controlName =>{
      const control = this.schoolDetailsForm.get(controlName)
      return control.invalid
    })

    let errorMessage = 'Please check on the previous step and fill in everything.'
    if (invalidField) {

      if (invalidField == 'principalSurname') {
        errorMessage = `Please fill in this field: Principal Surname`;
      }
      if (invalidField == 'principalName') {
        errorMessage = `Please fill in this field: Principal Name`;
      }
      if (invalidField == 'title') {
        errorMessage = `Please Select Your Title`;
      }
      if (invalidField == 'usingIDAndPassport') {
        errorMessage = `Please select whether you are using a South African ID or Passport`;
      }
      if (invalidField == 'principalIDNo') {
        errorMessage = `Please fill in this field: ID Number`;
      }
      if (invalidField == 'passportID') {
        errorMessage = `Please fill in this field: Passport Number`;
      }
      if (invalidField == 'principalCellPhone') {
        errorMessage = `Please fill in this field: Principal Cell Number `;
      }
      if (invalidField == 'schoolTelephone') {
        errorMessage = `Please fill in this field: School Telephone Number`;
      }
      if (invalidField == 'schoolAlternativeEmailAddress') {
        errorMessage = `Please fill in this field: School Secondary Email Address `;
      }
      if (invalidField == 'schoolAdminManagementSystemID') {
        errorMessage = `Please select the Electronic School Administration System(s) Being Used`;
      }
      if (invalidField == 'schoolEmailAddress') {
        errorMessage = `Please fill in this field: School Email Address `;
      }
    }
  }

}
