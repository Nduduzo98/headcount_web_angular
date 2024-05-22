import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const gradeRClass : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let gradeMale = control.get('gradeRMale')
    let gradeClasses = control.get('gradeRClasses')
    let gradeFemale =  control.get('gradeRFemale')

    if ((gradeMale?.value !== 0 && gradeClasses?.value === 0) || (gradeFemale?.value !== 0 && gradeClasses?.value === 0)) {
        return {
          classesZeroR: true
        };
      }
    return null;
}