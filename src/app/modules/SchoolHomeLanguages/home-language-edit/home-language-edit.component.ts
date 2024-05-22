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
  selector: 'app-home-language-edit',
  templateUrl: './home-language-edit.component.html',
  styleUrls: ['./home-language-edit.component.scss']
})
export class HomeLanguageEditComponent {


  schoolDetails: any;
  surveyDetails:any
  homeLanguageForm:any


  gradeMaleAfrikaans: any
  gradeFemaleAfrikaans: any
  gradeTotalAfrikaans: any
  gradeMaleEnglish: any
  gradeFemaleEnglish: any
  gradeTotalEnglish: any
  gradeMaleIsiNdebele: any
  gradeFemaleIsiNdebele: any
  gradeTotalIsiNdebele: any
  gradeMaleSiSwati: any
  gradeFemaleSiSwati: any
  gradeTotalSiSwati: any
  gradeMaleIsiXhosa: any
  gradeFemaleIsiXhosa: any
  gradeTotalIsiXhosa: any
  gradeMaleIsiZulu: any
  gradeFemaleIsiZulu: any
  gradeTotalIsiZulu: any
  gradeMaleSeSotho: any
  gradeFemaleSeSotho: any
  gradeTotalSeSotho: any
  gradeMaleSePedi: any
  gradeFemaleSePedi: any
  gradeTotalSePedi: any
  gradeMaleSeTswana: any
  gradeFemaleSeTswana: any
  gradeTotalSeTswana: any
  gradeMaleTshiVenda: any
  gradeFemaleTshiVenda: any
  gradeTotalTshiVenda: any
  gradeMaleXiTsonga: any
  gradeFemaleXiTsonga: any
  gradeTotalXiTsonga: any
  gradeMaleSignLanguage: any
  gradeFemaleSignLanguage: any
  gradeTotalSignLanguage: any
  gradeMaleOther: any
  gradeFemaleOther: any
  gradeTotalOther:any

  femalesTotal: any
  malesTotal: any

  grandTotal:any

