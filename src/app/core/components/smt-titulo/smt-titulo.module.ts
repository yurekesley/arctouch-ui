import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBI18NModule, MDBContainerModule, MDBGridModule } from 'mdias-componentes';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SMTTituloComponent } from './smt-titulo.component';

@NgModule({
  declarations: [
    SMTTituloComponent
  ], exports: [
    SMTTituloComponent
  ],
  imports: [
      CommonModule
    , MDBContainerModule
    , MDBGridModule
    , MatButtonModule
    , MatIconModule
    , MDBI18NModule
  ]
})
export class SMTTituloModule { }
