import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTAcoesPadraoComponent } from './smt-acoes-padrao.component';
import { MDBI18NModule, MDBGridModule } from 'mdias-componentes';

@NgModule({
  declarations: [
    SMTAcoesPadraoComponent
  ],
  exports: [
    SMTAcoesPadraoComponent
  ],
  imports: [
    CommonModule
    , MDBI18NModule
    , MDBGridModule
    , MatButtonModule
  ]
})
export class SMTAcoesPadraoModule { }