  constructor(private head:HeadCountServiceService, private formBuilder:FormBuilder,
    private ref:MatDialogRef<HomeLanguageEditComponent>,private toast: NgToastService, private lookup:LookupService, private router:Router,@Inject(MAT_DIALOG_DATA) public dialogData :any) {
   const schoolString = sessionStorage.getItem('schoolDetails')
   this.schoolDetails = schoolString ? JSON.parse(schoolString) :null
      ref.disableClose = true

      const surveyString = sessionStorage.getItem('schoolSurveyDetails')
      this.surveyDetails = surveyString ? JSON.parse(surveyString) : null

  
  }
  ngOnInit(): void {
    
    this.homeLanguageForm = this.formBuilder.group({
      id:[],
      schoolSurveyID: [],
      statusID: 1,
      gradeMaleAfrikaans: [null,[Validators.min(0)]],
      gradeFemaleAfrikaans: [null,[Validators.min(0)]],
      gradeTotalAfrikaans: [null,[Validators.min(0)]],
      gradeMaleEnglish: [null,[Validators.min(0)]],
      gradeFemaleEnglish: [null,[Validators.min(0)]],
      gradeTotalEnglish: [null,[Validators.min(0)]],
      gradeMaleIsiNdebele: [null,[Validators.min(0)]],
      gradeFemaleIsiNdebele: [null,[Validators.min(0)]],
      gradeTotalIsiNdebele: [null,[Validators.min(0)]],
      gradeMaleSiSwati: [null,[Validators.min(0)]],
      gradeFemaleSiSwati: [null,[Validators.min(0)]],
      gradeTotalSiSwati: [null,[Validators.min(0)]],
      gradeMaleIsiXhosa: [null,[Validators.min(0)]],
      gradeFemaleIsiXhosa: [null,[Validators.min(0)]],
      gradeTotalIsiXhosa: [null,[Validators.min(0)]],
      gradeMaleIsiZulu: [null,[Validators.min(0)]],
      gradeFemaleIsiZulu: [null,[Validators.min(0)]],
      gradeTotalIsiZulu: [null,[Validators.min(0)]],
      gradeMaleSeSotho: [null,[Validators.min(0)]],
      gradeFemaleSeSotho: [null,[Validators.min(0)]],
      gradeTotalSeSotho: [null,[Validators.min(0)]],
      gradeMaleSePedi: [null,[Validators.min(0)]],
      gradeFemaleSePedi: [null,[Validators.min(0)]],
      gradeTotalSePedi: [null,[Validators.min(0)]],
      gradeMaleSeTswana: [null,[Validators.min(0)]],
      gradeFemaleSeTswana: [null,[Validators.min(0)]],
      gradeTotalSeTswana: [null,[Validators.min(0)]],
      gradeMaleTshiVenda: [null,[Validators.min(0)]],
      gradeFemaleTshiVenda: [null,[Validators.min(0)]],
      gradeTotalTshiVenda: [null,[Validators.min(0)]],
      gradeMaleXiTsonga: [null,[Validators.min(0)]],
      gradeFemaleXiTsonga: [null,[Validators.min(0)]],
      gradeTotalXiTsonga: [null,[Validators.min(0)]],
      gradeMaleSignLanguage: [null,[Validators.min(0)]],
      gradeFemaleSignLanguage: [null,[Validators.min(0)]],
      gradeTotalSignLanguage: [null,[Validators.min(0)]],
      gradeMaleOther: [null,[Validators.min(0)]],
      gradeFemaleOther: [null,[Validators.min(0)]],
      gradeTotalOther: [null,[Validators.min(0)]],
      femalesTotal: [null,[Validators.min(0)]],
      malesTotal: [null,[Validators.min(0)]],
      grandTotal:[]
    })


this.homeLanguageForm.patchValue(this.dialogData.detailsHomeLanguages)
    this.homeLanguageForm.valueChanges.subscribe((formValue:any) =>{

      if (formValue.gradeMaleAfrikaans < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleAfrikaans:0
         
        });
      }
      if (formValue.gradeFemaleAfrikaans < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleAfrikaans:0
         
        });
      }
      if (formValue.gradeMaleEnglish < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleEnglish:0
         
        });
      }
      if (formValue.gradeFemaleEnglish < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleEnglish:0
         
        });
      } if (formValue.gradeMaleIsiNdebele < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleIsiNdebele:0
         
        });
      }
      if (formValue.gradeFemaleIsiNdebele < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleIsiNdebele:0
         
        });
      } if (formValue.gradeMaleSiSwati < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleSiSwati:0
         
        });
      }
      if (formValue.gradeFemaleSiSwati < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleSiSwati:0
         
        });
      } if (formValue.gradeMaleIsiXhosa < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleIsiXhosa:0
         
        });
      }
      if (formValue.gradeFemaleIsiXhosa < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleIsiXhosa:0
         
        });
      } if (formValue.gradeMaleIsiZulu < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleIsiZulu:0
         
        });
      }
      if (formValue.gradeFemaleIsiZulu < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleIsiZulu:0
         
        });
      } if (formValue.gradeMaleSeSotho < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleSeSotho:0
         
        });
      }
      if (formValue.gradeFemaleSeSotho < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleSeSotho:0
         
        });
      } if (formValue.gradeMaleSePedi < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleSePedi:0
         
        });
      }
      if (formValue.gradeFemaleSePedi < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleSePedi:0
         
        });
      } if (formValue.gradeMaleSeTswana < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleSeTswana:0
         
        });
      }
      if (formValue.gradeFemaleSeTswana < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleSeTswana:0
         
        });
      } if (formValue.gradeMaleTshiVenda < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleTshiVenda:0
         
        });
      }
      if (formValue.gradeFemaleTshiVenda < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleTshiVenda:0
         
        });
      } if (formValue.gradeMaleXiTsonga < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleXiTsonga:0
         
        });
      }
      if (formValue.gradeFemaleXiTsonga < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleXiTsonga:0
         
        });
      }

      if (formValue.gradeMaleSignLanguage < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleSignLanguage:0
         
        });
      }
      if (formValue.gradeFemaleSignLanguage < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleSignLanguage:0
         
        });
      }

      if (formValue.gradeMaleOther < 0) {
        this.homeLanguageForm.patchValue({
          gradeMaleOther:0
         
        });
      }
      if (formValue.gradeFemaleOther < 0) {
        this.homeLanguageForm.patchValue({
          gradeFemaleOther:0
         
        });
      }
      this.gradeTotalAfrikaans = formValue.gradeMaleAfrikaans + formValue.gradeFemaleAfrikaans
      this.gradeTotalEnglish = formValue.gradeMaleEnglish + formValue.gradeFemaleEnglish
      this.gradeTotalIsiNdebele= formValue.gradeMaleIsiNdebele+ formValue.gradeFemaleIsiNdebele
      this.gradeTotalIsiXhosa= formValue.gradeMaleIsiXhosa + formValue.gradeFemaleIsiXhosa
      this.gradeTotalIsiZulu= formValue.gradeMaleIsiZulu+ formValue.gradeFemaleIsiZulu
      this.gradeTotalSePedi= formValue.gradeMaleSePedi+ formValue.gradeFemaleSePedi
      this.gradeTotalSeSotho= formValue.gradeMaleSeSotho+ formValue.gradeFemaleSeSotho
      this.gradeTotalSeTswana= formValue.gradeMaleSeTswana + formValue.gradeFemaleSeTswana
      this.gradeTotalSignLanguage= formValue.gradeMaleSignLanguage + formValue.gradeFemaleSignLanguage
      this.gradeTotalTshiVenda= formValue.gradeMaleTshiVenda+ formValue.gradeFemaleTshiVenda
      this.gradeTotalXiTsonga= formValue.gradeMaleXiTsonga + formValue.gradeFemaleXiTsonga
      this.gradeTotalSiSwati= formValue.gradeMaleSiSwati + formValue.gradeFemaleSiSwati
      this.gradeTotalOther=formValue.gradeMaleOther + formValue.gradeFemaleOther


      this.malesTotal= formValue.gradeMaleAfrikaans + 
        formValue.gradeMaleEnglish + 
        formValue.gradeMaleIsiNdebele+
        formValue.gradeMaleIsiXhosa + 
        formValue.gradeMaleIsiZulu+ 
        formValue.gradeMaleSePedi+ 
        formValue.gradeMaleSeSotho+ 
        formValue.gradeMaleSeTswana + 
        formValue.gradeMaleSignLanguage + 
        formValue.gradeMaleTshiVenda+ 
        formValue.gradeMaleXiTsonga + 
        formValue.gradeMaleSiSwati + 
        formValue.gradeMaleOther 

        this.femalesTotal = formValue.gradeFemaleAfrikaans + 
        formValue.gradeFemaleEnglish + 
        formValue.gradeFemaleIsiNdebele+
        formValue.gradeFemaleIsiXhosa + 
        formValue.gradeFemaleIsiZulu+ 
        formValue.gradeFemaleSePedi+ 
        formValue.gradeFemaleSeSotho+ 
        formValue.gradeFemaleSeTswana + 
        formValue.gradeFemaleSignLanguage + 
        formValue.gradeFemaleTshiVenda+ 
        formValue.gradeFemaleXiTsonga + 
        formValue.gradeFemaleSiSwati + 
        formValue.gradeFemaleOther 
        if (this.dialogData.learnerPerClassDetails.malesTotal !== this.malesTotal ) {
          this.homeLanguageForm.setErrors({ 'invalidMalesTotal': true });
          
        }
        if (this.dialogData.learnerPerClassDetails.femalesTotal !== this.femalesTotal ) {
          this.homeLanguageForm.setErrors({ 'invalidFemaleTotal': true });

        }
        
      
        this.grandTotal =   this.gradeTotalAfrikaans +
        this.gradeTotalEnglish +
        this.gradeTotalIsiNdebele+
        this.gradeTotalIsiXhosa+
        this.gradeTotalIsiZulu+
        this.gradeTotalSePedi+
        this.gradeTotalSeSotho+
        this.gradeTotalSeTswana+
        this.gradeTotalSignLanguage+
        this.gradeTotalTshiVenda+
        this.gradeTotalXiTsonga+
        this.gradeTotalSiSwati+
        this.gradeTotalOther
    })

    
  }

  closeDialog(){
    this.ref.close()
  }

  onSubmit(){
    if (this.homeLanguageForm.valid) {
      console.log(this.homeLanguageForm.value);

      this.head.updateHomeLanguages(this.homeLanguageForm.value).subscribe({
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
      if (this.dialogData.learnerPerClassDetails.malesTotal !== this.malesTotal ) {
        this.toast.error({detail:"Error",summary:"The number of males entered should  equals the total number of males in the school", duration:5000, position: 'topCenter'})
      }

      else if (this.dialogData.learnerPerClassDetails.femalesTotal !== this.femalesTotal ) {
        this.toast.error({detail:"Error",summary:"The number of females entered should equals the total number of females in the school", duration:5000, position: 'topCenter'})

      }
      else{
        this.toast.error({detail:"ERROR",summary:"Please fill in all the fields correctly", duration:5000, position: 'topCenter'})

      }
    }
   
  }
}
