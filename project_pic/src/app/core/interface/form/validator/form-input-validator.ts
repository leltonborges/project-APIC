import { FormValidator } from './form-validator';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormInputValidator implements FormValidator {
  isError(formgroup : FormGroup, nameInput : string, nameError : string) : ValidationErrors | undefined | null {
    return this.getInput(formgroup, nameInput)?.errors?.[nameError];
  }

  isTouched(formgroup : FormGroup, nameInput : string) : boolean | undefined | null {
    return this.getInput(formgroup, nameInput)?.touched;
  }

  getInput(formgroup : FormGroup, nameInput : string) : AbstractControl | null {
    return formgroup.get(nameInput);
  }
}
