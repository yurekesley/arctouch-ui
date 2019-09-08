import { MDBI18NModule } from 'mdias-componentes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTDownloadFileButtonComponent } from './smt-download-file-button.component';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    SMTDownloadFileButtonComponent
  ], exports: [
    SMTDownloadFileButtonComponent
  ],
  imports: [
      CommonModule
    , MatButtonModule
    , MatIconModule
    , MatTooltipModule
    , MDBI18NModule
  ]
})
export class SMTDownloadFileButtonModule { }
