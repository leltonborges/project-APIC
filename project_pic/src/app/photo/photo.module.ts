import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoRoutingModule } from './photo.routing.module';
import { PhotoAllComponent } from './photo-all/photo-all.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { CommonCustomModule } from '../common/common-custom.module';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { DirectiveModule } from '../common/directive/directive.module';
import { PhotoService } from './photo.service';
import { PhotoListResolver } from './photo-list/photo-list-resolver.service';
import { PhotoAllResolver } from './photo-all/photo-all-resolver.service';
import { ComponentsCommonModule } from '../common/components/components-common.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { OwnerOnlyDirective } from './directive/owner-only.directive';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoAllComponent,
    FilterByDescriptionPipe,
    PhotoCardComponent,
    PhotoDetailsComponent,
    OwnerOnlyDirective
  ],
  exports: [
    PhotoListComponent,
    ReactiveFormsModule
  ],
  imports: [
    PhotoRoutingModule,
    CommonCustomModule,
    DirectiveModule,
    ComponentsCommonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    PhotoService,
    PhotoListResolver,
    PhotoAllResolver
  ]
})
export class PhotoModule {
}
