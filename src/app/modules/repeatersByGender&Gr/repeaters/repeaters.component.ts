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
  selector: 'app-repeaters',
  templateUrl: './repeaters.component.html',
  styleUrls: ['./repeaters.component.scss']
})
export class RepeatersComponent implements OnInit {
  schoolDetails:any
  surveyDetails:any
  repeatersForm:any

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

  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<RepeatersComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public data :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null

  
  }
 
  ngOnInit(): void {
    
  this.repeatersForm = this.formBuilder.group({
    schoolSurveyID: this.surveyDetails.id,
      preGradeRMale: [0,[Validators.min(0)]],
      preGradeRFemale: [0,[Validators.min(0)]],
      preGradeRTotal:  [0,[Validators.min(0)]],
      gradeRMale: [0,[Validators.min(0)]],
      gradeRFemale: [0,[Validators.min(0)]],
      gradeRTotal: [0,[Validators.min(0)]],
      malesTotal: [0,[Validators.min(0)]],
      femalesTotal: [0,[Validators.min(0)]],
      statusID: 1,
      gradeMale1: [0,[Validators.min(0)]],
      gradeFemale1: [0,[Validators.min(0)]],
      gradeTotal1: [0,[Validators.min(0)]],
      gradeMale2: [0,[Validators.min(0)]],
      gradeFemale2: [0,[Validators.min(0)]],
      gradeTotal2: [0,[Validators.min(0)]],
      gradeMale3: [0,[Validators.min(0)]],
      gradeFemale3: [0,[Validators.min(0)]],
      gradeTotal3: [0,[Validators.min(0)]],
      gradeMale4: [0,[Validators.min(0)]],
      gradeFemale4: [0,[Validators.min(0)]],
      gradeTotal4: [0,[Validators.min(0)]],
      gradeMale5: [0,[Validators.min(0)]],
      gradeFemale5: [0,[Validators.min(0)]],
      gradeTotal5: [0,[Validators.min(0)]],
      gradeMale6: [0,[Validators.min(0)]],
      gradeFemale6: [0,[Validators.min(0)]],
      gradeTotal6: [0,[Validators.min(0)]],
      gradeMale7: [0,[Validators.min(0)]],
      gradeFemale7: [0,[Validators.min(0)]],
      gradeTotal7: [0,[Validators.min(0)]],
      gradeMale8: [0,[Validators.min(0)]],
      gradeFemale8: [0,[Validators.min(0)]],
      gradeTotal8: [0,[Validators.min(0)]],
      gradeMale9: [0,[Validators.min(0)]],
      gradeFemale9: [0,[Validators.min(0)]],
      gradeTotal9: [0,[Validators.min(0)]],
      gradeMale10: [0,[Validators.min(0)]],
      gradeFemale10: [0,[Validators.min(0)]],
      gradeTotal10: [0,[Validators.min(0)]],
      gradeMale11: [0,[Validators.min(0)]],
      gradeFemale11: [0,[Validators.min(0)]],
      gradeTotal11: [0,[Validators.min(0)]],
      gradeMale12: [0,[Validators.min(0)]],
      gradeFemale12: [0,[Validators.min(0)]],
      gradeTotal12: [0,[Validators.min(0)]],
      gradeMaleSpecial: [0,[Validators.min(0)]],
      gradeFemaleSpecial: [0,[Validators.min(0)]],
      gradeTotalSpecial: [0,[Validators.min(0)]],
      gradeMaleOther: [0,[Validators.min(0)]],
      gradeFemaleOther: [0,[Validators.min(0)]],
      gradeTotalOther: [0,[Validators.min(0)]],
      LearnersTotal:[0]
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


  this.repeatersForm.valueChanges.subscribe((formValue:any) =>{
    if (this.data.preGradeRMale < formValue.preGradeRMale) {

      this.repeatersForm.patchValue({
        preGradeRMale:0,
       
      });
      this.toast.error({detail:"Error",summary:"Pre-Grade R male repeaters which is " + formValue.preGradeRMale + " can not exceed " + this.data.preGradeRMale +" which is total number of learners of Pre-Grade R", duration:5000, position: 'topCenter'})
    }
    if (this.data.preGradeRFemale < formValue.preGradeRFemale) {

      this.repeatersForm.patchValue({
        preGradeRFemale: 0
      });
      this.toast.error({detail:"Error",summary:"Pre-Grade R Female repeaters which is " + formValue.preGradeRFemale + " can not exceed " + this.data.preGradeRFemale +" which is total number of learners of Pre-Grade R", duration:5000, position: 'topCenter'})
    }if (this.data.gradeRMale < formValue.gradeRMale) {

      this.repeatersForm.patchValue({
        gradeRMale:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade R male repeaters which is " + formValue.gradeRMale + " can not exceed " + this.data.gradeRMale +" which is total number of learners of Grade R", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeRFemale < formValue.gradeRFemale) {

      this.repeatersForm.patchValue({
       
        gradeRFemale: 0
      });
      this.toast.error({detail:"Error",summary:"Grade R Female repeaters which is " + formValue.gradeRFemale + " can not exceed " + this.data.gradeRFemale +" which is total number of learners of Grade 8", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale1 < formValue.gradeMale1) {

      this.repeatersForm.patchValue({
        gradeMale1:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 1 male repeaters which is " + formValue.gradeMale1 + " can not exceed " + this.data.gradeMale1 +" which is total number of learners of Grade 1", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale1 < formValue.gradeFemale1) {

      this.repeatersForm.patchValue({
       
        gradeFemale1: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 1 Female repeaters which is " + formValue.gradeFemale1 + " can not exceed " + this.data.gradeFemale1 +" which is total number of learners of Grade 1", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale2 < formValue.gradeMale2) {

      this.repeatersForm.patchValue({
        gradeMale2:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 2 male repeaters which is " + formValue.gradeMale2 + " can not exceed " + this.data.gradeMale2 +" which is total number of learners of Grade 2", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale2 < formValue.gradeFemale2) {

      this.repeatersForm.patchValue({
       
        gradeFemale2: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 2 Female repeaters which is " + formValue.gradeFemale2 + " can not exceed " + this.data.gradeFemale2 +" which is total number of learners of Grade 8", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale3 < formValue.gradeMale3) {

      this.repeatersForm.patchValue({
        gradeMale3:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 3 male repeaters which is " + formValue.gradeMale3 + " can not exceed " + this.data.gradeMale3 +" which is total number of learners of Grade 3", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale3 < formValue.gradeFemale3) {

      this.repeatersForm.patchValue({
       
        gradeFemale3: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 3 Female repeaters which is " + formValue.gradeFemale3 + " can not exceed " + this.data.gradeFemale3 +" which is total number of learners of Grade 3", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale4 < formValue.gradeMale4) {

      this.repeatersForm.patchValue({
        gradeMale4:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 4 male repeaters which is " + formValue.gradeMale4 + " can not exceed " + this.data.gradeMale4 +" which is total number of learners of Grade 4", duration:10000, position: 'topCenter'})
    }
    if (this.data.gradeFemale4 < formValue.gradeFemale4) {

      this.repeatersForm.patchValue({
       
        gradeFemale4: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 4 Female repeaters which is " + formValue.gradeFemale8 + " can not exceed " + this.data.gradeFemale4 +" which is total number of learners of Grade 4", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale5 < formValue.gradeMale5) {

      this.repeatersForm.patchValue({
        gradeMale5:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 5 male repeaters which is " + formValue.gradeMale5 + " can not exceed " + this.data.gradeMale5 +" which is total number of learners of Grade 5", duration:10000, position: 'topCenter'})
    }
    if (this.data.gradeFemale5< formValue.gradeFemale5) {

      this.repeatersForm.patchValue({
       
        gradeFemale5: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 5 Female repeaters which is " + formValue.gradeFemale5 + " can not exceed " + this.data.gradeFemale5 +" which is total number of learners of Grade 5", duration:5000, position: 'topCenter'})
    }if (this.data.gradeMale6 < formValue.gradeMale6) {

      this.repeatersForm.patchValue({
        gradeMale6:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 6 male repeaters which is " + formValue.gradeMale6 + " can not exceed " + this.data.gradeMale6 +" which is total number of learners of Grade 6", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale6 < formValue.gradeFemale6) {

      this.repeatersForm.patchValue({
       
        gradeFemale6: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 6 Female repeaters which is " + formValue.gradeFemale6 + " can not exceed " + this.data.gradeFemale6 +" which is total number of learners of Grade 6", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeMale7 < formValue.gradeMale7) {

      this.repeatersForm.patchValue({
        gradeMale7:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 7 male repeaters which is " + formValue.gradeMale7 + " can not exceed " + this.data.gradeMale7 +" which is total number of learners of Grade 7", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale7 < formValue.gradeFemale7) {

      this.repeatersForm.patchValue({
       
        gradeFemale7: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 7 Female repeaters which is " + formValue.gradeFemale7 + " can not exceed " + this.data.gradeFemale7 +" which is total number of learners of Grade 7", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeMale8 < formValue.gradeMale8) {

      this.repeatersForm.patchValue({
        gradeMale8:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 8 male repeaters which is " + formValue.gradeMale8 + " can not exceed " + this.data.gradeMale8 +" which is total number of learners of Grade 8", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale8 < formValue.gradeFemale8) {

      this.repeatersForm.patchValue({
       
        gradeFemale8: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 8 Female repeaters which is " + formValue.gradeFemale8 + " can not exceed " + this.data.gradeFemale8 +" which is total number of learners of Grade 8", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeMale9 < formValue.gradeMale9) {
      this.repeatersForm.patchValue({
        gradeMale9:0
       
      });
      this.toast.error({detail:"Error",summary:"Grade 9 male repeaters which is " + formValue.gradeMale9 + " can not exceed " + this.data.gradeMale9 +" which is total number of learners of Grade 9", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale9 < formValue.gradeFemale9) {
      this.repeatersForm.patchValue({
      
        gradeFemale9: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 9 Female repeaters which is " + formValue.gradeFemale9 + " can not exceed " + this.data.gradeFemale9 +" which is total number of learners of Grade 9", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeMale10 < formValue.gradeMale10) {
      this.repeatersForm.patchValue({
        gradeMale10:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 10 male repeaters which is " + formValue.gradeMale10 + " can not exceed " + this.data.gradeMale10 +" which is total number of learners of Grade 10", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale10 < formValue.gradeFemale10) {
      this.repeatersForm.patchValue({
        
        gradeFemale10: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 10 Female repeaters which is " + formValue.gradeFemale10 + " can not exceed " + this.data.gradeFemale10 +" which is total number of learners of Grade 10", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeMale11 < formValue.gradeMale11) {
      this.repeatersForm.patchValue({
        gradeMale11:0,
       
      });
      this.toast.error({detail:"Error",summary:"Grade 11 male repeaters which is " + formValue.gradeMale11 + " can not exceed " + this.data.gradeMale11 +" which is total number of learners of Grade 11", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale11 < formValue.gradeFemale11) {
      this.repeatersForm.patchValue({
        
        gradeFemale11: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 11 Female repeaters which is " + formValue.gradeFemale11 + " can not exceed " + this.data.gradeFemale11 +" which is total number of learners of Grade 11", duration:5000, position: 'topCenter'})
    }

    if (this.data.gradeMale12 < formValue.gradeMale12) {
      this.repeatersForm.patchValue({
        gradeMale12:0,
        
      });
      this.toast.error({detail:"Error",summary:"Grade 12 male repeaters which is " + formValue.gradeMale12 + " can not exceed " + this.data.gradeMale12 +" which is total number of learners of Grade 12", duration:5000, position: 'topCenter'})
    }
    if (this.data.gradeFemale12 < formValue.gradeFemale12) {
      this.repeatersForm.patchValue({
     
        gradeFemale12: 0
      });
      this.toast.error({detail:"Error",summary:"Grade 12 Female repeaters which is " + formValue.gradeFemale12 + " can not exceed " + this.data.gradeFemale12 +" which is total number of learners of Grade 12", duration:5000, position: 'topCenter'})
    }
    //Grade R calculations
   

    if (formValue.preGradeRFemale < 0) {
      this.repeatersForm.patchValue({
        preGradeRFemale:0
       
      });
    }
    if (formValue.gradeRMale < 0) {
      this.repeatersForm.patchValue({
        gradeRMale:0
       
      });
    }
    if (formValue.gradeRFemale < 0) {
      this.repeatersForm.patchValue({
        gradeRFemale:0
       
      });
    } if (formValue.gradeMale1 < 0) {
      this.repeatersForm.patchValue({
        gradeMale1:0
       
      });
    }
    if (formValue.gradeFemale1 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale1:0
       
      });
    } if (formValue.gradeMale2 < 0) {
      this.repeatersForm.patchValue({
        gradeMale1:0
       
      });
    }
    if (formValue.gradeFemale2 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale2:0
       
      });
    } if (formValue.gradeMale3 < 0) {
      this.repeatersForm.patchValue({
        gradeMale3:0
       
      });
    }
    if (formValue.gradeFemale3 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale3:0
       
      });
    } if (formValue.gradeMale4 < 0) {
      this.repeatersForm.patchValue({
        gradeMale4:0
       
      });
    }
    if (formValue.gradeFemale4 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale4:0
       
      });
    } if (formValue.gradeMale5 < 0) {
      this.repeatersForm.patchValue({
        gradeMale5:0
       
      });
    }
    if (formValue.gradeFemale5 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale5:0
       
      });
    } if (formValue.gradeMale6 < 0) {
      this.repeatersForm.patchValue({
        gradeMale6:0
       
      });
    }
    if (formValue.gradeFemale6 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale8:0
       
      });
    } if (formValue.gradeMale7 < 0) {
      this.repeatersForm.patchValue({
        gradeMale7:0
       
      });
    }
    if (formValue.gradeFemale7 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale7:0
       
      });
    } if (formValue.gradeMale8 < 0) {
      this.repeatersForm.patchValue({
        gradeMale8:0
       
      });
    }
    if (formValue.gradeFemale8 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale8:0
       
      });
    } if (formValue.gradeMale9 < 0) {
      this.repeatersForm.patchValue({
        gradeMale9:0
       
      });
    }
    if (formValue.gradeFemale9 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale9:0
       
      });
    }

    if (formValue.gradeMale10 < 0) {
      this.repeatersForm.patchValue({
        gradeMale10:0
       
      });
    }
    if (formValue.gradeFemale10 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale10:0
       
      });
    }

    if (formValue.gradeMale11 < 0) {
      this.repeatersForm.patchValue({
        gradeMale11:0
       
      });
    }
    if (formValue.gradeFemale11 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale11:0
       
      });
    }
    if (formValue.gradeMale12 < 0) {
      this.repeatersForm.patchValue({
        gradeMale12:0
       
      });
    }
    if (formValue.gradeFemale12 < 0) {
      this.repeatersForm.patchValue({
        gradeFemale12:0
       
      });
    }

    if (formValue.gradeMaleSpecial < 0) {
      this.repeatersForm.patchValue({
        gradeMaleSpecial:0
       
      });
    }
    if (formValue.gradeFemaleSpecial < 0) {
      this.repeatersForm.patchValue({
        gradeFemaleSpecial:0
       
      });
    }
    if (formValue.gradeMaleOther < 0) {
      this.repeatersForm.patchValue({
        gradeMaleOther:0
       
      });
    }
    if (formValue.gradeFemaleOther < 0) {
      this.repeatersForm.patchValue({
        gradeFemaleOther:0
       
      });
    }


    this.gCalcMaleR = formValue.gradeRMale
    this.gCalcFemaleR = formValue.gradeRFemale
    this.gradeRTotal = this.gCalcMaleR + this.gCalcFemaleR
    //Grade R calculations

    this.gCalcMalePreGradeR = formValue.preGradeRMale
    this.gCalcFemalePreGradeR = formValue.preGradeRFemale
    this.gradePreGradeRTolal = this.gCalcMalePreGradeR + this.gCalcFemalePreGradeR

    //Grade 1 calculations
    this.gCalcMale1 = formValue.gradeMale1
    this.gCalcFemale1 = formValue.gradeFemale1
    this.grade1Total = this.gCalcFemale1 + this.gCalcMale1

    //Grade 2 calculations
    this.gCalcFemale2  = formValue.gradeFemale2
    this.gCalcMale2 = formValue.gradeMale2
    this.grade2Total = this.gCalcFemale2 + this.gCalcMale2

    this.gCalcFemale3  = formValue.gradeFemale3
    this.gCalcMale3 = formValue.gradeMale3
    this.grade3Total = this.gCalcFemale3 + this.gCalcMale3
    
    this.gCalcFemale4  = formValue.gradeFemale4
    this.gCalcMale4 = formValue.gradeMale4
    this.grade4Total = this.gCalcFemale4 + this.gCalcMale4
    
    this.gCalcFemale5  = formValue.gradeFemale5
    this.gCalcMale5 = formValue.gradeMale5
    this.grade5Total = this.gCalcFemale5 + this.gCalcMale5
    
    this.gCalcFemale6  = formValue.gradeFemale6
    this.gCalcMale6 = formValue.gradeMale6
    this.grade6Total = this.gCalcFemale6 + this.gCalcMale6
    
    this.gCalcFemale7  = formValue.gradeFemale7
    this.gCalcMale7 = formValue.gradeMale7
    this.grade7Total = this.gCalcFemale7 + this.gCalcMale7
    
    this.gCalcFemale8  = formValue.gradeFemale8
    this.gCalcMale8 = formValue.gradeMale8
    this.grade8Total = this.gCalcFemale8 + this.gCalcMale8
    
    this.gCalcFemale9  = formValue.gradeFemale9
    this.gCalcMale9 = formValue.gradeMale9
    this.grade9Total = this.gCalcFemale9 + this.gCalcMale9
    
    this.gCalcFemale10  = formValue.gradeFemale10
    this.gCalcMale10 = formValue.gradeMale10
    this.grade10Total = this.gCalcFemale10 + this.gCalcMale10
    
    this.gCalcFemale11  = formValue.gradeFemale11
    this.gCalcMale11 = formValue.gradeMale11
    this.grade11Total = this.gCalcFemale11 + this.gCalcMale11
    
    this.gCalcFemale12  = formValue.gradeFemale12
    this.gCalcMale12 = formValue.gradeMale12
    this.grade12Total = this.gCalcFemale12 + this.gCalcMale12
    
    this.gCalcFemaleSpecial  = formValue.gradeFemaleSpecial
    this.gCalcMaleSpecial = formValue.gradeMaleSpecial
    this.gradeSpecialTotal = this.gCalcFemaleSpecial + this.gCalcMaleSpecial
    
    this.gCalcFemaleOther  = formValue.gradeFemaleOther
    this.gCalcMaleOther = formValue.gradeMaleOther
    this.gradeOtherTotal = this.gCalcFemaleOther + this.gCalcMaleOther
    

    this.femaleTotal = this.gCalcFemalePreGradeR + this.gCalcFemaleR + this.gCalcFemale1 + this.gCalcFemale2 + this.gCalcFemale3 + this.gCalcFemale4 + this.gCalcFemale5 + this.gCalcFemale6 + this.gCalcFemale7 + this.gCalcFemale8 + this.gCalcFemale9 + this.gCalcFemale10 +this.gCalcFemale11 +this.gCalcFemale12 + this.gCalcFemaleOther + this.gCalcFemaleSpecial
    this.maleTotal = this.gCalcMalePreGradeR +this.gCalcMaleR + this.gCalcMale1 + this.gCalcMale2 + this.gCalcMale3 + this.gCalcMale4 + this.gCalcMale5 + this.gCalcMale6 + this.gCalcMale7 + this.gCalcMale8 + this.gCalcMale9 + this.gCalcMale10 + this.gCalcMale11 + this.gCalcMale12 + this.gCalcMaleOther + this.gCalcMaleSpecial
    this.totalLearners = formValue.malesTotal + formValue.femalesTotal


  })
  

 
  }

  
  closeDialog(){
    this.ref.close()
    
  }

  onSubmit(){
    if (this.repeatersForm.valid) {
      console.log(this.repeatersForm.value);

      


      this.head.saveRepeaters(this.repeatersForm.value).subscribe({
        next:(res) => {
          console.log(res);
          sessionStorage.setItem('repeaters',JSON.stringify(res))
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
   
      const invalidField = Object.keys(this.repeatersForm.controls).find(controlName =>{
        const control = this.repeatersForm.get(controlName)
        return control.invalid
      })

      let errorMessage = 'Please fill in all the fields correctly'
      if (invalidField) {
        if (invalidField == 'preGradeRMale') {
          errorMessage = `You have entered a negative number in the Pre-Grade-R Male field.`;
        }
        if (invalidField == 'preGradeRFemale') {
          errorMessage = `You have entered a negative number in the Pre-Grade-R Female field.`;
        }

        if (invalidField == 'gradeRMale') {
          errorMessage = `You have entered a negative number in the Grade-R Male field.`;
        }
        if (invalidField == 'gradeRFemale') {
          errorMessage = `You have entered a negative number in the Grade-R Female field.`;
        }
        if (invalidField == 'gradeMale1') {
          errorMessage = `You have entered a negative number in the Grade 1 Male field.`;
        }
        if (invalidField == 'gradeFemale1') {
          errorMessage = `You have entered a negative number in the Grade 1 Female field.`;
        }
        if (invalidField == 'gradeMale2') {
          errorMessage = `You have entered a negative number in the Grade 2 Male field.`;
        }
        if (invalidField == 'gradeFemale2') {
          errorMessage = `You have entered a negative number in the Grade 2 Female field.`;
        }
        if (invalidField == 'gradeMale3') {
          errorMessage = `You have entered a negative number in the Grade 3 Male field.`;
        }
        if (invalidField == 'gradeFemale3') {
          errorMessage = `You have entered a negative number in the Grade 3 Female field.`;
        }
        if (invalidField == 'gradeMale4') {
          errorMessage = `You have entered a negative number in the Grade 4 Male field.`;
        }
        if (invalidField == 'gradeFemale4') {
          errorMessage = `You have entered a negative number in the Grade 4 Female field.`;
        }
        if (invalidField == 'gradeMale5') {
          errorMessage = `You have entered a negative number in the Grade 5 Male field.`;
        }
        if (invalidField == 'gradeFemale5') {
          errorMessage = `You have entered a negative number in the Grade 5 Female field.`;
        }
        if (invalidField == 'gradeMale6') {
          errorMessage = `You have entered a negative number in the Grade 6 Male field.`;
        }
        if (invalidField == 'gradeFemale6') {
          errorMessage = `You have entered a negative number in the Grade 6 Female field.`;
        }
        if (invalidField == 'gradeMale7') {
          errorMessage = `You have entered a negative number in the Grade 7 Male field.`;
        }
        if (invalidField == 'gradeFemale7') {
          errorMessage = `You have entered a negative number in the Grade 7 Female field.`;
        }
        if (invalidField == 'gradeMale8') {
          errorMessage = `You have entered a negative number in the Grade 8 Male field.`;
        }
        if (invalidField == 'gradeFemale8') {
          errorMessage = `You have entered a negative number in the Grade 8 Female field.`;
        }
        if (invalidField == 'gradeMale9') {
          errorMessage = `You have entered a negative number in the Grade 9 Male field.`;
        }
        if (invalidField == 'gradeFemale9') {
          errorMessage = `You have entered a negative number in the Grade 9 Female field.`;
        }
        if (invalidField == 'gradeMale10') {
          errorMessage = `You have entered a negative number in the Grade 10 Male field.`;
        }
        if (invalidField == 'gradeFemale10') {
          errorMessage = `You have entered a negative number in the Grade 10 Female field.`;
        }
        if (invalidField == 'gradeMale11') {
          errorMessage = `You have entered a negative number in the Grade 11 Male field.`;
        }
        if (invalidField == 'gradeFemale11') {
          errorMessage = `You have entered a negative number in the Grade 11 Female field.`;
        }
        if (invalidField == 'gradeMale12') {
          errorMessage = `You have entered a negative number in the Grade 12 Male field.`;
        }
        if (invalidField == 'gradeFemale12') {
          errorMessage = `You have entered a negative number in the Grade 12 Female field.`;
        }
        if (invalidField == 'gradeMaleSpecial') {
          errorMessage = `You have entered a negative number in the Grade Special Male field.`;
        }
        if (invalidField == 'gradeFemaleSpecial') {
          errorMessage = `You have entered a negative number in the Grade SpecialFemale field.`;
        }
        if (invalidField == 'gradeMaleOther') {
          errorMessage = `You have entered a negative number in the Grade Other Male field.`;
        }
        if (invalidField == 'gradeFemaleOther') {
          errorMessage = `You have entered a negative number in the Grade Othe Female field.`;
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

}
