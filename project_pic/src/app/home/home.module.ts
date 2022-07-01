import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/sign-in.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
