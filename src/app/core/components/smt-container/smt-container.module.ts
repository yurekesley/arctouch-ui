import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTContainerComponent } from './smt-container.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MDBI18NModule, MDBGridModule } from 'mdias-componentes';

@NgModule({
  declarations: [
    SMTContainerComponent
  ], exports: [
    SMTContainerComponent
  ],
  imports: [
    CommonModule
    , MatButtonModule
    , MatCardModule
    , MDBI18NModule
    , MDBGridModule
  ]
})
export class SMTContainerModule { }
