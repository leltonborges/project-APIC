import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCommonModule } from './components/components-common.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [],
  exports: [
    ComponentsCommonModule,
    PipeModule
  ],
  imports: [
    CommonModule,
    ComponentsCommonModule,
    PipeModule
  ]
})
export class CommonCustomModule {
}
