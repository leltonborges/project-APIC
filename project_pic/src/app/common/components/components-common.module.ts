import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SearchComponent } from './search/search.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipe/pipe.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent
  ],
    exports: [
        ButtonComponent,
        CommonModule,
        IconComponent,
        SearchComponent,
        MessageComponent,
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule
  ]
})
export class ComponentsCommonModule {
}
