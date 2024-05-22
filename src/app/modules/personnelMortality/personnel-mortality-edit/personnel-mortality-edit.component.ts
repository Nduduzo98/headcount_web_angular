import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
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
  selector: 'app-personnel-mortality-edit',
  templateUrl: './personnel-mortality-edit.component.html',
  styleUrls: ['./personnel-mortality-edit.component.scss']
})
export class PersonnelMortalityEditComponent {
  schoolDetails: any;
  surveyDetails:any;

  personnelForm:any
  statePaidForm:any
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

  totalPrincipalMale: any;
  totalPrincipalFemale: any;
  totalDeputyMale: any;
  totalDeputyFemale: any;
  totalHodMale: any;
  totalHodFemale: any;
  totalEducatorsMale: any;
  totalEducatorsFemale: any;
  totalAdministratorMale: any;
  totalAdministratorFemale: any;
  totalProfessionalMale: any;
  totalProfessionalFemale: any;
  totalSupportStaffMale: any;
  totalSupportStaffFemale: any;
  totalOtherMale: any;
  totalOtherFemale: any;
  totalAccident: any;
  totalillness: any;
  totalsuicide: any;
  totalviolenceAndHomicide: any;
  totalother: any;
  grandTotal: any;


  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<PersonnelMortalityEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }

  ngOnInit(): void {
    this.sectorTypeId = this.schoolDetails.sectorId

    this.personnelForm = this.formBuilder.group({
      id:[],
      schoolSurveyID: [],
      accidentPrincipalMale: [null,[Validators.min(0)]],
 
      accidentPrincipalFemale: [null,[Validators.min(0)]],
 
      accidentDeputyMale: [null,[Validators.min(0)]],
 
      accidentDeputyFemale: [null,[Validators.min(0)]],
 
      accidentHodMale: [null,[Validators.min(0)]],
 
      accidentHodFemale: [null,[Validators.min(0)]],
 
      accidentEducatorsMale: [null,[Validators.min(0)]],
 
      accidentEducatorsFemale: [null,[Validators.min(0)]],
 
      accidentAdministratorMale: [null,[Validators.min(0)]],
 
      accidentAdministratorFemale: [null,[Validators.min(0)]],
 
      accidentProfessionalMale: [null,[Validators.min(0)]],
 
      accidentProfessionalFemale: [null,[Validators.min(0)]],
 
      accidentSupportStaffMale: [null,[Validators.min(0)]],
 
      accidentSupportStaffFemale: [null,[Validators.min(0)]],
 
      accidentOtherMale: [null,[Validators.min(0)]],
 
      accidentOtherFemale: [null,[Validators.min(0)]],
 

      illnessPrincipalMale: [null,[Validators.min(0)]],
 
      illnessPrincipalFemale: [null,[Validators.min(0)]],
 
      illnessDeputyMale: [null,[Validators.min(0)]],
 
      illnessDeputyFemale: [null,[Validators.min(0)]],
 
      illnessHodMale: [null,[Validators.min(0)]],
 
      illnessHodFemale: [null,[Validators.min(0)]],
 
      illnessEducatorsMale: [null,[Validators.min(0)]],
 
      illnessEducatorsFemale: [null,[Validators.min(0)]],
 
      illnessAdministratorMale: [null,[Validators.min(0)]],
 
      illnessAdministratorFemale: [null,[Validators.min(0)]],
 
      illnessProfessionalMale: [null,[Validators.min(0)]],
 
      illnessProfessionalFemale: [null,[Validators.min(0)]],
 
      illnessSupportStaffMale: [null,[Validators.min(0)]],
 
      illnessSupportStaffFemale: [null,[Validators.min(0)]],
 
      illnessOtherMale: [null,[Validators.min(0)]],
 
      illnessOtherFemale: [null,[Validators.min(0)]],
 

      violenceAndHomicidePrincipalMale: [null,[Validators.min(0)]],
 
      violenceAndHomicidePrincipalFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideDeputyMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideDeputyFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideHodMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideHodFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideEducatorsMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideEducatorsFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideAdministratorMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideAdministratorFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideProfessionalMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideProfessionalFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideSupportStaffMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideSupportStaffFemale: [null,[Validators.min(0)]],
 
      violenceAndHomicideOtherMale: [null,[Validators.min(0)]],
 
      violenceAndHomicideOtherFemale: [null,[Validators.min(0)]],
 

      suicidePrincipalMale: [null,[Validators.min(0)]],
 
      suicidePrincipalFemale: [null,[Validators.min(0)]],
 
      suicideDeputyMale: [null,[Validators.min(0)]],
 
      suicideDeputyFemale: [null,[Validators.min(0)]],
 
      suicideHodMale: [null,[Validators.min(0)]],
 
      suicideHodFemale: [null,[Validators.min(0)]],
 
      suicideEducatorsMale: [null,[Validators.min(0)]],
 
      suicideEducatorsFemale: [null,[Validators.min(0)]],
 
      suicideAdministratorMale: [null,[Validators.min(0)]],
 
      suicideAdministratorFemale: [null,[Validators.min(0)]],
 
      suicideProfessionalMale: [null,[Validators.min(0)]],
 
      suicideProfessionalFemale: [null,[Validators.min(0)]],
 
      suicideSupportStaffMale: [null,[Validators.min(0)]],
 
      suicideSupportStaffFemale: [null,[Validators.min(0)]],
 
      suicideOtherMale: [null,[Validators.min(0)]],
 
      suicideOtherFemale: [null,[Validators.min(0)]],
 

      otherPrincipalMale: [null,[Validators.min(0)]],
 
      otherPrincipalFemale: [null,[Validators.min(0)]],
 
      otherDeputyMale: [null,[Validators.min(0)]],
 
      otherDeputyFemale: [null,[Validators.min(0)]],
 
      otherHodMale: [null,[Validators.min(0)]],
 
      otherHodFemale: [null,[Validators.min(0)]],
 
      otherEducatorsMale: [null,[Validators.min(0)]],
 
      otherEducatorsFemale: [null,[Validators.min(0)]],
 
      otherAdministratorMale: [null,[Validators.min(0)]],
 
      otherAdministratorFemale: [null,[Validators.min(0)]],
 
      otherProfessionalMale: [null,[Validators.min(0)]],
 
      otherProfessionalFemale: [null,[Validators.min(0)]],
 
      otherSupportStaffMale: [null,[Validators.min(0)]],
 
      otherSupportStaffFemale: [null,[Validators.min(0)]],
 
      otherOtherMale: [null,[Validators.min(0)]],
 
      otherOtherFemale: [null,[Validators.min(0)]],
 

      totalPrincipalMale: [null,[Validators.min(0)]],
 
      totalPrincipalFemale: [null,[Validators.min(0)]],
 
      totalDeputyMale: [null,[Validators.min(0)]],
 
      totalDeputyFemale: [null,[Validators.min(0)]],
 
      totalHodMale: [null,[Validators.min(0)]],
 
      totalHodFemale: [null,[Validators.min(0)]],
 
      totalEducatorsMale: [null,[Validators.min(0)]],
 
      totalEducatorsFemale: [null,[Validators.min(0)]],
 
      totalAdministratorMale: [null,[Validators.min(0)]],
 
      totalAdministratorFemale: [null,[Validators.min(0)]],
 
      totalProfessionalMale: [null,[Validators.min(0)]],
 
      totalProfessionalFemale: [null,[Validators.min(0)]],
 
      totalSupportStaffMale: [null,[Validators.min(0)]],
 
      totalSupportStaffFemale: [null,[Validators.min(0)]],
 
      totalOtherMale: [null,[Validators.min(0)]],
 
      totalOtherFemale: [null,[Validators.min(0)]],
      totalAccident:[0,[Validators.min(0)]],
      totalviolenceAndHomicide:[0,[Validators.min(0)]],
      totalsuicide:[0,[Validators.min(0)]],
      totalillness:[0,[Validators.min(0)]],
      grandTotal:[0,[Validators.min(0)]],
      totalother:[0,[Validators.min(0)]],
      statusID: [1]
    })
    this.personnelForm.patchValue(this.data)
    console.log(this.data);
    

    this.personnelForm.valueChanges.subscribe((formValue:any) =>{
      this.totalAccident =
      formValue.accidentPrincipalMale + formValue.accidentPrincipalFemale +
      formValue.accidentDeputyMale + formValue.accidentDeputyFemale +
      formValue.accidentHodMale + formValue.accidentHodFemale +
      formValue.accidentEducatorsMale + formValue.accidentEducatorsFemale +
      formValue.accidentAdministratorMale + formValue.accidentAdministratorFemale +
      formValue.accidentProfessionalMale + formValue.accidentProfessionalFemale +
      formValue.accidentSupportStaffMale + formValue.accidentSupportStaffFemale +
      formValue.accidentOtherMale + formValue.accidentOtherFemale;

      this.totalillness =
      formValue.illnessPrincipalMale + formValue.illnessPrincipalFemale +
      formValue.illnessDeputyMale + formValue.illnessDeputyFemale +
      formValue.illnessHodMale + formValue.illnessHodFemale +
      formValue.illnessEducatorsMale + formValue.illnessEducatorsFemale +
      formValue.illnessAdministratorMale + formValue.illnessAdministratorFemale +
      formValue.illnessProfessionalMale + formValue.illnessProfessionalFemale +
      formValue.illnessSupportStaffMale + formValue.illnessSupportStaffFemale +
      formValue.illnessOtherMale + formValue.illnessOtherFemale;

this.totalsuicide =
      formValue.suicidePrincipalMale + formValue.suicidePrincipalFemale +
      formValue.suicideDeputyMale + formValue.suicideDeputyFemale +
      formValue.suicideHodMale + formValue.suicideHodFemale +
      formValue.suicideEducatorsMale + formValue.suicideEducatorsFemale +
      formValue.suicideAdministratorMale + formValue.suicideAdministratorFemale +
      formValue.suicideProfessionalMale + formValue.suicideProfessionalFemale +
      formValue.suicideSupportStaffMale + formValue.suicideSupportStaffFemale +
      formValue.suicideOtherMale + formValue.suicideOtherFemale;

      this.totalviolenceAndHomicide =
      formValue.violenceAndHomicidePrincipalMale + formValue.violenceAndHomicidePrincipalFemale +
      formValue.violenceAndHomicideDeputyMale + formValue.violenceAndHomicideDeputyFemale +
      formValue.violenceAndHomicideHodMale + formValue.violenceAndHomicideHodFemale +
      formValue.violenceAndHomicideEducatorsMale + formValue.violenceAndHomicideEducatorsFemale +
      formValue.violenceAndHomicideAdministratorMale + formValue.violenceAndHomicideAdministratorFemale +
      formValue.violenceAndHomicideProfessionalMale + formValue.violenceAndHomicideProfessionalFemale +
      formValue.violenceAndHomicideSupportStaffMale + formValue.violenceAndHomicideSupportStaffFemale +
      formValue.violenceAndHomicideOtherMale + formValue.violenceAndHomicideOtherFemale;

      this.totalother =
      formValue.otherPrincipalMale + formValue.otherPrincipalFemale +
      formValue.otherDeputyMale + formValue.otherDeputyFemale +
      formValue.otherHodMale + formValue.otherHodFemale +
      formValue.otherEducatorsMale + formValue.otherEducatorsFemale +
      formValue.otherAdministratorMale + formValue.otherAdministratorFemale +
      formValue.otherProfessionalMale + formValue.otherProfessionalFemale +
      formValue.otherSupportStaffMale + formValue.otherSupportStaffFemale +
      formValue.otherOtherMale + formValue.otherOtherFemale;


      this.grandTotal =
      formValue.totalPrincipalMale + formValue.totalPrincipalFemale +
      formValue.totalDeputyMale + formValue.totalDeputyFemale +
      formValue.totalHodMale + formValue.totalHodFemale +
      formValue.totalEducatorsMale + formValue.totalEducatorsFemale +
      formValue.totalAdministratorMale + formValue.totalAdministratorFemale +
      formValue.totalProfessionalMale + formValue.totalProfessionalFemale +
      formValue.totalSupportStaffMale + formValue.totalSupportStaffFemale +
      formValue.totalOtherMale + formValue.totalOtherFemale;
 


      if (formValue.accidentPrincipalFemale < 0) {
        this.personnelForm.patchValue({
          accidentPrincipalFemale:0
         
        });
      }
      if (formValue.accidentPrincipalMale < 0) {
        this.personnelForm.patchValue({
          accidentPrincipalMale:0
         
        });
      }
      if (formValue.accidentDeputyMale < 0) {
        this.personnelForm.patchValue({
          accidentDeputyMale:0
         
        });
      } if (formValue.accidentDeputyFemale < 0) {
        this.personnelForm.patchValue({
          accidentDeputyFemale:0
         
        });
      }
      if (formValue.accidentHodMale < 0) {
        this.personnelForm.patchValue({
          accidentHodMale:0
         
        });
      } if (formValue.accidentHodFemale < 0) {
        this.personnelForm.patchValue({
          accidentHodFemale:0
         
        });
      }
      if (formValue.accidentEducatorsMale < 0) {
        this.personnelForm.patchValue({
          accidentEducatorsMale:0
         
        });
      } if (formValue.accidentEducatorsFemale < 0) {
        this.personnelForm.patchValue({
          accidentEducatorsFemale:0
         
        });
      }
      if (formValue.accidentAdministratorMale < 0) {
        this.personnelForm.patchValue({
          accidentAdministratorMale:0
         
        });
      } if (formValue.accidentAdministratorFemale < 0) {
        this.personnelForm.patchValue({
          accidentAdministratorFemale:0
         
        });
      }
      if (formValue.accidentProfessionalMale < 0) {
        this.personnelForm.patchValue({
          accidentProfessionalMale:0
         
        });
      } if (formValue.accidentProfessionalFemale < 0) {
        this.personnelForm.patchValue({
          accidentProfessionalFemale:0
         
        });
      }
      if (formValue.accidentSupportStaffMale < 0) {
        this.personnelForm.patchValue({
          accidentSupportStaffMale:0
         
        });
      } if (formValue.accidentSupportStaffFemale < 0) {
        this.personnelForm.patchValue({
          accidentSupportStaffFemale:0
         
        });
      }
      if (formValue.accidentOtherMale < 0) {
        this.personnelForm.patchValue({
          accidentOtherMale:0
         
        });
      } if (formValue.accidentOtherFemale < 0) {
        this.personnelForm.patchValue({
          accidentOtherFemale:0
         
        });
      }

     

      if (formValue.illnessPrincipalFemale < 0) {
        this.personnelForm.patchValue({
          illnessPrincipalFemale:0
         
        });
      }
      if (formValue.illnessPrincipalMale < 0) {
        this.personnelForm.patchValue({
          illnessPrincipalMale:0
         
        });
      }
      if (formValue.illnessDeputyMale < 0) {
        this.personnelForm.patchValue({
          illnessDeputyMale:0
         
        });
      } if (formValue.illnessDeputyFemale < 0) {
        this.personnelForm.patchValue({
          illnessDeputyFemale:0
         
        });
      }
      if (formValue.illnessHodMale < 0) {
        this.personnelForm.patchValue({
          illnessHodMale:0
         
        });
      } if (formValue.illnessHodFemale < 0) {
        this.personnelForm.patchValue({
          illnessHodFemale:0
         
        });
      }
      if (formValue.illnessEducatorsMale < 0) {
        this.personnelForm.patchValue({
          illnessEducatorsMale:0
         
        });
      } if (formValue.illnessEducatorsFemale < 0) {
        this.personnelForm.patchValue({
          illnessEducatorsFemale:0
         
        });
      }
      if (formValue.illnessAdministratorMale < 0) {
        this.personnelForm.patchValue({
          illnessAdministratorMale:0
         
        });
      } if (formValue.illnessAdministratorFemale < 0) {
        this.personnelForm.patchValue({
          illnessAdministratorFemale:0
         
        });
      }
      if (formValue.illnessProfessionalMale < 0) {
        this.personnelForm.patchValue({
          illnessProfessionalMale:0
         
        });
      } if (formValue.illnessProfessionalFemale < 0) {
        this.personnelForm.patchValue({
          illnessProfessionalFemale:0
         
        });
      }
      if (formValue.illnessSupportStaffMale < 0) {
        this.personnelForm.patchValue({
          illnessSupportStaffMale:0
         
        });
      } if (formValue.illnessSupportStaffFemale < 0) {
        this.personnelForm.patchValue({
          illnessSupportStaffFemale:0
         
        });
      }
      if (formValue.illnessOtherMale < 0) {
        this.personnelForm.patchValue({
          illnessOtherMale:0
         
        });
      } if (formValue.illnessOtherFemale < 0) {
        this.personnelForm.patchValue({
          illnessOtherFemale:0
         
        });
      }

      if (formValue.violenceAndHomicidePrincipalFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicidePrincipalFemale:0
         
        });
      }
      if (formValue.violenceAndHomicidePrincipalMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicidePrincipalMale:0
         
        });
      }
      if (formValue.violenceAndHomicideDeputyMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideDeputyMale:0
         
        });
      } if (formValue.violenceAndHomicideDeputyFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideDeputyFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideHodMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideHodMale:0
         
        });
      } if (formValue.violenceAndHomicideHodFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideHodFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideEducatorsMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideEducatorsMale:0
         
        });
      } if (formValue.violenceAndHomicideEducatorsFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideEducatorsFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideAdministratorMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideAdministratorMale:0
         
        });
      } if (formValue.violenceAndHomicideAdministratorFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideAdministratorFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideProfessionalMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideProfessionalMale:0
         
        });
      } if (formValue.violenceAndHomicideProfessionalFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideProfessionalFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideSupportStaffMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideSupportStaffMale:0
         
        });
      } if (formValue.violenceAndHomicideSupportStaffFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideSupportStaffFemale:0
         
        });
      }
      if (formValue.violenceAndHomicideOtherMale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideOtherMale:0
         
        });
      } if (formValue.violenceAndHomicideOtherFemale < 0) {
        this.personnelForm.patchValue({
          violenceAndHomicideOtherFemale:0
         
        });
      }
      if (formValue.suicidePrincipalFemale < 0) {
        this.personnelForm.patchValue({
          suicidePrincipalFemale:0
         
        });
      }
      if (formValue.suicidePrincipalMale < 0) {
        this.personnelForm.patchValue({
          suicidePrincipalMale:0
         
        });
      }
      if (formValue.suicideDeputyMale < 0) {
        this.personnelForm.patchValue({
          suicideDeputyMale:0
         
        });
      } if (formValue.suicideDeputyFemale < 0) {
        this.personnelForm.patchValue({
          suicideDeputyFemale:0
         
        });
      }
      if (formValue.suicideHodMale < 0) {
        this.personnelForm.patchValue({
          suicideHodMale:0
         
        });
      } if (formValue.suicideHodFemale < 0) {
        this.personnelForm.patchValue({
          suicideHodFemale:0
         
        });
      }
      if (formValue.suicideEducatorsMale < 0) {
        this.personnelForm.patchValue({
          suicideEducatorsMale:0
         
        });
      } if (formValue.suicideEducatorsFemale < 0) {
        this.personnelForm.patchValue({
          suicideEducatorsFemale:0
         
        });
      }
      if (formValue.suicideAdministratorMale < 0) {
        this.personnelForm.patchValue({
          suicideAdministratorMale:0
         
        });
      } if (formValue.suicideAdministratorFemale < 0) {
        this.personnelForm.patchValue({
          suicideAdministratorFemale:0
         
        });
      }
      if (formValue.suicideProfessionalMale < 0) {
        this.personnelForm.patchValue({
          suicideProfessionalMale:0
         
        });
      } if (formValue.suicideProfessionalFemale < 0) {
        this.personnelForm.patchValue({
          suicideProfessionalFemale:0
         
        });
      }
      if (formValue.suicideSupportStaffMale < 0) {
        this.personnelForm.patchValue({
          suicideSupportStaffMale:0
         
        });
      } if (formValue.suicideSupportStaffFemale < 0) {
        this.personnelForm.patchValue({
          suicideSupportStaffFemale:0
         
        });
      }
      if (formValue.suicideOtherMale < 0) {
        this.personnelForm.patchValue({
          suicideOtherMale:0
         
        });
      } if (formValue.suicideOtherFemale < 0) {
        this.personnelForm.patchValue({
          suicideOtherFemale:0
         
        });
      }

      if (formValue.otherPrincipalFemale < 0) {
        this.personnelForm.patchValue({
          otherPrincipalFemale:0
         
        });
      }
      if (formValue.otherPrincipalMale < 0) {
        this.personnelForm.patchValue({
          otherPrincipalMale:0
         
        });
      }
      if (formValue.otherDeputyMale < 0) {
        this.personnelForm.patchValue({
          otherDeputyMale:0
         
        });
      } if (formValue.otherDeputyFemale < 0) {
        this.personnelForm.patchValue({
          otherDeputyFemale:0
         
        });
      }
      if (formValue.otherHodMale < 0) {
        this.personnelForm.patchValue({
          otherHodMale:0
         
        });
      } if (formValue.otherHodFemale < 0) {
        this.personnelForm.patchValue({
          otherHodFemale:0
         
        });
      }
      if (formValue.otherEducatorsMale < 0) {
        this.personnelForm.patchValue({
          otherEducatorsMale:0
         
        });
      } if (formValue.otherEducatorsFemale < 0) {
        this.personnelForm.patchValue({
          otherEducatorsFemale:0
         
        });
      }
      if (formValue.otherAdministratorMale < 0) {
        this.personnelForm.patchValue({
          otherAdministratorMale:0
         
        });
      } if (formValue.otherAdministratorFemale < 0) {
        this.personnelForm.patchValue({
          otherAdministratorFemale:0
         
        });
      }
      if (formValue.otherProfessionalMale < 0) {
        this.personnelForm.patchValue({
          otherProfessionalMale:0
         
        });
      } if (formValue.otherProfessionalFemale < 0) {
        this.personnelForm.patchValue({
          otherProfessionalFemale:0
         
        });
      }
      if (formValue.otherSupportStaffMale < 0) {
        this.personnelForm.patchValue({
          otherSupportStaffMale:0
         
        });
      } if (formValue.otherSupportStaffFemale < 0) {
        this.personnelForm.patchValue({
          otherSupportStaffFemale:0
         
        });
      }
      if (formValue.otherOtherMale < 0) {
        this.personnelForm.patchValue({
          otherOtherMale:0
         
        });
      } if (formValue.otherOtherFemale < 0) {
        this.personnelForm.patchValue({
          otherOtherFemale:0
         
        });
      }
      this.totalPrincipalMale =  formValue.accidentPrincipalMale +
      formValue.illnessPrincipalMale +
      formValue.violenceAndHomicidePrincipalMale +
      formValue.suicidePrincipalMale +
      formValue.otherPrincipalMale

      this.totalPrincipalFemale = formValue.accidentPrincipalFemale +
      formValue.illnessPrincipalFemale +
      formValue.violenceAndHomicidePrincipalFemale +
      formValue.suicidePrincipalFemale +
      formValue.otherPrincipalFemale

      this.totalDeputyMale =  formValue.accidentDeputyMale +
      formValue.illnessDeputyMale +
      formValue.violenceAndHomicideDeputyMale +
      formValue.suicideDeputyMale +
      formValue.otherDeputyMale

      this.totalDeputyFemale = formValue.accidentDeputyFemale +
      formValue.illnessDeputyFemale +
      formValue.violenceAndHomicideDeputyFemale +
      formValue.suicideDeputyFemale +
      formValue.otherDeputyFemale


      this.totalHodMale =  formValue.accidentHodMale +
      formValue.illnessHodMale +
      formValue.violenceAndHomicideHodMale +
      formValue.suicideHodMale +
      formValue.otherHodMale

      this.totalHodFemale = formValue.accidentHodFemale +
      formValue.illnessHodFemale +
      formValue.violenceAndHomicideHodFemale +
      formValue.suicideHodFemale +
      formValue.otherHodFemale
      
      this.totalEducatorsMale =  formValue.accidentEducatorsMale +
      formValue.illnessEducatorsMale +
      formValue.violenceAndHomicideEducatorsMale +
      formValue.suicideEducatorsMale +
      formValue.otherEducatorsMale

      this.totalEducatorsFemale = formValue.accidentEducatorsFemale +
      formValue.illnessEducatorsFemale +
      formValue.violenceAndHomicideEducatorsFemale +
      formValue.suicideEducatorsFemale +
      formValue.otherEducatorsFemale


      this.totalAdministratorMale =  formValue.accidentAdministratorMale +
      formValue.illnessAdministratorMale +
      formValue.violenceAndHomicideAdministratorMale +
      formValue.suicideAdministratorMale +
      formValue.otherAdministratorMale

      this.totalAdministratorFemale = formValue.accidentAdministratorFemale +
      formValue.illnessAdministratorFemale +
      formValue.violenceAndHomicideAdministratorFemale +
      formValue.suicideAdministratorFemale +
      formValue.otherAdministratorFemale

      this.totalProfessionalMale =  formValue.accidentProfessionalMale +
      formValue.illnessProfessionalMale +
      formValue.violenceAndHomicideProfessionalMale +
      formValue.suicideProfessionalMale +
      formValue.otherProfessionalMale

      this.totalProfessionalFemale = formValue.accidentProfessionalFemale +
      formValue.illnessProfessionalFemale +
      formValue.violenceAndHomicideProfessionalFemale +
      formValue.suicideProfessionalFemale +
      formValue.otherProfessionalFemale
      
      this.totalSupportStaffMale =  formValue.accidentSupportStaffMale +
      formValue.illnessSupportStaffMale +
      formValue.violenceAndHomicideSupportStaffMale +
      formValue.suicideSupportStaffMale +
      formValue.otherSupportStaffMale

      this.totalSupportStaffFemale = formValue.accidentSupportStaffFemale +
      formValue.illnessSupportStaffFemale +
      formValue.violenceAndHomicideSupportStaffFemale +
      formValue.suicideSupportStaffFemale +
      formValue.otherSupportStaffFemale

      this.totalOtherMale =  formValue.accidentOtherMale +
      formValue.illnessOtherMale +
      formValue.violenceAndHomicideOtherMale +
      formValue.suicideOtherMale +
      formValue.otherOtherMale

      this.totalOtherFemale = formValue.accidentOtherFemale +
      formValue.illnessOtherFemale +
      formValue.violenceAndHomicideOtherFemale +
      formValue.suicideOtherFemale +
      formValue.otherOtherFemale

    })

    this.statePaidForm = this.formBuilder.group({
      id:[],
      schoolSurveyID: [],
      governingBodyPaidFullTimeMalePrincipal: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleDeputyPrincipal: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleHeadOfDepartment: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEducators: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleAdministrativeStaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemalePrincipal: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleDeputyPrincipal: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleHeadOfDepartment: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEducators: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleAdministrativeStaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSupportstaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeMaleSpecialClassEducators: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSupportstaff: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment: [null,[Validators.min(0)]],
      governingBodyPaidFullTimeFemaleSpecialClassEducators: [null,[Validators.min(0)]],
      statePaidFullTimeMalePrincipal: [null,[Validators.min(0)]],
      statePaidFullTimeMaleDeputyPrincipal: [null,[Validators.min(0)]],
      statePaidFullTimeMaleHeadOfDepartment: [null,[Validators.min(0)]],
      statePaidFullTimeMaleEducators: [null,[Validators.min(0)]],
      statePaidFullTimeMaleProfessionalNonTeachingStaff: [null,[Validators.min(0)]],
      statePaidFullTimeMaleAdministrativeStaff: [null,[Validators.min(0)]],
      statePaidFullTimeFemalePrincipal: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleDeputyPrincipal: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleHeadOfDepartment: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleEducators: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleProfessionalNonTeachingStaff: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleAdministrativeStaff: [null,[Validators.min(0)]],
      statePaidFullTimeMaleSupportstaff: [null,[Validators.min(0)]],
      statePaidFullTimeMaleEarlyChildhoodDevelopment: [null,[Validators.min(0)]],
      statePaidFullTimeMaleSpecialClassEducators: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleSupportstaff: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleEarlyChildhoodDevelopment: [null,[Validators.min(0)]],
      statePaidFullTimeFemaleSpecialClassEducators: [null,[Validators.min(0)]],
      principalTotal: [null,[Validators.min(0)]],
      deputyPrincipalTotal: [null,[Validators.min(0)]],
      headOfDepartmentTotal: [null,[Validators.min(0)]],
      educatorsTotal: [null,[Validators.min(0)]],
      professionalNonTeachingStaffTotal: [null,[Validators.min(0)]],
      administrativeStaffTotal: [null,[Validators.min(0)]],
      supportstaffTotal: [null,[Validators.min(0)]],
      earlyChildhoodDevelopmentTotal: [null,[Validators.min(0)]],
      specialClassEducatorsTotal: [null,[Validators.min(0)]],
      statusID: [1]
    })

    this.statePaidForm.patchValue(this.data)
    this.statePaidForm.valueChanges.subscribe((formValue:any) =>{

      this.principalTotal = formValue.governingBodyPaidFullTimeMalePrincipal + formValue.governingBodyPaidFullTimeFemalePrincipal + formValue.statePaidFullTimeMalePrincipal + formValue.statePaidFullTimeFemalePrincipal
      this.deputyPrincipalTotal = formValue.governingBodyPaidFullTimeFemaleDeputyPrincipal + formValue.governingBodyPaidFullTimeMaleDeputyPrincipal + formValue.statePaidFullTimeFemaleDeputyPrincipal + formValue.statePaidFullTimeMaleDeputyPrincipal
      this.headOfDepartmentTotal = formValue.governingBodyPaidFullTimeFemaleHeadOfDepartment + formValue.governingBodyPaidFullTimeMaleHeadOfDepartment + formValue.statePaidFullTimeFemaleHeadOfDepartment + formValue.statePaidFullTimeMaleHeadOfDepartment
      this.educatorsTotal = formValue.governingBodyPaidFullTimeFemaleEducators + formValue.governingBodyPaidFullTimeMaleEducators + formValue.statePaidFullTimeFemaleEducators + formValue.statePaidFullTimeMaleEducators
      this.professionalNonTeachingStaffTotal = formValue.governingBodyPaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.governingBodyPaidFullTimeMaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeFemaleProfessionalNonTeachingStaff + formValue.statePaidFullTimeMaleProfessionalNonTeachingStaff
      this.administrativeStaffTotal = formValue.governingBodyPaidFullTimeFemaleAdministrativeStaff + formValue.governingBodyPaidFullTimeMaleAdministrativeStaff + formValue.statePaidFullTimeFemaleAdministrativeStaff + formValue.statePaidFullTimeMaleAdministrativeStaff 
      this.supportstaffTotal = formValue.governingBodyPaidFullTimeFemaleSupportstaff + formValue.governingBodyPaidFullTimeMaleSupportstaff +  formValue.statePaidFullTimeFemaleSupportstaff + formValue.statePaidFullTimeMaleSupportstaff
      this.earlyChildhoodDevelopmentTotal = formValue.governingBodyPaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.governingBodyPaidFullTimeMaleEarlyChildhoodDevelopment + formValue.statePaidFullTimeFemaleEarlyChildhoodDevelopment + formValue.statePaidFullTimeMaleEarlyChildhoodDevelopment
      this.specialClassEducatorsTotal = formValue.governingBodyPaidFullTimeFemaleSpecialClassEducators + formValue.governingBodyPaidFullTimeMaleSpecialClassEducators + formValue.statePaidFullTimeFemaleSpecialClassEducators + formValue.statePaidFullTimeMaleSpecialClassEducators



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

      this.head.updatePersonnelMortality(this.personnelForm.value).subscribe({
        next:(res) => {
        
          sessionStorage.setItem('personnelMortality',JSON.stringify(res))
         
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

  PersonnelMortalitySubmit(){
    if (this.personnelForm.valid) {
      

      this.head.updatePersonnelMortality(this.personnelForm.value).subscribe({
        next:(res) => {
        
          sessionStorage.setItem('personnelMortality',JSON.stringify(res))
         
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

}
