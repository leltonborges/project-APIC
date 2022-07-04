import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoAllComponent } from './photo-all/photo-all.component';
import { PhotoListResolver } from './photo-list/photo-list-resolver.service';
import { PhotoAllResolver } from './photo-all/photo-all-resolver.service';
import { UserGuard } from '../core/guard/user/user.guard';

const routes : Routes = [
  {
    path: 'photo',
    // component: PhotoAllComponent
    children: [
      {
        path: '',
        component: PhotoAllComponent,
        resolve: {
          photosAllResolver: PhotoAllResolver
        }
      },
      {
        path: ':userName',
        component: PhotoListComponent,
        resolve: {
          photosListResolve: PhotoListResolver
        },
        canActivate: [ UserGuard ]
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
