import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SearchComponent
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    SearchComponent ],
  imports: [
    CommonModule
  ]
})
export class ComponentsCommonModule {
}
