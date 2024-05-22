import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators} from '@angular/forms';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { NgToastService } from 'ng-angular-popup';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
function patchValueIfNegative(control: FormControl): { [key: string]: any } | null {
  const value = control.value;

  if (value !== null && value < 0) {
    control.patchValue(0); // Patch the value to 0 if it's less than 0
  }

  return null;
}

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit  {
  schoolDetails: any;
  surveyDetails:any;

  personnelForm:any
  sectorTypeId:any
  principalTotal: any
  deputyPrincipalTotal: any
  headOfDepartmentTotal: any
  educatorsTotal: any
  professionalNonTeachingStaffTotal: any
  administrativeStaffTotal: any
  supportstaffTotal: any
  earlyChildhoodDevelopmentTotal: any
  specialClassEducatorsTotal: any


  stateprincipalTotal: any
  statedeputyPrincipalTotal: any
  stateheadOfDepartmentTotal: any
  stateeducatorsTotal: any
  stateprofessionalNonTeachingStaffTotal: any
  stateadministrativeStaffTotal: any
  statesupportstaffTotal: any
  stateearlyChildhoodDevelopmentTotal: any
  statespecialClassEducatorsTotal: any

  privateprincipalTotal: any
  privatedeputyPrincipalTotal: any
  privateheadOfDepartmentTotal: any
  privateeducatorsTotal: any
  privateprofessionalNonTeachingStaffTotal: any
  privateadministrativeStaffTotal: any
  privatesupportstaffTotal: any
  privateearlyChildhoodDevelopmentTotal: any
  privatespecialClassEducatorsTotal: any
  statePaidForm:any

  stateTotalMaleFullTime:any
  stateTotalFemaleFullTime:any
  stateTotalMalePartTime:any
  stateTotalFemalePartTime:any

  privatelyTotalMaleFullTime:any
  privatelyTotalFemaleFullTime:any
  privatelyTotalMalePartTime:any
  privatelyTotalFemalePartTime:any
  

  preGradeR:any
  gR:any
  gSpecial:any

  fulltimeDeputy:any
  parttimeDeputy:any
  grandTotal: any;
  stateTotal: any;

  
  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<PersonnelComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }
  ngOnInit(): void {

    this.personnelForm = this.formBuilder.group({
      schoolSurveyID: [this.surveyDetails.id],
      governingBodyPaidFullTimeMalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEducators: [0,[Validators.required, Validators.min(0)]],
      governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEducators: [0,[Validators.required, Validators.min(0)]],
      governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
      statePaidFullTimeMalePrincipal: [0,[Validators.min(0)]],

      principalTotal: [0,[Validators.min(0)]],
      deputyPrincipalTotal: [0,[Validators.min(0)]],
      headOfDepartmentTotal: [0,[Validators.min(0)]],
      educatorsTotal: [0,[Validators.min(0)]],
      professionalNonTeachingStaffTotal: [0,[Validators.min(0)]],
      administrativeStaffTotal: [0,[Validators.min(0)]],
      supportstaffTotal: [0,[Validators.min(0)]],
      earlyChildhoodDevelopmentTotal: [0,[Validators.min(0)]],
      specialClassEducatorsTotal: [0,[Validators.min(0)]],
      privatelyTotalMaleFullTime:[null],
      privatelyTotalFemaleFullTime:[null],
      privatelyTotalMalePartTime:[null],
      privatelyTotalFemalePartTime:[null],
      statusID: [1]
    })

    this.statePaidForm = this.formBuilder.group({
      schoolSurveyID: [this.surveyDetails.id],
      governingBodyPaidFullTimeMalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemalePrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleAdministrativeStaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleSupportstaff: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
      governingBodyPaidPartTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
      statePaidFullTimeMalePrincipal: [0,[Validators.min(0)]],
statePaidFullTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
statePaidFullTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
statePaidFullTimeMaleEducators: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
statePaidFullTimeMaleAdministrativeStaff: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeFemalePrincipal: [0,[Validators.min(0)]],
statePaidFullTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
statePaidFullTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
statePaidFullTimeFemaleEducators: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
statePaidFullTimeFemaleAdministrativeStaff: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeMaleSupportstaff: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
statePaidFullTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
statePaidFullTimeFemaleSupportstaff: [0,[Validators.required,Validators.min(0)]],
statePaidFullTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
statePaidFullTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
statePaidPartTimeMalePrincipal: [0,[Validators.min(0)]],
statePaidPartTimeMaleDeputyPrincipal: [0,[Validators.min(0)]],
statePaidPartTimeMaleHeadOfDepartment: [0,[Validators.min(0)]],
statePaidPartTimeMaleEducators: [0,[Validators.min(0)]],
statePaidPartTimeMaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
statePaidPartTimeMaleAdministrativeStaff: [0,[Validators.min(0)]],
statePaidPartTimeFemalePrincipal: [0,[Validators.min(0)]],
statePaidPartTimeFemaleDeputyPrincipal: [0,[Validators.min(0)]],
statePaidPartTimeFemaleHeadOfDepartment: [0,[Validators.min(0)]],
statePaidPartTimeFemaleEducators: [0,[Validators.min(0)]],
statePaidPartTimeFemaleProfessionalNonTeachingStaff: [0,[Validators.min(0)]],
statePaidPartTimeFemaleAdministrativeStaff: [0,[Validators.min(0)]],
statePaidPartTimeMaleSupportstaff: [0,[Validators.min(0)]],
statePaidPartTimeMaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
statePaidPartTimeMaleSpecialClassEducators: [0,[Validators.min(0)]],
statePaidPartTimeFemaleSupportstaff: [0,[Validators.min(0)]],
statePaidPartTimeFemaleEarlyChildhoodDevelopment: [0,[Validators.min(0)]],
statePaidPartTimeFemaleSpecialClassEducators: [0,[Validators.min(0)]],
      principalTotal: [0,[Validators.min(0)]],
      deputyPrincipalTotal: [0,[Validators.min(0)]],
      headOfDepartmentTotal: [0,[Validators.min(0)]],
      educatorsTotal: [0,[Validators.min(0)]],
      professionalNonTeachingStaffTotal: [0,[Validators.min(0)]],
      administrativeStaffTotal: [0,[Validators.min(0)]],
      supportstaffTotal: [0,[Validators.min(0)]],
      earlyChildhoodDevelopmentTotal: [0,[Validators.min(0)]],
      specialClassEducatorsTotal: [0,[Validators.min(0)]],

      stateprincipalTotal: [0,[Validators.min(0)]],
      statedeputyPrincipalTotal: [0,[Validators.min(0)]],
      stateheadOfDepartmentTotal: [0,[Validators.min(0)]],
      stateeducatorsTotal: [0,[Validators.min(0)]],
      stateprofessionalNonTeachingStaffTotal: [0,[Validators.min(0)]],
      stateadministrativeStaffTotal: [0,[Validators.min(0)]],
      statesupportstaffTotal: [0,[Validators.min(0)]],
      stateearlyChildhoodDevelopmentTotal: [0,[Validators.min(0)]],
      statespecialClassEducatorsTotal: [0,[Validators.min(0)]],

      privateprincipalTotal: [0,[Validators.min(0)]],
      privatedeputyPrincipalTotal: [0,[Validators.min(0)]],
      privateheadOfDepartmentTotal: [0,[Validators.min(0)]],
      privateeducatorsTotal: [0,[Validators.min(0)]],
      privateprofessionalNonTeachingStaffTotal: [0,[Validators.min(0)]],
      privateadministrativeStaffTotal: [0,[Validators.min(0)]],
      privatesupportstaffTotal: [0,[Validators.min(0)]],
      privateearlyChildhoodDevelopmentTotal: [0,[Validators.min(0)]],
      privatespecialClassEducatorsTotal: [0,[Validators.min(0)]],
      stateTotalMaleFullTime:[null],
      stateTotalFemaleFullTime:[null],
      stateTotalMalePartTime:[null],
      stateTotalFemalePartTime:[null],
    
      privatelyTotalMaleFullTime:[null],
      privatelyTotalFemaleFullTime:[null],
      privatelyTotalMalePartTime:[null],
      privatelyTotalFemalePartTime:[null],
      
      statusID: [1]
    })
    this.gR = this.surveyDetails.gradeR
    this.preGradeR = this.surveyDetails.preGradeR
    this.gSpecial = this.surveyDetails.gradeSpecial

    this.sectorTypeId = this.schoolDetails.sectorId
    this.personnelForm.valueChanges.subscribe((formValue:any) =>{
      if (formValue.governingBodyPaidFullTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleDeputyPrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleDeputyPrincipal:0
         
        });
      } if (formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleDeputyPrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleDeputyPrincipal:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleEducators:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleEducators:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleEducators:0
         
        });
      } if (formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleAdministrativeStaff:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleAdministrativeStaff:0
         
        });
      }

      if (formValue.governingBodyPaidFullTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleSpecialClassEducators:0
         
        });
      }
     
      this.principalTotal = formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.governingBodyPaidPartTimeMalePrincipal + formValue.governingBodyPaidPartTimeFemalePrincipal
      this.deputyPrincipalTotal = formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal + formValue.governingBodyPaidPartTimeMaleDeputyPrincipal
      this.headOfDepartmentTotal = formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment + formValue.governingBodyPaidPartTimeMaleHeadOfDepartment
      this.educatorsTotal = formValue.governingBodyPaidFullTimeFemaleEducators + formValue.governingBodyPaidFullTimeMaleEducators + formValue.governingBodyPaidPartTimeFemaleEducators + formValue.governingBodyPaidPartTimeMaleEducators
      this.professionalNonTeachingStaffTotal = formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff
      this.administrativeStaffTotal = formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff + formValue.governingBodyPaidPartTimeMaleAdministrativeStaff
      this.supportstaffTotal = formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeMaleSupportstaff + formValue.governingBodyPaidPartTimeFemaleSupportstaff + formValue.governingBodyPaidPartTimeMaleSupportstaff
      this.earlyChildhoodDevelopmentTotal = formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment
      this.specialClassEducatorsTotal = formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators + formValue.governingBodyPaidFullTimeMaleSpecialClassEducators + formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators + formValue.governingBodyPaidPartTimeMaleSpecialClassEducators


      this.privatelyTotalMaleFullTime = formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleEducators +
      formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleSupportstaff + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidFullTimeMaleSpecialClassEducators 

      this.privatelyTotalFemaleFullTime = formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeFemaleEducators +
      formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators

      this.privatelyTotalMalePartTime = formValue.governingBodyPaidPartTimeMalePrincipal + formValue.governingBodyPaidPartTimeMaleDeputyPrincipal + formValue.governingBodyPaidPartTimeMaleHeadOfDepartment + formValue.governingBodyPaidPartTimeMaleEducators +
      formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeMaleAdministrativeStaff + formValue.governingBodyPaidPartTimeMaleSupportstaff + formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidPartTimeMaleSpecialClassEducators 

      this.privatelyTotalFemalePartTime = formValue.governingBodyPaidPartTimeFemalePrincipal + formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal + formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment + formValue.governingBodyPaidPartTimeFemaleEducators +
      formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff + formValue.governingBodyPaidPartTimeFemaleSupportstaff + formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators
      
      this.grandTotal = this.privatelyTotalMaleFullTime  + this.privatelyTotalFemalePartTime + this.privatelyTotalMalePartTime + this.privatelyTotalFemaleFullTime


      
    })


    this.statePaidForm.valueChanges.subscribe((formValue:any) =>{

      if (formValue.stateBodyPaidFullTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMalePrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemalePrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMalePrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemalePrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleDeputyPrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleDeputyPrincipal:0
         
        });
      } if (formValue.stateBodyPaidFullTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleDeputyPrincipal:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleDeputyPrincipal:0
         
        });
      } if (formValue.stateBodyPaidFullTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.stateBodyPaidPartTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.stateBodyPaidFullTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleEducators:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleEducators:0
         
        });
      } if (formValue.stateBodyPaidPartTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleEducators:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleEducators:0
         
        });
      } if (formValue.stateBodyPaidFullTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.stateBodyPaidPartTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.stateBodyPaidFullTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleAdministrativeStaff:0
         
        });
      } if (formValue.stateBodyPaidPartTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleAdministrativeStaff:0
         
        });
      }

      if (formValue.stateBodyPaidFullTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.stateBodyPaidFullTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidFullTimeFemaleSpecialClassEducators:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.stateBodyPaidPartTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          stateBodyPaidPartTimeFemaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemalePrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemalePrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleDeputyPrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleDeputyPrincipal:0
         
        });
      } if (formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleDeputyPrincipal:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleDeputyPrincipal < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleDeputyPrincipal:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleHeadOfDepartment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleHeadOfDepartment:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleEducators:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleEducators:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleEducators:0
         
        });
      } if (formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff:0
         
        });
      } if (formValue.governingBodyPaidFullTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleAdministrativeStaff:0
         
        });
      } if (formValue.governingBodyPaidPartTimeMaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleAdministrativeStaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleAdministrativeStaff:0
         
        });
      }

      if (formValue.governingBodyPaidFullTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleSupportstaff < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleSupportstaff:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidFullTimeFemaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeMaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeMaleSpecialClassEducators:0
         
        });
      }
      if (formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators < 0) {
        this.personnelForm.patchValue({
          governingBodyPaidPartTimeFemaleSpecialClassEducators:0
         
        });
      }
      
   
      this.principalTotal = formValue.statePaidFullTimeMalePrincipal + formValue.statePaidFullTimeFemalePrincipal + formValue.statePaidPartTimeMalePrincipal + formValue.statePaidPartTimeFemalePrincipal + formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.governingBodyPaidPartTimeMalePrincipal + formValue.governingBodyPaidPartTimeFemalePrincipal
      this.deputyPrincipalTotal = formValue.statePaidFullTimeFemaleDeputyPrincipal + formValue.statePaidFullTimeMaleDeputyPrincipal + formValue.statePaidPartTimeFemaleDeputyPrincipal + formValue.statePaidPartTimeMaleDeputyPrincipal + formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal + formValue.governingBodyPaidPartTimeMaleDeputyPrincipal
      this.headOfDepartmentTotal = formValue.statePaidFullTimeFemaleHeadOfDepartment + formValue.statePaidFullTimeMaleHeadOfDepartment + formValue.statePaidPartTimeFemaleHeadOfDepartment + formValue.statePaidPartTimeMaleHeadOfDepartment + formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment + formValue.governingBodyPaidPartTimeMaleHeadOfDepartment
      this.educatorsTotal = formValue.statePaidFullTimeFemaleEducators + formValue.statePaidFullTimeMaleEducators + formValue.statePaidPartTimeFemaleEducators + formValue.statePaidPartTimeMaleEducators + formValue.governingBodyPaidFullTimeFemaleEducators + formValue.governingBodyPaidFullTimeMaleEducators + formValue.governingBodyPaidPartTimeFemaleEducators + formValue.governingBodyPaidPartTimeMaleEducators
      this.professionalNonTeachingStaffTotal = formValue.statePaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeMaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff
      this.administrativeStaffTotal = formValue.statePaidFullTimeFemaleAdministrativeStaff + formValue.statePaidFullTimeMaleAdministrativeStaff + formValue.statePaidPartTimeFemaleAdministrativeStaff + formValue.statePaidPartTimeMaleAdministrativeStaff + formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff + formValue.governingBodyPaidPartTimeMaleAdministrativeStaff
      this.supportstaffTotal = formValue.statePaidFullTimeFemaleSupportstaff + formValue.statePaidFullTimeMaleSupportstaff + formValue.statePaidPartTimeFemaleSupportstaff + formValue.statePaidPartTimeMaleSupportstaff + formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeMaleSupportstaff + formValue.governingBodyPaidPartTimeFemaleSupportstaff + formValue.governingBodyPaidPartTimeMaleSupportstaff
      this.earlyChildhoodDevelopmentTotal = formValue.statePaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.statePaidFullTimeMaleEarlyChildhoodDevelopment + formValue.statePaidPartTimeFemaleEarlyChildhoodDevelopment + formValue.statePaidPartTimeMaleEarlyChildhoodDevelopment + formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment
      this.specialClassEducatorsTotal = formValue.statePaidFullTimeFemaleSpecialClassEducators + formValue.statePaidFullTimeMaleSpecialClassEducators + formValue.statePaidPartTimeFemaleSpecialClassEducators + formValue.statePaidPartTimeMaleSpecialClassEducators + formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators + formValue.governingBodyPaidFullTimeMaleSpecialClassEducators + formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators + formValue.governingBodyPaidPartTimeMaleSpecialClassEducators

      this.stateprincipalTotal = formValue.statePaidFullTimeMalePrincipal + formValue.statePaidFullTimeFemalePrincipal + formValue.statePaidPartTimeMalePrincipal + formValue.statePaidPartTimeFemalePrincipal
      this.statedeputyPrincipalTotal = formValue.statePaidFullTimeFemaleDeputyPrincipal + formValue.statePaidFullTimeMaleDeputyPrincipal + formValue.statePaidPartTimeFemaleDeputyPrincipal + formValue.statePaidPartTimeMaleDeputyPrincipal 
      this.stateheadOfDepartmentTotal = formValue.statePaidFullTimeFemaleHeadOfDepartment + formValue.statePaidFullTimeMaleHeadOfDepartment + formValue.statePaidPartTimeFemaleHeadOfDepartment + formValue.statePaidPartTimeMaleHeadOfDepartment
      this.stateeducatorsTotal = formValue.statePaidFullTimeFemaleEducators + formValue.statePaidFullTimeMaleEducators + formValue.statePaidPartTimeFemaleEducators + formValue.statePaidPartTimeMaleEducators 
      this.stateprofessionalNonTeachingStaffTotal = formValue.statePaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeMaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeMaleProfessionalNonTeachingStaff 
      this.stateadministrativeStaffTotal = formValue.statePaidFullTimeFemaleAdministrativeStaff + formValue.statePaidFullTimeMaleAdministrativeStaff + formValue.statePaidPartTimeFemaleAdministrativeStaff + formValue.statePaidPartTimeMaleAdministrativeStaff 
      this.statesupportstaffTotal = formValue.statePaidFullTimeFemaleSupportstaff + formValue.statePaidFullTimeMaleSupportstaff + formValue.statePaidPartTimeFemaleSupportstaff + formValue.statePaidPartTimeMaleSupportstaff 
      this.statespecialClassEducatorsTotal = formValue.statePaidFullTimeFemaleSpecialClassEducators + formValue.statePaidFullTimeMaleSpecialClassEducators + formValue.statePaidPartTimeFemaleSpecialClassEducators + formValue.statePaidPartTimeMaleSpecialClassEducators 
      this.stateearlyChildhoodDevelopmentTotal = formValue.statePaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.statePaidFullTimeMaleEarlyChildhoodDevelopment + formValue.statePaidPartTimeFemaleEarlyChildhoodDevelopment + formValue.statePaidPartTimeMaleEarlyChildhoodDevelopment

      this.privateprincipalTotal =formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.governingBodyPaidPartTimeMalePrincipal + formValue.governingBodyPaidPartTimeFemalePrincipal
      this.privatedeputyPrincipalTotal =  formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal + formValue.governingBodyPaidPartTimeMaleDeputyPrincipal
      this.privateheadOfDepartmentTotal = formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment + formValue.governingBodyPaidPartTimeMaleHeadOfDepartment
      this.privateeducatorsTotal =  formValue.governingBodyPaidFullTimeFemaleEducators + formValue.governingBodyPaidFullTimeMaleEducators + formValue.governingBodyPaidPartTimeFemaleEducators + formValue.governingBodyPaidPartTimeMaleEducators
      this.privateprofessionalNonTeachingStaffTotal =  formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff
      this.privateadministrativeStaffTotal =  formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff + formValue.governingBodyPaidPartTimeMaleAdministrativeStaff
      this.privatesupportstaffTotal =  formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeMaleSupportstaff + formValue.governingBodyPaidPartTimeFemaleSupportstaff + formValue.governingBodyPaidPartTimeMaleSupportstaff
      this.privateearlyChildhoodDevelopmentTotal =  formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment
      this.privatespecialClassEducatorsTotal =  formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators + formValue.governingBodyPaidFullTimeMaleSpecialClassEducators + formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators + formValue.governingBodyPaidPartTimeMaleSpecialClassEducators

      this.stateTotalMaleFullTime = formValue.statePaidFullTimeMalePrincipal + formValue.statePaidFullTimeMaleDeputyPrincipal + formValue.statePaidFullTimeMaleHeadOfDepartment + formValue.statePaidFullTimeMaleEducators +
      formValue.statePaidFullTimeMaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeMaleAdministrativeStaff + formValue.statePaidFullTimeMaleSupportstaff + formValue.statePaidFullTimeMaleEarlyChildhoodDevelopment +
      formValue.statePaidFullTimeMaleSpecialClassEducators 

      this.stateTotalFemaleFullTime = formValue.statePaidFullTimeFemalePrincipal + formValue.statePaidFullTimeFemaleDeputyPrincipal + formValue.statePaidFullTimeFemaleHeadOfDepartment + formValue.statePaidFullTimeFemaleEducators +
      formValue.statePaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeFemaleAdministrativeStaff + formValue.statePaidFullTimeFemaleSupportstaff + formValue.statePaidFullTimeFemaleEarlyChildhoodDevelopment +
      formValue.statePaidFullTimeFemaleSpecialClassEducators

      this.stateTotalMalePartTime = formValue.statePaidPartTimeMalePrincipal + formValue.statePaidPartTimeMaleDeputyPrincipal + formValue.statePaidPartTimeMaleHeadOfDepartment + formValue.statePaidPartTimeMaleEducators +
      formValue.statePaidPartTimeMaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeMaleAdministrativeStaff + formValue.statePaidPartTimeMaleSupportstaff + formValue.statePaidPartTimeMaleEarlyChildhoodDevelopment +
      formValue.statePaidPartTimeMaleSpecialClassEducators 

      this.stateTotalFemalePartTime = formValue.statePaidPartTimeFemalePrincipal + formValue.statePaidPartTimeFemaleDeputyPrincipal + formValue.statePaidPartTimeFemaleHeadOfDepartment + formValue.statePaidPartTimeFemaleEducators +
      formValue.statePaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidPartTimeFemaleAdministrativeStaff + formValue.statePaidPartTimeFemaleSupportstaff + formValue.statePaidPartTimeFemaleEarlyChildhoodDevelopment +
      formValue.statePaidPartTimeFemaleSpecialClassEducators


      this.privatelyTotalMaleFullTime = formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleEducators +
      formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleSupportstaff + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidFullTimeMaleSpecialClassEducators 

      this.privatelyTotalFemaleFullTime = formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeFemaleEducators +
      formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators

      this.privatelyTotalMalePartTime = formValue.governingBodyPaidPartTimeMalePrincipal + formValue.governingBodyPaidPartTimeMaleDeputyPrincipal + formValue.governingBodyPaidPartTimeMaleHeadOfDepartment + formValue.governingBodyPaidPartTimeMaleEducators +
      formValue.governingBodyPaidPartTimeMaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeMaleAdministrativeStaff + formValue.governingBodyPaidPartTimeMaleSupportstaff + formValue.governingBodyPaidPartTimeMaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidPartTimeMaleSpecialClassEducators 

      this.privatelyTotalFemalePartTime = formValue.governingBodyPaidPartTimeFemalePrincipal + formValue.governingBodyPaidPartTimeFemaleDeputyPrincipal + formValue.governingBodyPaidPartTimeFemaleHeadOfDepartment + formValue.governingBodyPaidPartTimeFemaleEducators +
      formValue.governingBodyPaidPartTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidPartTimeFemaleAdministrativeStaff + formValue.governingBodyPaidPartTimeFemaleSupportstaff + formValue.governingBodyPaidPartTimeFemaleEarlyChildhoodDevelopment +
      formValue.governingBodyPaidPartTimeFemaleSpecialClassEducators

      this.stateTotal =   this.stateTotalMaleFullTime + this.stateTotalFemaleFullTime +  this.stateTotalMalePartTime + this.stateTotalFemalePartTime +
      this.privatelyTotalMaleFullTime + this.privatelyTotalFemaleFullTime + this.privatelyTotalFemalePartTime + this.privatelyTotalMalePartTime


      if (formValue.statePaidFullTimeMalePrincipal > 1 || formValue.statePaidFullTimeMalePrincipal < 0) {
        this.statePaidForm.patchValue({
        
          statePaidFullTimeMalePrincipal: 0
        });
      }
      if (formValue.statePaidFullTimeFemalePrincipal > 1 || formValue.statePaidFullTimeFemalePrincipal < 0) {
        this.statePaidForm.patchValue({
        
          statePaidFullTimeFemalePrincipal: 0
        });
      }
      if (formValue.statePaidFullTimeMalePrincipal == 1) {
        this.statePaidForm.patchValue({
        
          statePaidFullTimeFemalePrincipal: 0
        });
      }
       if (formValue.statePaidFullTimeFemalePrincipal == 1) {
        this.statePaidForm.patchValue({
        
          statePaidFullTimeMalePrincipal: 0
        });
      }
    })

  
  }

  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.personnelForm.valid) {
      console.log(this.personnelForm.value);

      this.head.savePersonnel(this.personnelForm.value).subscribe({
        next:(res) => {
        
          sessionStorage.setItem('personnel',JSON.stringify(res))
         
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
          this.ref.close()
          setTimeout(()=>{
            window.location.reload()

          }, 2000)
        },
        error:(err)=>{
          console.log(err);
        }
      })
   
    } else{
      this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

    }
  }

  statePaidSubmit(){
    if (this.statePaidForm.valid) {
      console.log(this.statePaidForm.value);

      this.head.savePersonnel(this.statePaidForm.value).subscribe({
        next:(res) => {
        
          sessionStorage.setItem('personnel',JSON.stringify(res))
         
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
          this.ref.close()
          setTimeout(()=>{
            window.location.reload()

          }, 2000)
        },
        error:(err)=>{
          console.log(err);
        }
      })
   
    } else{
      this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

    }
      
    
  }
  private handleNegativeValues(): void {
    const formControlNames = Object.keys(this.personnelForm.controls);

    formControlNames.forEach(controlName => {
      const controlValue = this.personnelForm.get(controlName).value;
      if (controlValue < 0) {


        this.personnelForm.patchValue({
        
          controlName: 0
        });
      }
    });
  }
}
