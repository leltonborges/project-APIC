import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasUserPipe } from './has-user/has-user.pipe';



@NgModule({
    declarations: [
        HasUserPipe
    ],
    exports: [
        HasUserPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipeModule { }
