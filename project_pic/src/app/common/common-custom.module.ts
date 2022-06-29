import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class CommonCustomModule {
}
