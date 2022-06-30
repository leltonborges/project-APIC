import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCommonModule } from './components/components-common.module';

@NgModule({
  declarations: [],
  exports: [
    ComponentsCommonModule
  ],
  imports: [
    CommonModule,
    ComponentsCommonModule
  ]
})
export class CommonCustomModule {
}
