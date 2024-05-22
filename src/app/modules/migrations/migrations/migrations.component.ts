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
  selector: 'app-migrations',
  templateUrl: './migrations.component.html',
  styleUrls: ['./migrations.component.scss']
})
export class MigrationsComponent implements OnInit {
  schoolDetails: any;
  surveyDetails:any;
  migrationForm:any
  gradeTotalEasternCape:any
  gradeTotalSeFreeState:any

  gradeTotalKwaZuluNatal:any
  gradeTotalLimpopo:any
  gradeTotalMpumalanga:any
  gradeTotalNorthernCape:any
  gradeTotalNorthWest:any
  gradeTotalWesterCape:any
  gradeTotalForeignCountries:any
  malesTotal:any
  femalesTotal:any
  gradeTotalTotal:any


  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<MigrationsComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }
  ngOnInit(): void {
    this.migrationForm = this.formBuilder.group({
     
      schoolSurveyID: [this.surveyDetails.id],
      miigrationStatus: [''],
      gradeMaleEasternCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleEasternCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalEasternCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleFreeState: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleFreeState: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalSeFreeState: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleKwaZuluNatal: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleKwaZuluNatal: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalKwaZuluNatal: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleLimpopo: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleLimpopo: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalLimpopo: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleMpumalanga: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleMpumalanga: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalMpumalanga: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleNorthernCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleNorthernCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalNorthernCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleNorthWest: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleNorthWest: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalNorthWest: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleWesterCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleWesterCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalWesterCape: [0,[Validators.min(0), patchValueIfNegative]],
      gradeMaleForeignCountries: [0,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleForeignCountries: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalForeignCountries: [0,[Validators.min(0), patchValueIfNegative]],
      malesTotal: [0,[Validators.min(0), patchValueIfNegative]],
      femalesTotal: [0,[Validators.min(0), patchValueIfNegative]],
      gradeTotalTotal: [0,[Validators.min(0), patchValueIfNegative]],
      statusID: [1]
    })

    this.migrationForm.valueChanges.subscribe((formValue:any) =>{


      if (formValue.gradeMaleEasternCape < 0) {
        this.migrationForm.patchValue({
          gradeMaleEasternCape:0
         
        });
      }
      if (formValue.gradeFemaleEasternCape < 0) {
        this.migrationForm.patchValue({
          gradeFemaleEasternCape:0
         
        });
      }
      if (formValue.gradeMaleFreeState < 0) {
        this.migrationForm.patchValue({
          gradeMaleFreeState:0
         
        });
      }
      if (formValue.gradeFemaleFreeState < 0) {
        this.migrationForm.patchValue({
          gradeFemaleFreeState:0
         
        });
      } if (formValue.gradeMale1 < 0) {
        this.migrationForm.patchValue({
          gradeMale1:0
         
        });
      }
      if (formValue.gradeMaleKwaZuluNatal < 0) {
        this.migrationForm.patchValue({
          gradeMaleKwaZuluNatal:0
         
        });
      } if (formValue.gradeFemaleKwaZuluNatal < 0) {
        this.migrationForm.patchValue({
          gradeFemaleKwaZuluNatal:0
         
        });
      }
      if (formValue.gradeMaleLimpopo < 0) {
        this.migrationForm.patchValue({
          gradeMaleLimpopo:0
         
        });
      } if (formValue.gradeFemaleLimpopo < 0) {
        this.migrationForm.patchValue({
          gradeFemaleLimpopo:0
         
        });
      }
      if (formValue.gradeMaleMpumalanga < 0) {
        this.migrationForm.patchValue({
          gradeMaleMpumalanga:0
         
        });
      } if (formValue.gradeFemaleMpumalanga < 0) {
        this.migrationForm.patchValue({
          gradeFemaleMpumalanga:0
         
        });
      }
      if (formValue.gradeMaleNorthernCape < 0) {
        this.migrationForm.patchValue({
          gradeMaleNorthernCape:0
         
        });
      } if (formValue.gradeFemaleNorthernCape < 0) {
        this.migrationForm.patchValue({
          gradeFemaleNorthernCape:0
         
        });
      }
      if (formValue.gradeMaleNorthWest < 0) {
        this.migrationForm.patchValue({
          gradeMaleNorthWest:0
         
        });
      } if (formValue.gradeFemaleNorthWest < 0) {
        this.migrationForm.patchValue({
          gradeFemaleNorthWest:0
         
        });
      }
      if (formValue.gradeMaleWesterCape < 0) {
        this.migrationForm.patchValue({
          gradeMaleWesterCape:0
         
        });
      } if (formValue.gradeFemaleWesterCape < 0) {
        this.migrationForm.patchValue({
          gradeFemaleWesterCape:0
         
        });
      }
      if (formValue.gradeMaleForeignCountries < 0) {
        this.migrationForm.patchValue({
          gradeMaleForeignCountries:0
         
        });
      } if (formValue.gradeFemaleForeignCountries < 0) {
        this.migrationForm.patchValue({
          gradeFemaleForeignCountries:0
         
        });
      }
    

      this.gradeTotalEasternCape = formValue.gradeMaleEasternCape + formValue.gradeFemaleEasternCape
      this.gradeTotalSeFreeState = formValue.gradeMaleFreeState + formValue.gradeFemaleFreeState 
      this.gradeTotalKwaZuluNatal = formValue.gradeMaleKwaZuluNatal + formValue.gradeFemaleKwaZuluNatal
      this.gradeTotalLimpopo = formValue.gradeMaleLimpopo + formValue.gradeFemaleLimpopo
      this.gradeTotalMpumalanga = formValue.gradeMaleMpumalanga + formValue.gradeFemaleMpumalanga
      this.gradeTotalNorthWest = formValue.gradeMaleNorthWest + formValue.gradeFemaleNorthWest
      this.gradeTotalNorthernCape = formValue.gradeMaleNorthernCape + formValue.gradeFemaleNorthernCape
      this.gradeTotalWesterCape = formValue.gradeMaleWesterCape + formValue.gradeFemaleWesterCape
      this.gradeTotalForeignCountries = formValue.gradeMaleForeignCountries + formValue.gradeFemaleForeignCountries


      this.malesTotal =
      formValue.gradeMaleEasternCape + 
      formValue.gradeMaleFreeState +  
      formValue.gradeMaleKwaZuluNatal +
      formValue.gradeMaleLimpopo +
      formValue.gradeMaleMpumalanga + 
      formValue.gradeMaleNorthWest +
      formValue.gradeMaleNorthernCape + 
      formValue.gradeMaleWesterCape + 
      formValue.gradeMaleForeignCountries 

      this.femalesTotal = 
       formValue.gradeFemaleEasternCape
       + formValue.gradeFemaleFreeState 
       + formValue.gradeFemaleKwaZuluNatal
       + formValue.gradeFemaleLimpopo
       + formValue.gradeFemaleMpumalanga
       + formValue.gradeFemaleNorthWest
       + formValue.gradeFemaleNorthernCape
       + formValue.gradeFemaleWesterCape
       + formValue.gradeFemaleForeignCountries
       if (this.data.malesTotal <  this.malesTotal ) {
        this.migrationForm.setErrors({ 'invalidMalesTotal': true });
      }
      if (this.data.femalesTotal < this.femalesTotal ) {
        this.migrationForm.setErrors({ 'invalidFemaleTotal': true });

      }
       this.gradeTotalTotal = 
       this.gradeTotalForeignCountries + 
       this.gradeTotalEasternCape +
       this.gradeTotalKwaZuluNatal +
       this.gradeTotalLimpopo +
       this.gradeTotalMpumalanga +
       this.gradeTotalNorthWest +
       this.gradeTotalNorthernCape +
       this.gradeTotalSeFreeState +
       this.gradeTotalWesterCape
      console.log(this.gradeTotalTotal);
      
    })

   
  }

  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.migrationForm.valid) {
      console.log(this.migrationForm.value);

      this.head.saveMigration(this.migrationForm.value).subscribe({
        next:(res) => {
          console.log(res);
          sessionStorage.setItem('migrations',JSON.stringify(res))
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
      if (this.data.malesTotal < this.malesTotal ) {
        this.toast.error({detail:"Error",summary:"The number of males entered should  equals the total number of males in the school", duration:5000, position: 'topCenter'})
      }

       else if (this.data.femalesTotal < this.femalesTotal ) {
        this.migrationForm.setErrors({ 'invalidFemaleTotal': true });
        this.toast.error({detail:"Error",summary:"The number of females entered should equals the total number of females in the school", duration:5000, position: 'topCenter'})

      }
      else{
        this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

      }
    }
  }

}
