import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const preGradeRClass : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('preGradeRMale')
    let gradeClasses = control.get('preGradeRClasses')

    let gradeFemale =  control.get('preGradeRFemale')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZeroPreR: true
        };
      }
    return null;
  
}