import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerOnlyDirective } from './owner-only/owner-only.directive';
import { ShowLoggedDirective } from './show-logged/show-logged.directive';


@NgModule({
  declarations: [
    OwnerOnlyDirective,
    ShowLoggedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OwnerOnlyDirective,
    ShowLoggedDirective
  ]
})
export class PhotoDirectiveModule {}
