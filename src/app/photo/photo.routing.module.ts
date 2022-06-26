import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes : Routes = [
  {
    path: '',
    component: PhotoListComponent
  },
  {
    path: ':userName',
    component: PhotoListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PhotoRoutingModule {
}
