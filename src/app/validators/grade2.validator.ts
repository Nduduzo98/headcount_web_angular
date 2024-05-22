import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade2Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale2')
    let gradeClasses = control.get('gradeClasses2')


    let gradeFemale =  control.get('gradeFemale2')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero2: true
        };
      }
    return null
}