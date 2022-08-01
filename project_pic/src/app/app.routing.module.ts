import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';
import { RequireAutenticationGuard } from './core/guard/auth/require-autentication.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Home API'
    }
  },
  {
    path: 'add',
    component: PhotoFormComponent,
    canActivate: [ RequireAutenticationGuard ],
    data: {
      title: 'Update photo API'
    }
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule),
    data: {
      title: 'Photos API'
    }
  },
  {
    path: 'error',
    loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule),
    data: {
      title: 'Not Found API'
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
