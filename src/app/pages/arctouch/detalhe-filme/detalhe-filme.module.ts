import { DetalheModule } from './../../../core/components/detalhe/detalhe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheFilmeRoutingModule } from './detalhe-filme-routing.module';
import { DetalheFilmeComponent } from './detalhe-filme.component';

@NgModule({
  declarations: [
    DetalheFilmeComponent
  ],
  imports: [
    CommonModule
    , DetalheModule
    , DetalheFilmeRoutingModule
  ]
})
export class DetalheFilmeModule { }
