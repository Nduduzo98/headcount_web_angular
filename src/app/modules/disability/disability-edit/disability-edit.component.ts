
import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-disability-edit',
  templateUrl: './disability-edit.component.html',
  styleUrls: ['./disability-edit.component.scss']
})
export class DisabilityEditComponent {
  schoolDetails: any
  surveyDetails:any

  disabilityForm:any
  gradeTotalAutistic:any
  gradeTotalBlind:any
  gradeTotalCerebral:any
  gradeTotalDeaf:any
  gradeTotalEpileptic:any
  gradeTotalHardofHearing:any
  gradeTotalModerateMentallyHandicapped:any
  gradeTotalPartiallySighted:any
  gradeTotalPhysicallDisabled:any
  gradeTotalSevereBehavioralDisorder:any
  gradeTotalSpecificLearningDisabled:any
  gradeTotalSeverelyMentallHandicapped:any
  gradeTotalOther:any

  malesTotal: any
      femalesTotal: any
      total:any
  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<DisabilityEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }

  ngOnInit(): void {
    this.disabilityForm = this.formBuilder.group({
      id:[],
      schoolSurveyID: [],
      gradeMaleAutistic: [null,[Validators.min(0)]],
      gradeFemaleAutistic: [null,[Validators.min(0)]],
      gradeTotalAutistic: [null,[Validators.min(0)]],
      gradeMaleBlind: [null,[Validators.min(0)]],
      gradeFemaleBlind: [null,[Validators.min(0)]],
      gradeTotalBlind: [null,[Validators.min(0)]],
      gradeMaleCerebral: [null,[Validators.min(0)]],
      gradeFemaleCerebral: [null,[Validators.min(0)]],
      gradeTotalCerebral: [null,[Validators.min(0)]],
      gradeMaleDeaf: [null,[Validators.min(0)]],
      gradeFemaleDeaf: [null,[Validators.min(0)]],
      gradeTotalDeaf: [null,[Validators.min(0)]],
      gradeMaleEpileptic: [null,[Validators.min(0)]],
      gradeFemaleEpileptic: [null,[Validators.min(0)]],
      gradeTotalEpileptic: [null,[Validators.min(0)]],
      gradeMaleHardofHearing: [null,[Validators.min(0)]],
      gradeFemaleHardofHearing: [null,[Validators.min(0)]],
      gradeTotalHardofHearing: [null,[Validators.min(0)]],
      gradeMaleModerateMentallyHandicapped: [null,[Validators.min(0)]],
      gradeFemaleModerateMentallyHandicapped: [null,[Validators.min(0)]],
      gradeTotalModerateMentallyHandicapped: [null,[Validators.min(0)]],
      gradeMalePartiallySighted: [null,[Validators.min(0)]],
      gradeFemalePartiallySighted: [null,[Validators.min(0)]],
      gradeTotalPartiallySighted: [null,[Validators.min(0)]],
      gradeMalePhysicallDisabled: [null,[Validators.min(0)]],
      gradeFemalePhysicallDisabled: [null,[Validators.min(0)]],
      gradeTotalPhysicallDisabled: [null,[Validators.min(0)]],
      gradeMaleSevereBehavioralDisorder: [null,[Validators.min(0)]],
      gradeFemaleSevereBehavioralDisorder: [null,[Validators.min(0)]],
      gradeTotalSevereBehavioralDisorder: [null,[Validators.min(0)]],
      gradeMaleSeverelyMentallHandicapped: [null,[Validators.min(0)]],
      gradeFemaleSeverelyMentallHandicapped: [null,[Validators.min(0)]],
      gradeTotalSeverelyMentallHandicapped: [null,[Validators.min(0)]],
      gradeMaleSpecificLearningDisabled: [null,[Validators.min(0)]],
      gradeFemaleSpecificLearningDisabled: [null,[Validators.min(0)]],
      gradeTotalSpecificLearningDisabled: [null,[Validators.min(0)]],
      gradeMaleOther: [null,[Validators.min(0)]],
      gradeFemaleOther: [null,[Validators.min(0)]],
      gradeTotalOther: [null,[Validators.min(0)]],
      malesTotal: [null,[Validators.min(0)]],
      femalesTotal: [null,[Validators.min(0)]],
      total:[null,[Validators.min(0)]],
      statusID: [1]
    })

    this.disabilityForm.patchValue(this.data)
    this.disabilityForm.valueChanges.subscribe((formValue:any)=>{
      if (formValue.gradeMaleAutistic < 0) {
        this.disabilityForm.patchValue({
          gradeMaleAutistic:0
         
        });
      }
      if (formValue.gradeFemaleAutistic < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleAutistic:0
         
        });
      }
      if (formValue.gradeMaleBlind < 0) {
        this.disabilityForm.patchValue({
          gradeMaleBlind:0
         
        });
      } if (formValue.gradeFemaleBlind < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleBlind:0
         
        });
      }
      if (formValue.gradeMaleCerebral < 0) {
        this.disabilityForm.patchValue({
          gradeMaleCerebral:0
         
        });
      } if (formValue.gradeFemaleCerebral < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleCerebral:0
         
        });
      }
      if (formValue.gradeMaleDeaf < 0) {
        this.disabilityForm.patchValue({
          gradeMaleDeaf:0
         
        });
      } if (formValue.gradeFemaleDeaf < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleDeaf:0
         
        });
      }
      if (formValue.gradeMaleEpileptic < 0) {
        this.disabilityForm.patchValue({
          gradeMaleEpileptic:0
         
        });
      } if (formValue.gradeFemaleEpileptic < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleEpileptic:0
         
        });
      }
      if (formValue.gradeMaleHardofHearing < 0) {
        this.disabilityForm.patchValue({
          gradeMaleHardofHearing:0
         
        });
      } if (formValue.gradeFemaleHardofHearing < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleHardofHearing:0
         
        });
      }
      if (formValue.gradeMaleModerateMentallyHandicapped < 0) {
        this.disabilityForm.patchValue({
          gradeMaleModerateMentallyHandicappedgradeMaleModerateMentallyHandicapped:0
         
        });
      } if (formValue.gradeFemaleModerateMentallyHandicapped < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleModerateMentallyHandicapped:0
         
        });
      }
      if (formValue.gradeMalePartiallySighted < 0) {
        this.disabilityForm.patchValue({
          gradeMalePartiallySighted:0
         
        });
      } if (formValue.gradeFemalePartiallySighted < 0) {
        this.disabilityForm.patchValue({
          gradeFemalePartiallySighted:0
         
        });
      }
      if (formValue.gradeMalePhysicallDisabled < 0) {
        this.disabilityForm.patchValue({
          gradeMalePhysicallDisabled:0
         
        });
      } if (formValue.gradeFemalePhysicallDisabled < 0) {
        this.disabilityForm.patchValue({
          gradeFemalePhysicallDisabled:0
         
        });
      }
      if (formValue.gradeMaleSevereBehavioralDisorder < 0) {
        this.disabilityForm.patchValue({
          gradeMaleSevereBehavioralDisorder:0
         
        });
      } if (formValue.gradeFemaleSevereBehavioralDisorder < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleSevereBehavioralDisorder:0
         
        });
      }
      if (formValue.gradeMaleSpecificLearningDisabled < 0) {
        this.disabilityForm.patchValue({
          gradeMaleSpecificLearningDisabled:0
         
        });
      }

      if (formValue.gradeFemaleSpecificLearningDisabled < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleSpecificLearningDisabled:0
         
        });
      }

      if (formValue.gradeMaleSeverelyMentallHandicapped < 0) {
        this.disabilityForm.patchValue({
          gradeMaleSeverelyMentallHandicapped:0
         
        });
      } if (formValue.gradeFemaleSeverelyMentallHandicapped < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleSeverelyMentallHandicapped:0
         
        });
      }
     
      if (formValue.gradeMaleOther < 0) {
        this.disabilityForm.patchValue({
          gradeMaleOther:0
         
        });
      }
      if (formValue.gradeFemaleOther < 0) {
        this.disabilityForm.patchValue({
          gradeFemaleOther:0
         
        });
      }

      this.gradeTotalAutistic = formValue.gradeMaleAutistic + formValue.gradeFemaleAutistic
      this.gradeTotalBlind= formValue.gradeMaleBlind + formValue.gradeFemaleBlind
      this.gradeTotalCerebral = formValue.gradeMaleCerebral + formValue.gradeFemaleCerebral
      this.gradeTotalDeaf = formValue.gradeMaleDeaf + formValue.gradeFemaleDeaf
      this.gradeTotalEpileptic = formValue.gradeMaleEpileptic + formValue.gradeFemaleEpileptic
      this.gradeTotalHardofHearing = formValue.gradeMaleHardofHearing + formValue.gradeFemaleHardofHearing
      this.gradeTotalModerateMentallyHandicapped = formValue.gradeMaleModerateMentallyHandicapped + formValue.gradeFemaleModerateMentallyHandicapped
      this.gradeTotalPartiallySighted = formValue.gradeMalePartiallySighted + formValue.gradeFemalePartiallySighted
      this.gradeTotalPhysicallDisabled = formValue.gradeMalePhysicallDisabled + formValue.gradeFemalePhysicallDisabled
      this.gradeTotalSevereBehavioralDisorder = formValue.gradeMaleSevereBehavioralDisorder + formValue.gradeFemaleSevereBehavioralDisorder
      this.gradeTotalSeverelyMentallHandicapped = formValue.gradeMaleSeverelyMentallHandicapped + formValue.gradeFemaleSeverelyMentallHandicapped
      this.gradeTotalSpecificLearningDisabled = formValue.gradeMaleSpecificLearningDisabled + formValue.gradeFemaleSpecificLearningDisabled
      this.gradeTotalOther = formValue.gradeMaleOther + formValue.gradeFemaleOther






      this.malesTotal = formValue.gradeMaleAutistic + 
      formValue.gradeMaleBlind +
       formValue.gradeMaleCerebral + 
        formValue.gradeMaleDeaf + 
         formValue.gradeMaleEpileptic + 
         formValue.gradeMaleHardofHearing + 
          formValue.gradeMaleModerateMentallyHandicapped +
          formValue.gradeMalePartiallySighted + 
           formValue.gradeMalePhysicallDisabled +
            formValue.gradeMaleSevereBehavioralDisorder + 
             formValue.gradeMaleSeverelyMentallHandicapped +
             formValue.gradeMaleSpecificLearningDisabled +
             formValue.gradeMaleOther

             this.femalesTotal = formValue.gradeFemaleAutistic
             + formValue.gradeFemaleBlind
              + formValue.gradeFemaleCerebral
             + formValue.gradeFemaleDeaf
              + formValue.gradeFemaleEpileptic
          + formValue.gradeFemaleHardofHearing
            + formValue.gradeFemaleModerateMentallyHandicapped
              + formValue.gradeFemalePartiallySighted
              + formValue.gradeFemalePhysicallDisabled
              + formValue.gradeFemaleSevereBehavioralDisorder
             + formValue.gradeFemaleSeverelyMentallHandicapped
             + formValue.gradeFemaleSpecificLearningDisabled
            + formValue.gradeFemaleOther 



      this.total = formValue.malesTotal + formValue.femalesTotal
    

    })
  }



  closeDialog(){
    this.ref.close()
    
  }

  onSubmit(){
    if (this.disabilityForm.valid) {
      console.log(this.disabilityForm.value);

      this.head.updateDisability(this.disabilityForm.value).subscribe({
        next:(res) => {
          console.log(res);
        window.location.reload()

          sessionStorage.setItem('disability',JSON.stringify(res))
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
          this.ref.close()
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
