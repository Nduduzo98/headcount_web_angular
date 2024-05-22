import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const gradeSpecialClass : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMaleSpecial')
    let gradeClasses = control.get('gradeClassesSpecial')

    let gradeFemale =  control.get('gradeFemaleSpecial')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZeroSpecial: true
        };
      }
    return null;
}