import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { RouterModule } from '@angular/router';
import { PhotoRoutingModule } from './photo.routing.module';
import { PhotoAllComponent } from './photo-all/photo-all.component';
import { FormsModule } from '@angular/forms';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { CommonCustomModule } from '../common/common-custom.module';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoAllComponent,
    FilterByDescriptionPipe
  ],
  exports: [
    PhotoListComponent,
    RouterModule
  ],
  imports: [
    PhotoRoutingModule,
    FormsModule,
    CommonCustomModule
  ]
})
export class PhotoModule { }
