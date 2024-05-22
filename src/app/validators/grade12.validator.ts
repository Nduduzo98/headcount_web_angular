import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade12Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale12')
    let gradeClasses = control.get('gradeClasses12')

    let gradeFemale =  control.get('gradeFemale12')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero12: true
        };
      }
    return null;
}