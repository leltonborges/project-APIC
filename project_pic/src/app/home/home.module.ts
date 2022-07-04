import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/sign-in.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsCommonModule } from '../common/components/components-common.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignupComponent } from './singup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ComponentsCommonModule,
    RouterModule
  ]
})
export class HomeModule { }
