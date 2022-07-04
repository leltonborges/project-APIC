import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';
import { AuthGuard } from './core/guard/auth/auth.guard';

const routes : Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'add',
    component: PhotoFormComponent
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule)
  },
  {
    path: '**',
    loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
