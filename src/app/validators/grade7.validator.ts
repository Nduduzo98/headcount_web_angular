import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade7Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale7')
    let gradeClasses = control.get('gradeClasses7')

   
    let gradeFemale =  control.get('gradeFemale7')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero7: true
        };
      }
    return null
}