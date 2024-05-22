import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';
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
  selector: 'app-learner-mortality',
  templateUrl: './learner-mortality.component.html',
  styleUrls: ['./learner-mortality.component.scss']
})
export class LearnerMortalityComponent {
  schoolDetails: any;
  surveyDetails:any
  learnersMortalityForm:any
  preGradeR:any
  gR:any
  g1:any
 g2:any
 g3:any
 g4:any
 g5:any
 g6:any
 g7:any
 g8:any
 g9:any
 g10:any
 g11:any
 g12:any
 gSpecial:any
 gOther:any

gCalcMalePreGradeR:any
 gCalcMaleR:any
 gCalcMale1:any
gCalcMale2:any
gCalcMale3:any
gCalcMale4:any
gCalcMale5:any
gCalcMale6:any
gCalcMale7:any
gCalcMale8:any
gCalcMale9:any
gCalcMale10:any
gCalcMale11:any
gCalcMale12:any
gCalcMaleSpecial:any
gCalcMaleOther:any

gCalcFemalePreGradeR:any
gCalcFemaleR:any
gCalcFemale1:any
gCalcFemale2:any
gCalcFemale3:any
gCalcFemale4:any
gCalcFemale5:any
gCalcFemale6:any
gCalcFemale7:any
gCalcFemale8:any
gCalcFemale9:any
gCalcFemale10:any
gCalcFemale11:any
gCalcFemale12:any
gCalcFemaleSpecial:any
gCalcFemaleOther:any

gradeRTotal:any
gradePreGradeRTolal:any
grade1Total:any
grade2Total:any
grade3Total:any
grade4Total:any
grade5Total:any
grade6Total:any
grade7Total:any
grade8Total:any
grade9Total:any
grade10Total:any
grade11Total:any
grade12Total:any
gradeSpecialTotal:any
gradeOtherTotal:any
maleTotal:any
femaleTotal:any
totalLearners:any
  totalPreGradeMale: any;
  totalGradeRMale: any;
  totalPreGradeFemale: any;
  totalGradeRFemale: any;
  totalGradeMale1: any;
  totalGradeFemale1: any;
  totalGradeMale2: any;
  totalGradeFemale2: any;
  totalGradeMale3: number = 0;
totalGradeFemale3: number = 0;
totalGradeMale4: number = 0;
totalGradeFemale4: number = 0;
totalGradeMale5: number = 0;
totalGradeFemale5: number = 0;
totalGradeMale6: number = 0;
totalGradeFemale6: number = 0;
totalGradeMale7: number = 0;
totalGradeFemale7: number = 0;
totalGradeMale8: number = 0;
totalGradeFemale8: number = 0;
totalGradeMale9: number = 0;
totalGradeFemale9: number = 0;
totalGradeMale10: number = 0;
totalGradeFemale10: number = 0;
totalGradeMale11: number = 0;
totalGradeFemale11: number = 0;
totalGradeMale12: number = 0;
totalGradeFemale12: number = 0;
  totalGradeMaleSpecial: any;
  totalGradeFemaleSpecial: any;
  totalGradeMaleOther: any;
  totalGradeFemaleOther: any;
  totalAccident: any;
  totalillness: any;
  totalsuicide: any;
  totalviolenceAndHomicide: any;
  totalother: any;
  grandTotal: any;


constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
  private ref:MatDialogRef<LearnerMortalityComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router) {
 const schoolString = sessionStorage.getItem('schoolDetails')
 this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
    ref.disableClose = true

    const surveyString = sessionStorage.getItem('schoolSurveyDetails')
    this.surveyDetails = surveyString ? JSON.parse(surveyString) : null


}

