import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheFilmeRoutingModule } from './detalhe-filme-routing.module';
import { DetalheFilmeComponent } from './detalhe-filme.component';

@NgModule({
  declarations: [DetalheFilmeComponent],
  imports: [
    CommonModule,
    DetalheFilmeRoutingModule
  ]
})
export class DetalheFilmeModule { }
