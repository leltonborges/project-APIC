import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent
  ],
    exports: [
        ButtonComponent,
        CommonModule,
        IconComponent
    ],
  imports: [
    CommonModule
  ]
})
export class CommonCustomModule {
}
