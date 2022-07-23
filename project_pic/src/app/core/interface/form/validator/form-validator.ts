import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export interface FormValidator {
  getInput(formgroup : FormGroup, nameInput : string) : AbstractControl | null;

  isTouched(formgroup : FormGroup, nameInput : string) : boolean | undefined | null;

  isError(formgroup : FormGroup, nameInput : string, nameError : string) : ValidationErrors | undefined | null;
}
