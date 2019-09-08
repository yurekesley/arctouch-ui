import { MatButtonModule, MatCardModule } from '@angular/material';
import { MDBI18NModule, MDBGridModule } from 'mdias-componentes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtFiltroComponent } from './smt-filtro.component';

@NgModule({
  declarations: [
    SmtFiltroComponent
  ],
  exports: [
    SmtFiltroComponent
  ],
  imports: [
      CommonModule
    , MatButtonModule
    , MatCardModule
    , MDBI18NModule
    , MDBGridModule

  ]
})
export class SMTFiltroModule { }
