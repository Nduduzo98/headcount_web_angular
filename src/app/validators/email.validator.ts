import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export  const emailMatch : ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{

    let schoolEmailAddress = control.get('schoolEmailAddress')?.value?.toLowerCase();
    let schoolAlternativeEmailAddress = control.get('schoolAlternativeEmailAddress')?.value?.toLowerCase();


    if (schoolEmailAddress == schoolAlternativeEmailAddress ) {
        return {
            emailMatchError: true
        }
    }
    return null;
}