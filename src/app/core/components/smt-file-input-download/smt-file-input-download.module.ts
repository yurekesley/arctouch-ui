import { MDBI18NModule } from 'mdias-componentes';
import { MatButtonToggleModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTFileInputDownloadComponent } from './smt-file-input-download.component';

@NgModule({
  declarations: [
    SMTFileInputDownloadComponent
  ], exports: [
    SMTFileInputDownloadComponent
  ],
  imports: [
    CommonModule
    , MatButtonToggleModule
    , MatButtonModule
    , MatIconModule
    , MatTooltipModule
    , MDBI18NModule
  ]
})
export class SMTFileInputDownloadModule { }
