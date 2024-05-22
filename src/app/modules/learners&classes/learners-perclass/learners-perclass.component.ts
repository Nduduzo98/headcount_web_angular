import { Component, OnInit,ElementRef, Renderer2, } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog'
import { FormGroup ,FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { HeadCountServiceService } from 'src/app/services/head-count-service.service';
import { SchoolGeneralDetails } from 'src/app/model/school-general-details';
import { NgToastService } from 'ng-angular-popup';
import { LookupService } from 'src/app/services/lookup.service';
import { Router } from '@angular/router';
import { grade8Class } from 'src/app/validators/grade8.validator';
import { grade2Class } from 'src/app/validators/grade2.validator';
import { grade3Class } from 'src/app/validators/grade3.validator';
import { grade4Class } from 'src/app/validators/grade4.validator';
import { grade5Class } from 'src/app/validators/grade5.validator';
import { grade6Class } from 'src/app/validators/grade6.validator';
import { grade7Class } from 'src/app/validators/grade7.validator';
import { grade9Class } from 'src/app/validators/grade9.validator';
import { grade10Class } from 'src/app/validators/grade10.validator';
import { grade11Class } from 'src/app/validators/grade11.validator';
import { grade12Class } from 'src/app/validators/grade12.validator';
import { gradeOtherClass } from 'src/app/validators/other.validator';
import { gradeSpecialClass } from 'src/app/validators/special.validator';
import { grade1Class } from 'src/app/validators/grade1.validator';
import { gradeRClass } from 'src/app/validators/gradeR.validator';
import { preGradeRClass } from 'src/app/validators/preGradeR.validator';


function validateNumberBelow1000(control: FormControl): { [key: string]: any } | null {
  const value = control.value;
  if (value !== null && value > 1000) {
    return { numberAbove1000: true };
  }
  return null;
}
function numberBelow30(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && control.value > 100) {
    return { 'numberBelow30': true };
  }
  return null;
}

@Component({
  selector: 'app-learners-perclass',
  templateUrl: './learners-perclass.component.html',
  styleUrls: ['./learners-perclass.component.scss']
})
export class LearnersPerclassComponent implements OnInit {

