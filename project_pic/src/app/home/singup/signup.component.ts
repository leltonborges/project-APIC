import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit, FormInputControl {
  private _formSingup! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private formInputValidator : FormInputValidator
  ) { }

  ngOnInit() : void {
    this._formSingup = this.formBuilder.group({
      fullName: [ '',
        [
          Validators.required,
          Validators.minLength(10)
        ] ],
      userName: [ '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[a-z]./)
        ] ],
      email: [ '',
        [
          Validators.required,
          Validators.email
        ] ],
      password: [ '',
        [
          Validators.required
        ] ]
    });
  }

  get formSingup() : FormGroup {
    return this._formSingup;
  }

  set formSingup(value : FormGroup) {
    this._formSingup = value;
  }

  getInput(nameInput : string) : AbstractControl | null {
    return this.formInputValidator.getInput(this.formSingup, nameInput);
  }

  isError(nameInput : string, nameError : string) : ValidationErrors | undefined | null {
    return this.formInputValidator.isError(this._formSingup, nameInput, nameError);

  }

  isTouched(nameInput : string) : boolean | undefined | null {
    return this.formInputValidator.isTouched(this._formSingup, nameInput);
  }
}
