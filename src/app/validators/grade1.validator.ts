import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade1Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale1')
    let gradeClasses = control.get('gradeClasses1')


    let gradeFemale =  control.get('gradeFemale1')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero1: true
        };
      }
    return null
}