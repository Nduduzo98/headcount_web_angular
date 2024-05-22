import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade11Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale11')
    let gradeClasses = control.get('gradeClasses11')

  
    let gradeFemale =  control.get('gradeFemale11')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero11: true
        };
      }
    return null
}