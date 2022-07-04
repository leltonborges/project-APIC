import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signin/sign-in.component';
import { SingupComponent } from './singup/singup.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'signup',
        component: SingupComponent
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
