import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade9Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale9')
    let gradeClasses = control.get('gradeClasses9')

  
    let gradeFemale =  control.get('gradeFemale9')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero9: true
        };
      }
    return null
}