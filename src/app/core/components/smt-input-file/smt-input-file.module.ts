import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTInputFileComponent } from './smt-input-file.component';
import { MDBI18NModule } from 'mdias-componentes';
import { MatButtonModule, MatIconModule, MatTooltipModule} from '@angular/material';


@NgModule({
  declarations: [
    SMTInputFileComponent
  ], exports: [
    SMTInputFileComponent
  ],
  imports: [
    CommonModule
    , MatButtonModule
    , MatTooltipModule
    , MatIconModule
    , MDBI18NModule
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SMTInputFileModule { }
