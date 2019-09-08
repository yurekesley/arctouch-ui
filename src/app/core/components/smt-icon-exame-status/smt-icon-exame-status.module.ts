import { MatIconModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtIconExameStatusComponent } from './smt-icon-exame-status.component';

@NgModule({
  declarations: [
    SmtIconExameStatusComponent
  ], exports: [
    SmtIconExameStatusComponent
  ],
  imports: [
      CommonModule
    , MatIconModule
    , MatTooltipModule
  ]
})
export class SmtIconExameStatusModule { }
