import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonCustomModule } from './common/common-custom.module';
import { PhotoService } from './photo/photo.service';
import { InterceptorModule } from './core/interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonCustomModule,
    ReactiveFormsModule,
    InterceptorModule
  ],
  providers: [
    PhotoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
