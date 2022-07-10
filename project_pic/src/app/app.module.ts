import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { CommonCustomModule } from './common/common-custom.module';
import { InterceptorModule } from './core/interceptor/interceptor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InterceptorModule,
    CommonCustomModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
