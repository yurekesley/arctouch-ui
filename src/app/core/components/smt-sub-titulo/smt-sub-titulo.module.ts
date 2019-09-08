import { MDBGridModule, MDBContainerModule } from 'mdias-componentes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtSubTituloComponent } from './smt-sub-titulo.component';

@NgModule({
  declarations: [
    SmtSubTituloComponent
  ],
  exports: [
    SmtSubTituloComponent
  ],
  imports: [
      CommonModule
    , MDBContainerModule
  ]
})
export class SMTSubTituloModule { }
