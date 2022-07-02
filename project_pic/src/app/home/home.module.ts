import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/sign-in.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsCommonModule } from '../common/components/components-common.module';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ComponentsCommonModule
  ]
})
export class HomeModule { }
