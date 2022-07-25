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
import { CommentsComponent } from './comments/comments.component';
import { DirectiveModule } from '../directive/directive.module';
import { ModalComponent } from './modal/modal.component';
import { LoadingComponent } from './loading/loading.component';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    CommentsComponent,
    ModalComponent,
    LoadingComponent
  ],
  exports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
    CommentsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
    DirectiveModule,
  ]
})
export class ComponentsCommonModule {
}
