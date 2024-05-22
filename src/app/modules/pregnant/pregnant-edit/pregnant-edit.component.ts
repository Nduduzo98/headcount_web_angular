import { Component, OnInit ,Inject} from '@angular/core';
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
  selector: 'app-pregnant-edit',
  templateUrl: './pregnant-edit.component.html',
  styleUrls: ['./pregnant-edit.component.scss']
})
export class PregnantEditComponent implements OnInit {
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
    private ref:MatDialogRef<PregnantEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null
  }

  ngOnInit(): void {
    this.pregnantForm = this.formBuilder.group({
      id:[],
      schoolSurveyID: [null,[Validators.min(0)]],
      year: [0],
      preGradeR: [null,[Validators.min(0)]],
      gradeR: [null,[Validators.min(0)]],
      grade1: [null,[Validators.min(0)]],
      grade2: [null,[Validators.min(0)]],
      grade3: [null,[Validators.min(0)]],
      grade4: [null,[Validators.min(0)]],
      grade5: [null,[Validators.min(0)]],
      grade6: [null,[Validators.min(0)]],
      grade7: [null,[Validators.min(0)]],
      grade8: [null,[Validators.min(0)]],
      grade9: [null,[Validators.min(0)]],
      grade10: [null,[Validators.min(0)]],
      grade11: [null,[Validators.min(0)]],
      grade12: [null,[Validators.min(0)]],
      gradeSpecial: [null,[Validators.min(0)]],
      gradeOther: [null,[Validators.min(0)]],
      total: [null,[Validators.min(0)]],
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

    this.pregnantForm.patchValue(this.data)

    this.pregnantForm.valueChanges.subscribe((formValue:any)=>{
      this.total = 
      formValue.grade1 + formValue.grade2 +
      formValue.grade3 + formValue.grade4 +
      formValue.grade5 + formValue.grade6 +
      formValue.grade7 + formValue.grade8 +
      formValue.grade9 + formValue.grade10 +
      formValue.grade11 + formValue.grade12 +
      formValue.gradeSpecial + formValue.gradeOther +
      formValue.preGradeR + formValue.gradeR

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
  
      
    })
  }


  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.pregnantForm.valid) {
      console.log(this.pregnantForm.value);

      this.head.updatePregnant(this.pregnantForm.value).subscribe({
        next:(res) => {
          console.log(res);
          sessionStorage.setItem('pregnant',JSON.stringify(res))
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
