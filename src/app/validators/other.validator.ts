import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const gradeOtherClass : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMaleOther')
    let gradeClasses = control.get('gradeClassesOther')

    let gradeFemale =  control.get('gradeFemaleOther')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZeroOther: true
        };
      }
    return null;
}