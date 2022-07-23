import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkerOnHoverDirective } from './darker-on-hover/darker-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click/immediate-click.directive';
import { BoxHoverDirective } from './box-hover/box-hover.directive';



@NgModule({
  declarations: [
    DarkerOnHoverDirective,
    ImmediateClickDirective,
    BoxHoverDirective
  ],
    exports: [
        DarkerOnHoverDirective,
        ImmediateClickDirective,
        BoxHoverDirective
    ],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
