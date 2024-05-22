import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade8Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale8')
    let gradeClasses = control.get('gradeClasses8')

  
    let gradeFemale =  control.get('gradeFemale8')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero8: true
        };
      }
    return null
}