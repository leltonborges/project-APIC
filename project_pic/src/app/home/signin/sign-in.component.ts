import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth/auth.service';
import { Login } from '../../core/interface/user/login';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit {

  userForm! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() : void {
    this.userForm = this.formBuilder.group({
      userName: [ '', [
        Validators.required
      ] ],
      password: [ '', [
        Validators.required ] ]
    });
  }

  isError(nameInput : string, nameError: string) : ValidationErrors | null | undefined {
    return this.userForm.get(nameInput)?.errors?.[nameError];
  }

  isTouched(nameInput: string): Boolean | undefined{
    return this.userForm.get(nameInput)?.touched;
  }

  login(){
    const login = this.userForm.getRawValue() as Login;
    this.authService.authenticate(login.userName, login.password)
      .subscribe({
        next: console.log,
        error: console.error
      })
  }
}
