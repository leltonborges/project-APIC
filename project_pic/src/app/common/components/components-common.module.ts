import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent
  ],
    exports: [
        ButtonComponent,
        CommonModule,
        IconComponent,
        SearchComponent,
        MessageComponent,
        HeaderComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ComponentsCommonModule {
}
