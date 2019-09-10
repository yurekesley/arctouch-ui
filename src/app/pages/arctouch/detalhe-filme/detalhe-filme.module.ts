import { MDBContainerModule, MDBGridModule, MDBI18NModule } from 'mdias-componentes';
import { DetalheModule } from './../../../core/components/detalhe/detalhe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheFilmeRoutingModule } from './detalhe-filme-routing.module';
import { DetalheFilmeComponent } from './detalhe-filme.component';
import { SMTTituloModule } from 'src/app/core/components/smt-titulo/smt-titulo.module';
import { SMTChaveValorModule } from 'src/app/core/pipes/chave-valor/chave-valor.module';
import { SMTContainerModule } from 'src/app/core/components/smt-container/smt-container.module';

@NgModule({
  declarations: [
    DetalheFilmeComponent
  ],
  imports: [
    CommonModule
    , DetalheModule
    , MDBContainerModule
    , MDBI18NModule
    , MDBGridModule
    , SMTTituloModule
    , SMTChaveValorModule
    , SMTContainerModule
    , DetalheFilmeRoutingModule
  ]
})
export class DetalheFilmeModule { }