  schoolDetails: any;
  surveyDetails:any
  learnersPerclassForm:any
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
totalClasses:any


  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,private el: ElementRef, private renderer: Renderer2,
    private ref:MatDialogRef<LearnersPerclassComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null

  
  }
  ngOnInit(): void {

    const inputElement: HTMLInputElement = this.el.nativeElement.querySelector('input');
    this.renderer.setAttribute(inputElement, 'type', 'text');


    this.learnersPerclassForm = this.formBuilder.group({
      schoolSurveyID: this.surveyDetails.id,
      preGradeRMale: [0,[Validators.min(0)]],
      preGradeRFemale: [0,[Validators.min(0)]],
      preGradeRTotal:  [0,[validateNumberBelow1000,Validators.min(0)]],
      preGradeRClasses: [0,[numberBelow30,Validators.min(0)]],
      gradeRMale: [0,[Validators.min(0)]],
      gradeRFemale: [0,[Validators.min(0)]],
      gradeRTotal:  [0,[validateNumberBelow1000,Validators.min(0)]],
      gradeRClasses: [0,[numberBelow30,Validators.min(0)]],
      malesTotal:  [0,[Validators.min(0)]],
      femalesTotal:  [0,[Validators.min(0)]],
      classesTotal:  [0,[Validators.min(0)]],
      statusID: 1,
      gradeMale1: [0,[Validators.min(0)]],
      gradeFemale1: [0,[Validators.min(0)]],
      gradeTotal1:  [0,[validateNumberBelow1000]],
      gradeClasses1: [0,[numberBelow30,Validators.min(0)]],
      gradeMale2: [0,[Validators.min(0)]],
      gradeFemale2: [0,[Validators.min(0)]],
      gradeTotal2:  [0,[validateNumberBelow1000]],
      gradeClasses2: [0,[numberBelow30,Validators.min(0)]],
      gradeMale3: [0,[Validators.min(0)]],
      gradeFemale3: [0,[Validators.min(0)]],
      gradeTotal3:  [0,[validateNumberBelow1000]],
      gradeClasses3: [0,[numberBelow30,Validators.min(0)]],
      gradeMale4: [0,[Validators.min(0)]],
      gradeFemale4: [0,[Validators.min(0)]],
      gradeTotal4:  [0,[validateNumberBelow1000]],
      gradeClasses4: [0,[numberBelow30,Validators.min(0)]],
      gradeMale5: [0,[Validators.min(0)]],
      gradeFemale5: [0,[Validators.min(0)]],
      gradeTotal5:  [0,[validateNumberBelow1000]],
      gradeClasses5: [0,[numberBelow30,Validators.min(0)]],
      gradeMale6: [0,[Validators.min(0)]],
      gradeFemale6: [0,[Validators.min(0)]],
      gradeTotal6:  [0,[validateNumberBelow1000]],
      gradeClasses6: [0,[numberBelow30,Validators.min(0)]],
      gradeMale7: [0,[Validators.min(0)]],
      gradeFemale7: [0,[Validators.min(0)]],
      gradeTotal7:  [0,[validateNumberBelow1000]],
      gradeClasses7: [0,[numberBelow30,Validators.min(0)]],
      gradeMale8: [0,[Validators.min(0)]],
      gradeFemale8: [0,[Validators.min(0)]],
      gradeTotal8:  [0,[validateNumberBelow1000]],
      gradeClasses8: [0,[numberBelow30,Validators.min(0)]],
      gradeMale9: [0,[Validators.min(0)]],
      gradeFemale9: [0,[Validators.min(0)]],
      gradeTotal9:  [0,[validateNumberBelow1000]],
      gradeClasses9: [0,[numberBelow30,Validators.min(0)]],
      gradeMale10: [0,[Validators.min(0)]],
      gradeFemale10: [0,[Validators.min(0)]],
      gradeTotal10:  [0,[validateNumberBelow1000]],
      gradeClasses10: [0,[numberBelow30,Validators.min(0)]],
      gradeMale11: [0,[Validators.min(0)]],
      gradeFemale11: [0,[Validators.min(0)]],
      gradeTotal11:  [0,[validateNumberBelow1000]],
      gradeClasses11: [0,[numberBelow30,Validators.min(0)]],
      gradeMale12: [0,[Validators.min(0)]],
      gradeFemale12: [0,[Validators.min(0)]],
      gradeTotal12:  [0,[validateNumberBelow1000]],
      gradeClasses12: [0,[numberBelow30,Validators.min(0)]],
      gradeMaleSpecial: [0,[Validators.min(0)]],
      gradeFemaleSpecial: [0,[Validators.min(0)]],
      gradeTotalSpecial:  [0,[validateNumberBelow1000]],
      gradeClassesSpecial: [0,[numberBelow30,Validators.min(0)]],
      gradeMaleOther: [0,[Validators.min(0)]],
      gradeFemaleOther: [0,[Validators.min(0)]],
      gradeTotalOther:  [0,[validateNumberBelow1000]],
      gradeClassesOther: [0,[numberBelow30,Validators.min(0)]],
      LearnersTotal:[0,[Validators.min(0)]]
    },{
      validators:[preGradeRClass,gradeRClass,grade1Class,grade2Class, grade3Class, grade4Class, grade5Class, grade6Class, grade7Class, grade8Class,grade9Class, grade10Class, grade11Class, grade12Class, gradeSpecialClass, gradeOtherClass]
    })
    this.preGradeR = this.surveyDetails.preGradeR
    console.log(this.surveyDetails.preGradeR);
    
    this.gR = this.surveyDetails.gradeR
  
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
    this.learnersPerclassForm.valueChanges.subscribe((formValue:any) =>{
      //Grade R calculations
      if (formValue.preGradeRMale < 0) {
        this.learnersPerclassForm.patchValue({
          preGradeRMale:0
         
        });
      }
      if (formValue.preGradeRFemale < 0) {
        this.learnersPerclassForm.patchValue({
          preGradeRFemale:0
         
        });
      }
      if (formValue.gradeRMale < 0) {
        this.learnersPerclassForm.patchValue({
          gradeRMale:0
         
        });
      }
      if (formValue.gradeRFemale < 0) {
        this.learnersPerclassForm.patchValue({
          gradeRFemale:0
         
        });
      } if (formValue.gradeMale1 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale1:0
         
        });
      }
      if (formValue.gradeFemale1 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale1:0
         
        });
      } if (formValue.gradeMale2 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale1:0
         
        });
      }
      if (formValue.gradeFemale2 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale2:0
         
        });
      } if (formValue.gradeMale3 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale3:0
         
        });
      }
      if (formValue.gradeFemale3 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale3:0
         
        });
      } if (formValue.gradeMale4 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale4:0
         
        });
      }
      if (formValue.gradeFemale4 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale4:0
         
        });
      } if (formValue.gradeMale5 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale5:0
         
        });
      }
      if (formValue.gradeFemale5 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale5:0
         
        });
      } if (formValue.gradeMale6 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale6:0
         
        });
      }
      if (formValue.gradeFemale6 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale8:0
         
        });
      } if (formValue.gradeMale7 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale7:0
         
        });
      }
      if (formValue.gradeFemale7 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale7:0
         
        });
      } if (formValue.gradeMale8 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale8:0
         
        });
      }
      if (formValue.gradeFemale8 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale8:0
         
        });
      } if (formValue.gradeMale9 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale9:0
         
        });
      }
      if (formValue.gradeFemale9 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale9:0
         
        });
      }

      if (formValue.gradeMale10 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale10:0
         
        });
      }
      if (formValue.gradeFemale10 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale10:0
         
        });
      }

      if (formValue.gradeMale11 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale11:0
         
        });
      }
      if (formValue.gradeFemale11 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale11:0
         
        });
      }
      if (formValue.gradeMale12 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMale12:0
         
        });
      }
      if (formValue.gradeFemale12 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemale12:0
         
        });
      }

      if (formValue.gradeMaleSpecial < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMaleSpecial:0
         
        });
      }
      if (formValue.gradeFemaleSpecial < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemaleSpecial:0
         
        });
      }
      if (formValue.gradeMaleOther < 0) {
        this.learnersPerclassForm.patchValue({
          gradeMaleOther:0
         
        });
      }
      if (formValue.gradeFemaleOther < 0) {
        this.learnersPerclassForm.patchValue({
          gradeFemaleOther:0
         
        });
      }


      if (formValue.preGradeRClasses < 0) {
        this.learnersPerclassForm.patchValue({
          preGradeRClasses:0
         
        });
      }
      if (formValue.gradeRClasses < 0) {
        this.learnersPerclassForm.patchValue({
          gradeRClasses:0
         
        });
      } if (formValue.gradeClasses1 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses1:0
         
        });
      }
      if (formValue.gradeClasses2 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses2:0
         
        });
      } if (formValue.gradeClasses3 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses3:0
         
        });
      }
      if (formValue.gradeClasses4 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses4:0
         
        });
      } if (formValue.gradeClasses5 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses5:0
         
        });
      }
      if (formValue.gradeClasses6 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses6:0
         
        });
      } if (formValue.gradeClasses7 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses7:0
         
        });
      }
      if (formValue.gradeClasses8 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses8:0
         
        });
      } if (formValue.gradeClasses9 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses9:0
         
        });
      }
      if (formValue.gradeClasses10 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses10:0
         
        });
      }
      if (formValue.gradeClasses11 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses11:0
         
        });
      }
      if (formValue.gradeClasses12 < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClasses12:0
         
        });
      }
      if (formValue.gradeClassesSpecial < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClassesSpecial:0
         
        });
      }
      if (formValue.gradeClassesOther < 0) {
        this.learnersPerclassForm.patchValue({
          gradeClassesOther:0
         
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
      

      this.femaleTotal = this.gCalcFemalePreGradeR + this.gCalcFemaleR +this.gCalcFemale2 + this.gCalcFemale1 +  this.gCalcFemale3 + this.gCalcFemale4 + this.gCalcFemale5 + this.gCalcFemale6 + this.gCalcFemale7 + this.gCalcFemale8 + this.gCalcFemale9 + this.gCalcFemale10 +this.gCalcFemale11 +this.gCalcFemale12 + this.gCalcFemaleOther + this.gCalcFemaleSpecial
      this.maleTotal = this.gCalcMalePreGradeR + this.gCalcMaleR + this.gCalcMale1 + this.gCalcMale2 + this.gCalcMale3 + this.gCalcMale4 + this.gCalcMale5 + this.gCalcMale6 + this.gCalcMale7 + this.gCalcMale8 + this.gCalcMale9 + this.gCalcMale10 + this.gCalcMale11 + this.gCalcMale12 + this.gCalcMaleSpecial + this.gCalcMaleOther
      this.totalClasses = formValue.preGradeRClasses + formValue.gradeRClasses + formValue.gradeClasses1 + formValue.gradeClasses2 +formValue.gradeClasses3 + formValue.gradeClasses4 +formValue.gradeClasses5 + formValue.gradeClasses6 + formValue.gradeClasses7 + formValue.gradeClasses8 + formValue.gradeClasses9 + formValue.gradeClasses10 + formValue.gradeClasses11 + formValue.gradeClasses12 + formValue.gradeClassesOther + formValue.gradeClassesSpecial
      this.totalLearners = this.gradeRTotal + this.gradePreGradeRTolal + this.grade1Total + this.grade2Total + this.grade3Total + this.grade4Total + this.grade5Total + this.grade6Total +this.grade7Total + this.grade8Total + this.grade9Total +this.grade10Total + this.grade11Total + this.grade12Total + this.gradeSpecialTotal + this.gradeOtherTotal

      // if (formValue.gradeMale8 !== 0 && formValue.gradeClasses8 == 0) {
      //   this.learnersPerclassForm.get('gradeClasses8').setValidators([Validators.required,numberBelow30]);
      //   this.learnersPerclassForm.setErrors({ 'classes': true });
      // }

      
    })
  }

  closeDialog(){
    this.ref.close()
    
  }

  onSubmit(){
    if (this.learnersPerclassForm.valid) {
    
      this.head.saveSurveyDetails(this.learnersPerclassForm.value).subscribe({
        next:(res) => {
          console.log(res);

          sessionStorage.setItem('learnerPerClassDetails',JSON.stringify(res))
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

      const invalidField = Object.keys(this.learnersPerclassForm.controls).find(controlName =>{
        const control = this.learnersPerclassForm.get(controlName)
        return control.invalid
      })

      let errorMessage = 'There is an error in one of the classes fields'
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
