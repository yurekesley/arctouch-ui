import { MatButtonModule } from '@angular/material/button';
import { DetalheComponent } from './detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DetalheComponent],
  exports: [DetalheComponent],
  imports: [
    CommonModule
    , MatCardModule
    , MatButtonModule

  ]
})
export class DetalheModule { }
