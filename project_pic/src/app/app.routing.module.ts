import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';
import { RequireAutenticationGuard } from './core/guard/auth/require-autentication.guard';
import { ModalComponent } from './common/components/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'add',
    component: PhotoFormComponent,
    canActivate: [ RequireAutenticationGuard ]
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
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
