import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { Login } from '../../core/interface/user/login';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit {

  private _userForm! : FormGroup;
  @ViewChild('userName')
  private _elementInput! : ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router,
    private platformService : PlatformDetectorService
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

  isError(nameInput : string, nameError : string) : ValidationErrors | null | undefined {
    return this._userForm.get(nameInput)?.errors?.[nameError];
  }

  isTouched(nameInput : string) : Boolean | undefined {
    return this._userForm.get(nameInput)?.touched;
  }

  login() {
    const login = this._userForm.getRawValue() as Login;
    this.authService.authenticate(login.userName, login.password)
      .subscribe({
        next: user => {
          this.router.navigate([ 'photo', user.name ]);
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