ngOnInit(): void {

  this.learnersMortalityForm = this.formBuilder.group({
    schoolSurveyID: this.surveyDetails.id,
    accidentGradeRMale: [0,[Validators.min(0)]],
    accidentGradeRFemale: [0,[Validators.min(0)]],
    accidentPreGradeRMale: [0,[Validators.min(0)]],
    accidentPreGradeRFemale: [0,[Validators.min(0)]],
    accidentGradeMale1: [0,[Validators.min(0)]],
    accidentGradeFemale1: [0,[Validators.min(0)]],
    accidentGradeMale2: [0,[Validators.min(0)]],
    accidentGradeFemale2: [0,[Validators.min(0)]],
    accidentGradeMale3: [0,[Validators.min(0)]],
    accidentGradeFemale3: [0,[Validators.min(0)]],
    accidentGradeMale4: [0,[Validators.min(0)]],
    accidentGradeFemale4: [0,[Validators.min(0)]],
    accidentGradeMale5: [0,[Validators.min(0)]],
    accidentGradeFemale5: [0,[Validators.min(0)]],
    accidentGradeMale6: [0,[Validators.min(0)]],
    accidentGradeFemale6: [0,[Validators.min(0)]],
    accidentGradeMale7: [0,[Validators.min(0)]],
    accidentGradeFemale7: [0,[Validators.min(0)]],
    accidentGradeMale8: [0,[Validators.min(0)]],
    accidentGradeFemale8: [0,[Validators.min(0)]],
    accidentGradeMale9: [0,[Validators.min(0)]],
    accidentGradeFemale9: [0,[Validators.min(0)]],
    accidentGradeMale10: [0,[Validators.min(0)]],
    accidentGradeFemale10: [0,[Validators.min(0)]],
    accidentGradeMale11: [0,[Validators.min(0)]],
    accidentGradeFemale11: [0,[Validators.min(0)]],
    accidentGradeMale12: [0,[Validators.min(0)]],
    accidentGradeFemale12: [0,[Validators.min(0)]],
    accidentGradeMaleSpecial: [0,[Validators.min(0)]],
    accidentGradeFemaleSpecial: [0,[Validators.min(0)]],
    accidentGradeMaleOther: [0,[Validators.min(0)]],
    accidentGradeFemaleOther: [0,[Validators.min(0)]],
    illnessGradeRMale: [0,[Validators.min(0)]],
    illnessGradeRFemale: [0,[Validators.min(0)]],
    illnessPreGradeRMale: [0,[Validators.min(0)]],
    illnessPreGradeRFemale: [0,[Validators.min(0)]],
    illnessGradeMale1: [0,[Validators.min(0)]],
    illnessGradeFemale1: [0,[Validators.min(0)]],
    illnessGradeMale2: [0,[Validators.min(0)]],
    illnessGradeFemale2: [0,[Validators.min(0)]],
    illnessGradeMale3: [0,[Validators.min(0)]],
    illnessGradeFemale3: [0,[Validators.min(0)]],
    illnessGradeMale4: [0,[Validators.min(0)]],
    illnessGradeFemale4: [0,[Validators.min(0)]],
    illnessGradeMale5: [0,[Validators.min(0)]],
    illnessGradeFemale5: [0,[Validators.min(0)]],
    illnessGradeMale6: [0,[Validators.min(0)]],
    illnessGradeFemale6: [0,[Validators.min(0)]],
    illnessGradeMale7: [0,[Validators.min(0)]],
    illnessGradeFemale7: [0,[Validators.min(0)]],
    illnessGradeMale8: [0,[Validators.min(0)]],
    illnessGradeFemale8: [0,[Validators.min(0)]],
    illnessGradeMale9: [0,[Validators.min(0)]],
    illnessGradeFemale9: [0,[Validators.min(0)]],
    illnessGradeMale10: [0,[Validators.min(0)]],
    illnessGradeFemale10: [0,[Validators.min(0)]],
    illnessGradeMale11: [0,[Validators.min(0)]],
    illnessGradeFemale11: [0,[Validators.min(0)]],
    illnessGradeMale12: [0,[Validators.min(0)]],
    illnessGradeFemale12: [0,[Validators.min(0)]],
    illnessGradeMaleSpecial: [0,[Validators.min(0)]],
    illnessGradeFemaleSpecial: [0,[Validators.min(0)]],
    illnessGradeMaleOther: [0,[Validators.min(0)]],
    illnessGradeFemaleOther: [0,[Validators.min(0)]],
    suicideGradeRMale: [0,[Validators.min(0)]],
    suicideGradeRFemale: [0,[Validators.min(0)]],
    suicidePreGradeRMale: [0,[Validators.min(0)]],
    suicidePreGradeRFemale: [0,[Validators.min(0)]],
    suicideGradeMale1: [0,[Validators.min(0)]],
    suicideGradeFemale1: [0,[Validators.min(0)]],
    suicideGradeMale2: [0,[Validators.min(0)]],
    suicideGradeFemale2: [0,[Validators.min(0)]],
    suicideGradeMale3: [0,[Validators.min(0)]],
    suicideGradeFemale3: [0,[Validators.min(0)]],
    suicideGradeMale4: [0,[Validators.min(0)]],
    suicideGradeFemale4: [0,[Validators.min(0)]],
    suicideGradeMale5: [0,[Validators.min(0)]],
    suicideGradeFemale5: [0,[Validators.min(0)]],
    suicideGradeMale6: [0,[Validators.min(0)]],
    suicideGradeFemale6: [0,[Validators.min(0)]],
    suicideGradeMale7: [0,[Validators.min(0)]],
    suicideGradeFemale7: [0,[Validators.min(0)]],
    suicideGradeMale8: [0,[Validators.min(0)]],
    suicideGradeFemale8: [0,[Validators.min(0)]],
    suicideGradeMale9: [0,[Validators.min(0)]],
    suicideGradeFemale9: [0,[Validators.min(0)]],
    suicideGradeMale10: [0,[Validators.min(0)]],
    suicideGradeFemale10: [0,[Validators.min(0)]],
    suicideGradeMale11: [0,[Validators.min(0)]],
    suicideGradeFemale11: [0,[Validators.min(0)]],
    suicideGradeMale12: [0,[Validators.min(0)]],
    suicideGradeFemale12: [0,[Validators.min(0)]],
    suicideGradeMaleSpecial: [0,[Validators.min(0)]],
    suicideGradeFemaleSpecial: [0,[Validators.min(0)]],
    suicideGradeMaleOther: [0,[Validators.min(0)]],
    suicideGradeFemaleOther: [0,[Validators.min(0)]],
    vhGradeRMale: [0,[Validators.min(0)]],
    vhGradeRFemale: [0,[Validators.min(0)]],
    vhPreGradeRMale: [0,[Validators.min(0)]],
    vhPreGradeRFemale: [0,[Validators.min(0)]],
    vhGradeMale1: [0,[Validators.min(0)]],
    vhGradeFemale1: [0,[Validators.min(0)]],
    vhGradeMale2: [0,[Validators.min(0)]],
    vhGradeFemale2: [0,[Validators.min(0)]],
    vhGradeMale3: [0,[Validators.min(0)]],
    vhGradeFemale3: [0,[Validators.min(0)]],
    vhGradeMale4: [0,[Validators.min(0)]],
    vhGradeFemale4: [0,[Validators.min(0)]],
    vhGradeMale5: [0,[Validators.min(0)]],
    vhGradeFemale5: [0,[Validators.min(0)]],
    vhGradeMale6: [0,[Validators.min(0)]],
    vhGradeFemale6: [0,[Validators.min(0)]],
    vhGradeMale7: [0,[Validators.min(0)]],
    vhGradeFemale7: [0,[Validators.min(0)]],
    vhGradeMale8: [0,[Validators.min(0)]],
    vhGradeFemale8: [0,[Validators.min(0)]],
    vhGradeMale9: [0,[Validators.min(0)]],
    vhGradeFemale9: [0,[Validators.min(0)]],
    vhGradeMale10: [0,[Validators.min(0)]],
    vhGradeFemale10: [0,[Validators.min(0)]],
    vhGradeMale11: [0,[Validators.min(0)]],
    vhGradeFemale11: [0,[Validators.min(0)]],
    vhGradeMale12: [0,[Validators.min(0)]],
    vhGradeFemale12: [0,[Validators.min(0)]],
    vhGradeMaleSpecial: [0,[Validators.min(0)]],
    vhGradeFemaleSpecial: [0,[Validators.min(0)]],
    vhGradeMaleOther: [0,[Validators.min(0)]],
    vhGradeFemaleOther: [0,[Validators.min(0)]],
    totalGradeRMale: [0,[Validators.min(0)]],
    totalGradeRFemale: [0,[Validators.min(0)]],
    totalPreGradeRMale: [0,[Validators.min(0)]],
    totalPreGradeRFemale: [0,[Validators.min(0)]],
    totalGradeMale1: [0,[Validators.min(0)]],
    totalGradeFemale1: [0,[Validators.min(0)]],
    totalGradeMale2: [0,[Validators.min(0)]],
    totalGradeFemale2: [0,[Validators.min(0)]],
    totalGradeMale3: [0,[Validators.min(0)]],
    totalGradeFemale3: [0,[Validators.min(0)]],
    totalGradeMale4: [0,[Validators.min(0)]],
    totalGradeFemale4: [0,[Validators.min(0)]],
    totalGradeMale5: [0,[Validators.min(0)]],
    totalGradeFemale5: [0,[Validators.min(0)]],
    totalGradeMale6: [0,[Validators.min(0)]],
    totalGradeFemale6: [0,[Validators.min(0)]],
    totalGradeMale7: [0,[Validators.min(0)]],
    totalGradeFemale7: [0,[Validators.min(0)]],
    totalGradeMale8: [0,[Validators.min(0)]],
    totalGradeFemale8: [0,[Validators.min(0)]],
    totalGradeMale9: [0,[Validators.min(0)]],
    totalGradeFemale9: [0,[Validators.min(0)]],
    totalGradeMale10: [0,[Validators.min(0)]],
    totalGradeFemale10: [0,[Validators.min(0)]],
    totalGradeMale11: [0,[Validators.min(0)]],
    totalGradeFemale11: [0,[Validators.min(0)]],
    totalGradeMale12: [0,[Validators.min(0)]],
    totalGradeFemale12: [0,[Validators.min(0)]],
    totalGradeMaleSpecial: [0,[Validators.min(0)]],
    totalGradeFemaleSpecial: [0,[Validators.min(0)]],
    totalGradeMaleOther: [0,[Validators.min(0)]],
    totalGradeFemaleOther: [0,[Validators.min(0)]],
    otherGradeRMale: [0,[Validators.min(0)]],
    otherGradeRFemale: [0,[Validators.min(0)]],
    otherPreGradeRMale: [0,[Validators.min(0)]],
    otherPreGradeRFemale: [0,[Validators.min(0)]],
    otherGradeMale1: [0,[Validators.min(0)]],
    otherGradeFemale1: [0,[Validators.min(0)]],
    otherGradeMale2: [0,[Validators.min(0)]],
    otherGradeFemale2: [0,[Validators.min(0)]],
    otherGradeMale3: [0,[Validators.min(0)]],
    otherGradeFemale3: [0,[Validators.min(0)]],
    otherGradeMale4: [0,[Validators.min(0)]],
    otherGradeFemale4: [0,[Validators.min(0)]],
    otherGradeMale5: [0,[Validators.min(0)]],
    otherGradeFemale5: [0,[Validators.min(0)]],
    otherGradeMale6: [0,[Validators.min(0)]],
    otherGradeFemale6: [0,[Validators.min(0)]],
    otherGradeMale7: [0,[Validators.min(0)]],
    otherGradeFemale7: [0,[Validators.min(0)]],
    otherGradeMale8: [0,[Validators.min(0)]],
    otherGradeFemale8: [0,[Validators.min(0)]],
    otherGradeMale9: [0,[Validators.min(0)]],
    otherGradeFemale9: [0,[Validators.min(0)]],
    otherGradeMale10: [0,[Validators.min(0)]],
    otherGradeFemale10: [0,[Validators.min(0)]],
    otherGradeMale11: [0,[Validators.min(0)]],
    otherGradeFemale11: [0,[Validators.min(0)]],
    otherGradeMale12: [0,[Validators.min(0)]],
    otherGradeFemale12: [0,[Validators.min(0)]],
    otherGradeMaleSpecial: [0,[Validators.min(0)]],
    otherGradeFemaleSpecial: [0,[Validators.min(0)]],
    otherGradeMaleOther: [0,[Validators.min(0)]],
    otherGradeFemaleOther: [0,[Validators.min(0)]],
    totalAccident:[0,[Validators.min(0)]],
    totalviolenceAndHomicide:[0,[Validators.min(0)]],
    totalsuicide:[0,[Validators.min(0)]],
    totalillness:[0,[Validators.min(0)]],
    grandTotal:[0,[Validators.min(0)]],
    totalother:[0,[Validators.min(0)]],
    statusID: 1
    

  })
  this.gR = this.surveyDetails.gradeR
  this.preGradeR = this.surveyDetails.preGradeR
  this.g1 = this.surveyDetails.grade1
  this.g2 = this.surveyDetails.grade2
  this.g3 = this.surveyDetails.grade3
  this.g4 = this.surveyDetails.grade4
  this.g5 = this.surveyDetails.grade5
  this.g12 = this.surveyDetails.grade12
  this.g6 = this.surveyDetails.grade6
  this.g7 = this.surveyDetails.grade7
  this.g8 = this.surveyDetails.grade8
  this.g9 = this.surveyDetails.grade9
  this.g10 = this.surveyDetails.grade10
  this.g11 = this.surveyDetails.grade11
  this.gSpecial = this.surveyDetails.gradeSpecial
  this.gOther = this.surveyDetails.gradeOther
  console.log(this.g7);
  this.learnersMortalityForm.valueChanges.subscribe((formValue:any) =>{
    
    for (let i = 1; i <= 12; i++) {
      if (formValue[`accidentGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`accidentGradeMale${i}`]: 0
        });
      }

      if (formValue[`accidentGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`accidentGradeFemale${i}`]: 0
        });
      }
    
    }

    for (let i = 1; i <= 12; i++) {
      if (formValue[`totalGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`totalGradeMale${i}`]: 0
        });
      }
      
      if (formValue[`totalGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`totalGradeFemale${i}`]: 0
        });
      }
    
     
    }

    for (let i = 1; i <= 12; i++) {
      if (formValue[`otherGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`otherGradeMale${i}`]: 0
        });
      }
    
      if (formValue[`otherGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`otherGradeFemale${i}`]: 0
        });
      }
    } for (let i = 1; i <= 12; i++) {
      if (formValue[`vhGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`vhGradeFemale${i}`]: 0
        });
      }
    
      if (formValue[`vhGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`vhGradeMale${i}`]: 0
        });
      }
    } for (let i = 1; i <= 12; i++) {
      if (formValue[`illnessGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`illnessGradeMale${i}`]: 0
        });
      }
    
      if (formValue[`illnessGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`illnessGradeFemale${i}`]: 0
        });
      }
    } for (let i = 1; i <= 12; i++) {
      if (formValue[`suicideGradeMale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`suicideGradeMale${i}`]: 0
        });
      }
    
      if (formValue[`suicideGradeFemale${i}`] < 0) {
        this.learnersMortalityForm.patchValue({
          [`suicideGradeFemale${i}`]: 0
        });
      }
    }


    if (formValue.accidentGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeRMale:0
       
      });
    }
    if (formValue.accidentGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeRFemale:0
       
      });
    }
    if (formValue.accidentPreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        accidentPreGradeRMale:0
       
      });
    }
    if (formValue.accidentPreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        accidentPreGradeRFemale:0
       
      });
    } if (formValue.accidentGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeMaleSpecial:0
       
      });
    }
    if (formValue.accidentGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeFemaleSpecial:0
       
      });
    } if (formValue.accidentGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeMaleOther:0
       
      });
    }
    if (formValue.accidentGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        accidentGradeFemaleOther:0
       
      });
    } 

    if (formValue.illnessGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeRMale:0
       
      });
    }
    if (formValue.illnessGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeRFemale:0
       
      });
    }
    if (formValue.illnessPreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        illnessPreGradeRMale:0
       
      });
    }
    if (formValue.illnessPreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        illnessPreGradeRFemale:0
       
      });
    } if (formValue.illnessGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeMaleSpecial:0
       
      });
    }
    if (formValue.illnessGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeFemaleSpecial:0
       
      });
    } if (formValue.illnessGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeMaleOther:0
       
      });
    }
    if (formValue.illnessGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        illnessGradeFemaleOther:0
       
      });
    }  if (formValue.suicideGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeRMale:0
       
      });
    }
    if (formValue.suicideGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeRFemale:0
       
      });
    }
    if (formValue.suicidePreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        suicidePreGradeRMale:0
       
      });
    }
    if (formValue.suicidePreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        suicidePreGradeRFemale:0
       
      });
    } if (formValue.suicideGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeMaleSpecial:0
       
      });
    }
    if (formValue.suicideGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeFemaleSpecial:0
       
      });
    } if (formValue.suicideGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeMaleOther:0
       
      });
    }
    if (formValue.suicideGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        suicideGradeFemaleOther:0
       
      });
    }  if (formValue.vhGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeRMale:0
       
      });
    }
    if (formValue.vhGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeRFemale:0
       
      });
    }
    if (formValue.vhPreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        vhPreGradeRMale:0
       
      });
    }
    if (formValue.vhPreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        vhPreGradeRFemale:0
       
      });
    } if (formValue.vhGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeMaleSpecial:0
       
      });
    }
    if (formValue.vhGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeFemaleSpecial:0
       
      });
    } if (formValue.vhGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeMaleOther:0
       
      });
    }
    if (formValue.vhGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        vhGradeFemaleOther:0
       
      });
    }  if (formValue.totalGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeRMale:0
       
      });
    }
    if (formValue.totalGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeRFemale:0
       
      });
    }
    if (formValue.totalPreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        totalPreGradeRMale:0
       
      });
    }
    if (formValue.totalPreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        totalPreGradeRFemale:0
       
      });
    } if (formValue.totalGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeMaleSpecial:0
       
      });
    }
    if (formValue.totalGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeFemaleSpecial:0
       
      });
    } if (formValue.totalGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeMaleOther:0
       
      });
    }
    if (formValue.totalGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        totalGradeFemaleOther:0
       
      });
    }  if (formValue.otherGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeRMale:0
       
      });
    }
    if (formValue.otherGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeRFemale:0
       
      });
    }
    if (formValue.otherPreGradeRMale < 0) {
      this.learnersMortalityForm.patchValue({
        otherPreGradeRMale:0
       
      });
    }
    if (formValue.otherPreGradeRFemale < 0) {
      this.learnersMortalityForm.patchValue({
        otherPreGradeRFemale:0
       
      });
    } if (formValue.otherGradeMaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeMaleSpecial:0
       
      });
    }
    if (formValue.otherGradeFemaleSpecial < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeFemaleSpecial:0
       
      });
    } if (formValue.otherGradeMaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeMaleOther:0
       
      });
    }
    if (formValue.otherGradeFemaleOther < 0) {
      this.learnersMortalityForm.patchValue({
        otherGradeFemaleOther:0
       
      });
    } 

    this.totalAccident =
    formValue.accidentPreGradeRMale + formValue.accidentPreGradeRFemale +
    formValue.accidentGradeRMale + formValue.accidentGradeRFemale +
    formValue.accidentGradeMale1 + formValue.accidentGradeFemale1 +
    formValue.accidentGradeMale2 + formValue.accidentGradeFemale2 +
    formValue.accidentGradeMale3 + formValue.accidentGradeFemale3 +
    formValue.accidentGradeMale4 + formValue.accidentGradeFemale4 +
    formValue.accidentGradeMale5 + formValue.accidentGradeFemale5 +
    formValue.accidentGradeMale6 + formValue.accidentGradeFemale6 +
    formValue.accidentGradeMale7 + formValue.accidentGradeFemale7 +
    formValue.accidentGradeMale8 + formValue.accidentGradeFemale8 +
    formValue.accidentGradeMale9 + formValue.accidentGradeFemale9 +
    formValue.accidentGradeMale10 + formValue.accidentGradeFemale10 +
    formValue.accidentGradeMale11 + formValue.accidentGradeFemale11 +
    formValue.accidentGradeMale12 + formValue.accidentGradeFemale12 +
    formValue.accidentGradeMaleSpecial + formValue.accidentGradeFemaleSpecial +
    formValue.accidentGradeMaleOther + formValue.accidentGradeFemaleOther;


    this.totalillness =
    formValue.illnessPreGradeRMale + formValue.illnessPreGradeRFemale +
    formValue.illnessGradeRMale + formValue.illnessGradeRFemale +
    formValue.illnessGradeMale1 + formValue.illnessGradeFemale1 +
    formValue.illnessGradeMale2 + formValue.illnessGradeFemale2 +
    formValue.illnessGradeMale3 + formValue.illnessGradeFemale3 +
    formValue.illnessGradeMale4 + formValue.illnessGradeFemale4 +
    formValue.illnessGradeMale5 + formValue.illnessGradeFemale5 +
    formValue.illnessGradeMale6 + formValue.illnessGradeFemale6 +
    formValue.illnessGradeMale7 + formValue.illnessGradeFemale7 +
    formValue.illnessGradeMale8 + formValue.illnessGradeFemale8 +
    formValue.illnessGradeMale9 + formValue.illnessGradeFemale9 +
    formValue.illnessGradeMale10 + formValue.illnessGradeFemale10 +
    formValue.illnessGradeMale11 + formValue.illnessGradeFemale11 +
    formValue.illnessGradeMale12 + formValue.illnessGradeFemale12 +
    formValue.illnessGradeMaleSpecial + formValue.illnessGradeFemaleSpecial +
    formValue.illnessGradeMaleOther + formValue.illnessGradeFemaleOther;

    this.totalsuicide =

    formValue.suicidePreGradeRMale + formValue.suicidePreGradeRFemale +
    formValue.suicideGradeRMale + formValue.suicideGradeRFemale +
    formValue.suicideGradeMale1 + formValue.suicideGradeFemale1 +
    formValue.suicideGradeMale2 + formValue.suicideGradeFemale2 +
    formValue.suicideGradeMale3 + formValue.suicideGradeFemale3 +
    formValue.suicideGradeMale4 + formValue.suicideGradeFemale4 +
    formValue.suicideGradeMale5 + formValue.suicideGradeFemale5 +
    formValue.suicideGradeMale6 + formValue.suicideGradeFemale6 +
    formValue.suicideGradeMale7 + formValue.suicideGradeFemale7 +
    formValue.suicideGradeMale8 + formValue.suicideGradeFemale8 +
    formValue.suicideGradeMale9 + formValue.suicideGradeFemale9 +
    formValue.suicideGradeMale10 + formValue.suicideGradeFemale10 +
    formValue.suicideGradeMale11 + formValue.suicideGradeFemale11 +
    formValue.suicideGradeMale12 + formValue.suicideGradeFemale12 +
    formValue.suicideGradeMaleSpecial + formValue.suicideGradeFemaleSpecial +
    formValue.suicideGradeMaleOther + formValue.suicideGradeFemaleOther;

    this.totalviolenceAndHomicide =
    formValue.vhPreGradeRMale + formValue.vhPreGradeRFemale +
    formValue.vhGradeRMale + formValue.vhGradeRFemale +
    formValue.vhGradeMale1 + formValue.vhGradeFemale1 +
    formValue.vhGradeMale2 + formValue.vhGradeFemale2 +
    formValue.vhGradeMale3 + formValue.vhGradeFemale3 +
    formValue.vhGradeMale4 + formValue.vhGradeFemale4 +
    formValue.vhGradeMale5 + formValue.vhGradeFemale5 +
    formValue.vhGradeMale6 + formValue.vhGradeFemale6 +
    formValue.vhGradeMale7 + formValue.vhGradeFemale7 +
    formValue.vhGradeMale8 + formValue.vhGradeFemale8 +
    formValue.vhGradeMale9 + formValue.vhGradeFemale9 +
    formValue.vhGradeMale10 + formValue.vhGradeFemale10 +
    formValue.vhGradeMale11 + formValue.vhGradeFemale11 +
    formValue.vhGradeMale12 + formValue.vhGradeFemale12 +
    formValue.vhGradeMaleSpecial + formValue.vhGradeFemaleSpecial +
    formValue.vhGradeMaleOther + formValue.vhGradeFemaleOther;


    this.totalother =
    formValue.otherPreGradeRMale + formValue.otherPreGradeRFemale +
    formValue.otherGradeRMale + formValue.otherGradeRFemale +
    formValue.otherGradeMale1 + formValue.otherGradeFemale1 +
    formValue.otherGradeMale2 + formValue.otherGradeFemale2 +
    formValue.otherGradeMale3 + formValue.otherGradeFemale3 +
    formValue.otherGradeMale4 + formValue.otherGradeFemale4 +
    formValue.otherGradeMale5 + formValue.otherGradeFemale5 +
    formValue.otherGradeMale6 + formValue.otherGradeFemale6 +
    formValue.otherGradeMale7 + formValue.otherGradeFemale7 +
    formValue.otherGradeMale8 + formValue.otherGradeFemale8 +
    formValue.otherGradeMale9 + formValue.otherGradeFemale9 +
    formValue.otherGradeMale10 + formValue.otherGradeFemale10 +
    formValue.otherGradeMale11 + formValue.otherGradeFemale11 +
    formValue.otherGradeMale12 + formValue.otherGradeFemale12 +
    formValue.otherGradeMaleSpecial + formValue.otherGradeFemaleSpecial +
    formValue.otherGradeMaleOther + formValue.otherGradeFemaleOther;

    this.grandTotal =
    formValue.totalPreGradeRMale + formValue.totalPreGradeRFemale +
    formValue.totalGradeRMale + formValue.totalGradeRFemale +
    formValue.totalGradeMale1 + formValue.totalGradeFemale1 +
    formValue.totalGradeMale2 + formValue.totalGradeFemale2 +
    formValue.totalGradeMale3 + formValue.totalGradeFemale3 +
    formValue.totalGradeMale4 + formValue.totalGradeFemale4 +
    formValue.totalGradeMale5 + formValue.totalGradeFemale5 +
    formValue.totalGradeMale6 + formValue.totalGradeFemale6 +
    formValue.totalGradeMale7 + formValue.totalGradeFemale7 +
    formValue.totalGradeMale8 + formValue.totalGradeFemale8 +
    formValue.totalGradeMale9 + formValue.totalGradeFemale9 +
    formValue.totalGradeMale10 + formValue.totalGradeFemale10 +
    formValue.totalGradeMale11 + formValue.totalGradeFemale11 +
    formValue.totalGradeMale12 + formValue.totalGradeFemale12 +
    formValue.totalGradeMaleSpecial + formValue.totalGradeFemaleSpecial +
    formValue.totalGradeMaleOther + formValue.totalGradeFemaleOther;
    this.totalPreGradeMale = formValue.accidentPreGradeRMale + formValue.illnessPreGradeRMale + formValue.suicidePreGradeRMale
                              + formValue.vhPreGradeRMale + formValue.otherPreGradeRMale
    this.totalPreGradeFemale = formValue.accidentPreGradeRFemale + formValue.illnessPreGradeRFemale + formValue.suicidePreGradeRFemale
                              + formValue.vhPreGradeRFemale + formValue.otherPreGradeRFemale

                              this.totalGradeRMale =
                              formValue.accidentGradeRMale +
                              formValue.illnessGradeRMale +
                              formValue.suicideGradeRMale +
                              formValue.vhGradeRMale +
                              formValue.otherGradeRMale 

                              this.totalGradeRFemale=
                              formValue.accidentGradeRFemale +
                              formValue.illnessGradeRFemale +
                              formValue.suicideGradeRFemale +
                              formValue.vhGradeRFemale +
                              formValue.otherGradeRFemale 


                               this.totalGradeMale1 =
        formValue.accidentGradeMale1 +
        formValue.illnessGradeMale1 +
        formValue.suicideGradeMale1 +
        formValue.vhGradeMale1 +
        formValue.otherGradeMale1 

        this.totalGradeFemale1 =
        formValue.accidentGradeFemale1 +
        formValue.illnessGradeFemale1 +
        formValue.suicideGradeFemale1 +
        formValue.vhGradeFemale1 +
        formValue.otherGradeFemale1 

        this.totalGradeMale2 =
        formValue.accidentGradeMale2 +
        formValue.illnessGradeMale2 +
        formValue.suicideGradeMale2 +
        formValue.vhGradeMale2 +
        formValue.otherGradeMale2;
  
      this.totalGradeFemale2 =
        formValue.accidentGradeFemale2 +
        formValue.illnessGradeFemale2 +
        formValue.suicideGradeFemale2 +
        formValue.vhGradeFemale2 +
        formValue.otherGradeFemale2;

        this.totalGradeMale3 =
      formValue.accidentGradeMale3 +
      formValue.illnessGradeMale3 +
      formValue.suicideGradeMale3 +
      formValue.vhGradeMale3 +
      formValue.otherGradeMale3;

    this.totalGradeFemale3 =
      formValue.accidentGradeFemale3 +
      formValue.illnessGradeFemale3 +
      formValue.suicideGradeFemale3 +
      formValue.vhGradeFemale3 +
      formValue.otherGradeFemale3;


      this.totalGradeMale4 =
  formValue.accidentGradeMale4 +
  formValue.illnessGradeMale4 +
  formValue.suicideGradeMale4 +
  formValue.vhGradeMale4 +
  formValue.otherGradeMale4;

this.totalGradeFemale4 =
  formValue.accidentGradeFemale4 +
  formValue.illnessGradeFemale4 +
  formValue.suicideGradeFemale4 +
  formValue.vhGradeFemale4 +
  formValue.otherGradeFemale4;

this.totalGradeMale5 =
  formValue.accidentGradeMale5 +
  formValue.illnessGradeMale5 +
  formValue.suicideGradeMale5 +
  formValue.vhGradeMale5 +
  formValue.otherGradeMale5

this.totalGradeFemale5 =
  formValue.accidentGradeFemale5 +
  formValue.illnessGradeFemale5 +
  formValue.suicideGradeFemale5 +
  formValue.vhGradeFemale5 +
  formValue.otherGradeFemale5

this.totalGradeMale6 =
  formValue.accidentGradeMale6 +
  formValue.illnessGradeMale6 +
  formValue.suicideGradeMale6 +
  formValue.vhGradeMale6 +
  formValue.otherGradeMale6;

this.totalGradeFemale6 =
  formValue.accidentGradeFemale6 +
  formValue.illnessGradeFemale6 +
  formValue.suicideGradeFemale6 +
  formValue.vhGradeFemale6 +
  formValue.otherGradeFemale6;

this.totalGradeMale7 =
  formValue.accidentGradeMale7 +
  formValue.illnessGradeMale7 +
  formValue.suicideGradeMale7 +
  formValue.vhGradeMale7 +
  formValue.otherGradeMale7;

this.totalGradeFemale7 =
  formValue.accidentGradeFemale7 +
  formValue.illnessGradeFemale7 +
  formValue.suicideGradeFemale7 +
  formValue.vhGradeFemale7 +
  formValue.otherGradeFemale7;

  this.totalGradeMale8 =
  formValue.accidentGradeMale8 +
  formValue.illnessGradeMale8 +
  formValue.suicideGradeMale8 +
  formValue.vhGradeMale8 +
  formValue.otherGradeMale8;

this.totalGradeFemale8 =
  formValue.accidentGradeFemale8 +
  formValue.illnessGradeFemale8 +
  formValue.suicideGradeFemale8 +
  formValue.vhGradeFemale8 +
  formValue.otherGradeFemale8;

this.totalGradeMale9 =
  formValue.accidentGradeMale9 +
  formValue.illnessGradeMale9 +
  formValue.suicideGradeMale9 +
  formValue.vhGradeMale9 +
  formValue.otherGradeMale9;

this.totalGradeFemale9 =
  formValue.accidentGradeFemale9 +
  formValue.illnessGradeFemale9 +
  formValue.suicideGradeFemale9 +
  formValue.vhGradeFemale9 +
  formValue.otherGradeFemale9;

  this.totalGradeMale10 =
  formValue.accidentGradeMale10 +
  formValue.illnessGradeMale10 +
  formValue.suicideGradeMale10 +
  formValue.vhGradeMale10 +
  formValue.otherGradeMale10;

this.totalGradeFemale10 =
  formValue.accidentGradeFemale10 +
  formValue.illnessGradeFemale10 +
  formValue.suicideGradeFemale10 +
  formValue.vhGradeFemale10 +
  formValue.otherGradeFemale10;

this.totalGradeMale11 =
  formValue.accidentGradeMale11 +
  formValue.illnessGradeMale11 +
  formValue.suicideGradeMale11 +
  formValue.vhGradeMale11 +
  formValue.otherGradeMale11;

this.totalGradeFemale11 =
  formValue.accidentGradeFemale11 +
  formValue.illnessGradeFemale11 +
  formValue.suicideGradeFemale11 +
  formValue.vhGradeFemale11 +
  formValue.otherGradeFemale11;

this.totalGradeMale12 =
  formValue.accidentGradeMale12 +
  formValue.illnessGradeMale12 +
  formValue.suicideGradeMale12 +
  formValue.vhGradeMale12 +
  formValue.otherGradeMale12;

this.totalGradeFemale12 =
  formValue.accidentGradeFemale12 +
  formValue.illnessGradeFemale12 +
  formValue.suicideGradeFemale12 +
  formValue.vhGradeFemale12 +
  formValue.otherGradeFemale12;

  this.totalGradeMaleSpecial =
  formValue.accidentGradeMaleSpecial +
  formValue.illnessGradeMaleSpecial +
  formValue.suicideGradeMaleSpecial +
  formValue.vhGradeMaleSpecial +
  formValue.otherGradeMaleSpecial;

this.totalGradeFemaleSpecial =
  formValue.accidentGradeFemaleSpecial +
  formValue.illnessGradeFemaleSpecial +
  formValue.suicideGradeFemaleSpecial +
  formValue.vhGradeFemaleSpecial +
  formValue.otherGradeFemaleSpecial;

this.totalGradeMaleOther =
  formValue.accidentGradeMaleOther +
  formValue.illnessGradeMaleOther +
  formValue.suicideGradeMaleOther +
  formValue.vhGradeMaleOther +
  formValue.otherGradeMaleOther;

this.totalGradeFemaleOther =
  formValue.accidentGradeFemaleOther +
  formValue.illnessGradeFemaleOther +
  formValue.suicideGradeFemaleOther +
  formValue.vhGradeFemaleOther +
  formValue.otherGradeFemaleOther;

  })
}

closeDialog(){
  this.ref.close()
  
}

onSubmit(){
  if (this.learnersMortalityForm.valid) {
  
    this.head.saveLearnerMortality(this.learnersMortalityForm.value).subscribe({
      next:(res) => {
        console.log(res);

        sessionStorage.setItem('learnersMortality',JSON.stringify(res))
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
  
  }
  else{
    this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:15000, position: 'topCenter'})

  }
}

}
