import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade10Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale10')
    let gradeClasses = control.get('gradeClasses10')

   
    let gradeFemale =  control.get('gradeFemale10')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero10: true
        };
      }
    return null
}