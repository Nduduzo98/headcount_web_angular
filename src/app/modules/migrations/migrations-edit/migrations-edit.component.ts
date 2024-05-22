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
  selector: 'app-migrations-edit',
  templateUrl: './migrations-edit.component.html',
  styleUrls: ['./migrations-edit.component.scss']
})
export class MigrationsEditComponent {
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
    private ref:MatDialogRef<MigrationsEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public dialogData :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }
  ngOnInit(): void {
    this.migrationForm = this.formBuilder.group({
     id:[],
      schoolSurveyID: [],
      miigrationStatus: [''],
      gradeMaleEasternCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleEasternCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalEasternCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleFreeState: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleFreeState: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalSeFreeState: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleKwaZuluNatal: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleKwaZuluNatal: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalKwaZuluNatal: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleLimpopo: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleLimpopo: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalLimpopo: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleMpumalanga: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleMpumalanga: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalMpumalanga: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleNorthernCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleNorthernCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalNorthernCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleNorthWest: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleNorthWest: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalNorthWest: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleWesterCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleWesterCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalWesterCape: [null,[Validators.min(0), patchValueIfNegative]],
      gradeMaleForeignCountries: [null,[Validators.min(0), patchValueIfNegative]],
      gradeFemaleForeignCountries: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalForeignCountries: [null,[Validators.min(0), patchValueIfNegative]],
      malesTotal: [null,[Validators.min(0), patchValueIfNegative]],
      femalesTotal: [null,[Validators.min(0), patchValueIfNegative]],
      gradeTotalTotal: [null,[Validators.min(0), patchValueIfNegative]],
      statusID: []
    })
    this.migrationForm.patchValue(this.dialogData.migrationsDetails)

    this.migrationForm.valueChanges.subscribe((formValue:any) =>{
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

       
    if (this.dialogData.learnerPerClassDetails.malesTotal < this.malesTotal ) {
      this.migrationForm.setErrors({ 'invalidMalesTotal': true });
    }
    if (this.dialogData.learnerPerClassDetails.femalesTotal < this.femalesTotal ) {
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

    })
   
  }

  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.migrationForm.valid) {
      console.log(this.migrationForm.value);

      this.head.updateMigration(this.migrationForm.value).subscribe({
        next:(res) => {
          console.log(res);
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
          this.ref.close()
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
      
    }
    else{
      if (this.dialogData.learnerPerClassDetails.malesTotal < this.malesTotal ) {
        this.toast.error({detail:"Error",summary:"The number of males entered should  equals the total number of males in the school", duration:5000, position: 'topCenter'})
      }

    else if (this.dialogData.learnerPerClassDetails.femalesTotal < this.femalesTotal ) {
        this.toast.error({detail:"Error",summary:"The number of females entered should equals the total number of females in the school", duration:5000, position: 'topCenter'})

      }
      else{
        this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

      }
    }
  }

}
