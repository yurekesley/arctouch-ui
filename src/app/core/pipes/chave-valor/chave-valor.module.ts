import { ChaveValorPipe } from './chave-valor.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChaveValorPipe
  ],
  exports: [
    ChaveValorPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SMTChaveValorModule {}
