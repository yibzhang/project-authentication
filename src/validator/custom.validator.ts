import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': control.value} : null;
  };
}

export function confirmPasswordValidator(originalControlName: string, confirmControlName: string){
  return (formGroup: FormGroup) => {
    const originalControl = formGroup.controls[originalControlName];
    const confirmControl  = formGroup.controls[confirmControlName];
  
    if(originalControl.value != confirmControl.value){
      confirmControl.setErrors({'confirmPassword': 'does\'t match'});
    }else{
      confirmControl.setErrors(null);
    }
  }
}