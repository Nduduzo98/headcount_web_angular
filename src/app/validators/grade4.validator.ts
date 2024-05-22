import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade4Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale4')
    let gradeClasses = control.get('gradeClasses4')

    
    let gradeFemale =  control.get('gradeFemale4')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero4: true
        };
      }
    return null;
}