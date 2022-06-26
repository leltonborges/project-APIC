import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoAllComponent } from './photo-all/photo-all.component';

const routes : Routes = [
  {
    path: 'photo',
    // component: PhotoAllComponent
    children: [
      {
        path: '',
        component: PhotoAllComponent
      },
      {
        path: ':userName',
        component: PhotoListComponent
      }
    ]
  },
  {
    path: '?userName=:aba',
    component: PhotoListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PhotoRoutingModule {
}
