import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade5Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale5')
    let gradeClasses = control.get('gradeClasses5')

 
    let gradeFemale =  control.get('gradeFemale5')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero5: true
        };
      }
    return null
}