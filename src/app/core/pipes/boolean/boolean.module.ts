import { BooleanPipe } from './boolean.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BooleanPipe],
  exports: [BooleanPipe],
  imports: [
    CommonModule
  ]
})
export class SMTBooleanModule { }
