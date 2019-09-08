import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTInputHoraComponent } from './smt-input-hora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { MatFormFieldModule, MatInputModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MDBI18NModule } from 'mdias-componentes';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DataUtil } from '../../util/data.util';

@NgModule({
  declarations: [
    SMTInputHoraComponent
  ], exports: [
    SMTInputHoraComponent
  ],
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule

    , TextMaskModule

    , MatFormFieldModule
    , MatInputModule
    , MDBI18NModule
  ], providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DataUtil.FORMATO_MAT }
  ]
})
export class SMTInputHoraModule { }
