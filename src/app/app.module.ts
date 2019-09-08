import { SMTHttpInterceptor } from './core/util/smt-interceptor.service';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { DataUtil } from 'src/app/core/util/data.util';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrap } from 'mdias-componentes';

import { SMTErrorHandlerModule } from './core/util/smt-error-handler/smt-error-handler.module';
import { environment as env } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , MDBBootstrap.forRoot(env)
    , SMTErrorHandlerModule.forRoot(env)
  ],
  bootstrap: [AppComponent]
  , schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SMTHttpInterceptor,
      multi: true,
    },

    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DataUtil.FORMATO_MAT }
  ]
})
export class AppModule { }


