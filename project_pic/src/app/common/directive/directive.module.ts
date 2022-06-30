import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkerOnHoverDirective } from './darker-on-hover/darker-on-hover.directive';



@NgModule({
  declarations: [
    DarkerOnHoverDirective
  ],
  exports: [
    DarkerOnHoverDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
