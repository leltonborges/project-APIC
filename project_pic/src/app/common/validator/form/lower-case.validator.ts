import { AbstractControl, ValidatorFn } from '@angular/forms';

export function lowerCaseValidator(regex: RegExp | string) : ValidatorFn {
  return (control : AbstractControl) : { lowercase : true } | null => {
    let value = control.value;
    const lower = value.trim() && new RegExp(regex).test(value);
    return !lower ? { lowercase: true } : null;
  };
}
