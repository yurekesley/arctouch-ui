import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DataUtil } from '../../util/data.util';
import { TextMaskModule } from 'angular2-text-mask';
import { MatFormFieldModule, MatInputModule, MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { MDBI18NModule, MDBGridModule } from 'mdias-componentes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTInputDataHoraComponent } from './smt-input-data-hora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SMTInputDataHoraComponent
  ], exports: [
    SMTInputDataHoraComponent
  ],
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule

    , TextMaskModule

    , MatFormFieldModule
    , MatInputModule
    , MatDatepickerModule

    , MDBI18NModule
    , MDBGridModule

  ], providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DataUtil.FORMATO_MAT }
  ]
})
export class SMTInputDataHoraModule { }
