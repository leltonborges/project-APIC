import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoAllComponent } from './photo-all/photo-all.component';
import { PhotoListResolver } from './photo-list/photo-list-resolver.service';
import { PhotoAllResolver } from './photo-all/photo-all-resolver.service';
import { UserGuard } from '../core/guard/user/user.guard';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

const routes: Routes = [
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
  },
  {
    path: ':userName/:idPhoto',
    component: PhotoDetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PhotoRoutingModule {
}
