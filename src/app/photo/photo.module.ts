import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';


@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    exports: [
        PhotoComponent
    ],
    imports: [
      CommonModule,

    ]
})
export class PhotoModule { }
