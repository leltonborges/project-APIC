import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/service/auth/auth.service';
import { Login } from '../../core/interface/user/login';
import { PlatformDetectorService } from '../../core/platform/platform-detector.service';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit, FormInputControl {

  private _userForm! : FormGroup;
  @ViewChild('userName')
  private _elementInput! : ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router,
    private platformService : PlatformDetectorService,
    private formInputValidator : FormInputValidator
  ) { }

  ngOnInit() : void {
    this._userForm = this.formBuilder.group({
      userName: [ '', [
        Validators.required
      ] ],
      password: [ '', [
        Validators.required ] ]
    });
  }

  getInput(nameInput : string) : AbstractControl | null {
    return this.formInputValidator.getInput(this.userForm, nameInput);
  }

  isError(nameInput : string, nameError : string) : ValidationErrors | undefined | null {
    return this.formInputValidator.isError(this._userForm, nameInput, nameError);

  }

  isTouched(nameInput : string) : boolean | undefined | null {
    return this.formInputValidator.isTouched(this._userForm, nameInput);
  }

  login() {
    const login = this._userForm.getRawValue() as Login;
    this.authService.authenticate(login.userName, login.password)
      .subscribe({
        next: user => {
          this.router.navigate([ 'photo', user.body?.name ]);
        },
        error: () => {
          alert('Usuário ou senha invalida');
          this.userForm.reset();
          this.platformService.isPlatformBrowser() && this.elementInput.nativeElement.focus();
          this.userForm.clearAsyncValidators();
          this.userForm.clearValidators();
        }
      });
  }

  get userForm() : FormGroup {
    return this._userForm;
  }

  set userForm(value : FormGroup) {
    this._userForm = value;
  }

  get elementInput() : ElementRef {
    return this._elementInput;
  }

  set elementInput(value : ElementRef) {
    this._elementInput = value;
  }
}
