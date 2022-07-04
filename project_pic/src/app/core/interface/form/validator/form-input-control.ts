import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface FormInputControl {
  getInput(nameInput : string) : AbstractControl | null;

  isTouched(nameInput : string) : boolean | undefined | null;

  isError(nameInput : string, nameError : string) : ValidationErrors | undefined | null;
}
