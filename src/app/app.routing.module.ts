import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';

const routes : Routes = [
  {
    path: 'list',
    component: PhotoListComponent
  },
  {
    path: 'add',
    component: PhotoFormComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
