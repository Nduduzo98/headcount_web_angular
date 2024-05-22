import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade6Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale6')
    let gradeClasses = control.get('gradeClasses6')

  
    let gradeFemale =  control.get('gradeFemale6')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero6: true
        };
      }
    return null
}