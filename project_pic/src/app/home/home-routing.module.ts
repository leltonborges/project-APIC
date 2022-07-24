import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signin/sign-in.component';
import { SignupComponent } from './singup/signup.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/guard/auth/auth.guard';

const routes : Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SignInComponent,
        data: {
          title: 'Sign In API'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Sign Up API'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
