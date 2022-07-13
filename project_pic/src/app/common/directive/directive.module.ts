import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkerOnHoverDirective } from './darker-on-hover/darker-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click/immediate-click.directive';



@NgModule({
  declarations: [
    DarkerOnHoverDirective,
    ImmediateClickDirective
  ],
    exports: [
        DarkerOnHoverDirective,
        ImmediateClickDirective
    ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
