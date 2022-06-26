import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsRoutingModule } from './errors.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule {
}
