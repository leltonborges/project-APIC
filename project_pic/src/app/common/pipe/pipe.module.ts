import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasUserPipe } from './has-user/has-user.pipe';
import { LoggedPipe } from './logged/logged.pipe';



@NgModule({
    declarations: [
        HasUserPipe,
        LoggedPipe
    ],
  exports: [
    HasUserPipe,
    LoggedPipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
