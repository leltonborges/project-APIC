import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';
import { lowerCaseValidator } from '../../common/validator/form/lower-case.validator';
import { UserNotTakenValidatorService } from '../user-not-taken.validator.service';
import { Signup } from '../../core/interface/user/signup';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit, FormInputControl {
  private _formSingup! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private formInputValidator : FormInputValidator,
    private userNotTakenValidator : UserNotTakenValidatorService,
    private homeService : HomeService,
    private router : Router
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
          lowerCaseValidator(/^[a-z].*/)
        ],
        [
          this.userNotTakenValidator.isExistsUser()
        ] ],
      email: [ '',
        [
          Validators.required,
          Validators.email
        ] ],
      password: [ '',
        [
          Validators.required,
          Validators.minLength(8)
        ] ]
    });
  }

  singUp() {
    const newUser = this.formSingup.getRawValue() as Signup;
    this.homeService.signUp(newUser)
      .subscribe({
        next: () => this.router.navigate([ '' ]),
        error: console.log
      });
  }

  get formSingup() : FormGroup {
    return this._formSingup;
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
