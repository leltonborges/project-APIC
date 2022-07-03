import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CommonCustomModule } from './common/common-custom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotoModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    CommonCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
