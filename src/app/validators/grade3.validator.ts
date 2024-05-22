import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const grade3Class : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeMale3')
    let gradeClasses = control.get('gradeClasses3')

  
    let gradeFemale =  control.get('gradeFemale3')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZero3: true
        };
      }
    return null
}