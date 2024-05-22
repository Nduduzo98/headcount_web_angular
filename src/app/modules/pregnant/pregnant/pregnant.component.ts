import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators, ValidationErrors} from '@angular/forms';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { NgToastService } from 'ng-angular-popup';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';

function patchValueIfNegative(control: FormControl): ValidationErrors | null {
  const value = control.value;

  if (value !== null && value < 0) {
    control.patchValue(0, { emitEvent: false }); // Patch the value to 0 without emitting the value change event
    control.setErrors(null); // Mark the control as valid
  }

  return null;
}
@Component({
  selector: 'app-pregnant',
  templateUrl: './pregnant.component.html',
  styleUrls: ['./pregnant.component.scss']
})
export class PregnantComponent implements OnInit {
  schoolDetails: any;
  surveyDetails:any;

  pregnantForm:any
  total:any

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

  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<PregnantComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }

  ngOnInit(): void {
    this.pregnantForm = this.formBuilder.group({
      schoolSurveyID: [this.surveyDetails.id],
      year: [0],
      preGradeR: [0,[Validators.min(0)]],
      gradeR: [0,[Validators.min(0)]],
      grade1: [0,[Validators.min(0)]],
      grade2: [0,[Validators.min(0)]],
      grade3: [0,[Validators.min(0)]],
      grade4: [0,[Validators.min(0)]],
      grade5: [0,[Validators.min(0)]],
      grade6: [0,[Validators.min(0)]],
      grade7: [0,[Validators.min(0)]],
      grade8: [0,[Validators.min(0)]],
      grade9: [0,[Validators.min(0)]],
      grade10: [0,[Validators.min(0)]],
      grade11: [0,[Validators.min(0)]],
      grade12: [0,[Validators.min(0)]],
      gradeSpecial: [0,[Validators.min(0)]],
      gradeOther: [0,[Validators.min(0)]],
      total: [0,[Validators.min(0)]],
      statusID: [1],
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

    this.pregnantForm.valueChanges.subscribe((formValue:any)=>{


      if (formValue.preGradeR < 0) {
        this.pregnantForm.patchValue({
          preGradeR:0
         
        });
      }
      if (formValue.gradeR < 0) {
        this.pregnantForm.patchValue({
          gradeR:0
         
        });
      }
      if (formValue.grade1 < 0) {
        this.pregnantForm.patchValue({
          grade1:0
         
        });
      } if (formValue.grade2 < 0) {
        this.pregnantForm.patchValue({
          grade2:0
         
        });
      }
      if (formValue.grade3 < 0) {
        this.pregnantForm.patchValue({
          grade3:0
         
        });
      } if (formValue.grade4 < 0) {
        this.pregnantForm.patchValue({
          grade4:0
         
        });
      }
      if (formValue.grade5 < 0) {
        this.pregnantForm.patchValue({
          grade5:0
         
        });
      } if (formValue.grade6 < 0) {
        this.pregnantForm.patchValue({
          grade6:0
         
        });
      }
      if (formValue.grade7 < 0) {
        this.pregnantForm.patchValue({
          grade7:0
         
        });
      } if (formValue.grade8 < 0) {
        this.pregnantForm.patchValue({
          grade8:0
         
        });
      }
     if (formValue.grade9 < 0) {
        this.pregnantForm.patchValue({
          grade9:0
         
        });
      }
      if (formValue.grade10 < 0) {
        this.pregnantForm.patchValue({
          grade10:0
         
        });
      } if (formValue.grade11 < 0) {
        this.pregnantForm.patchValue({
          grade11:0
         
        });
      }
      if (formValue.grade12 < 0) {
        this.pregnantForm.patchValue({
          grade12:0
         
        });
      } if (formValue.gradeOther < 0) {
        this.pregnantForm.patchValue({
          gradeOther:0
         
        });
      }
      if (formValue.gradeSpecial < 0) {
        this.pregnantForm.patchValue({
          gradeSpecial:0
         
        });
      }
  
      this.total = 
      formValue.grade1 + formValue.grade2 +
      formValue.grade3 + formValue.grade4 +
      formValue.grade5 + formValue.grade6 +
      formValue.grade7 + formValue.grade8 +
      formValue.grade9 + formValue.grade10 +
      formValue.grade11 + formValue.grade12 +
      formValue.gradeSpecial + formValue.gradeOther +
      formValue.preGradeR + formValue.gradeR
      
    })
  }


  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.pregnantForm.valid) {
      console.log(this.pregnantForm.value);

      this.head.savePregnant(this.pregnantForm.value).subscribe({
        next:(res) => {
          console.log(res);
          sessionStorage.setItem('pregnant',JSON.stringify(res))
          window.location.reload()
          this.toast.success({detail:"Success",summary:"Saved Successfully", duration:5000, position: 'topCenter'})
          this.ref.close()
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
      
    }else{
      this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

    }
  }
}
