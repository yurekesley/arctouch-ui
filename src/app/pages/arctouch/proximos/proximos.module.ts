import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProximosRoutingModule } from './proximos-routing.module';
import { ProximosComponent } from './proximos.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { MDBContainerModule, MDBGridModule, MDBI18NModule, MDBTabelaModule, MDBAutocompleteModule } from 'mdias-componentes';
import { SMTTituloModule } from 'src/app/core/components/smt-titulo/smt-titulo.module';
import { SMTChaveValorModule } from 'src/app/core/pipes/chave-valor/chave-valor.module';
import { SMTFiltroModule } from 'src/app/core/components/smt-filtro/smt-filtro.module';
import { SMTSubTituloModule } from 'src/app/core/components/smt-sub-titulo/smt-sub-titulo.module';
import { SMTDiretivasModule } from 'src/app/core/directives/diretivas.module';
import { SMTContainerModule } from 'src/app/core/components/smt-container/smt-container.module';

@NgModule({
  declarations: [ProximosComponent],
  imports: [
      CommonModule
    , ReactiveFormsModule
    , FormsModule
    , MatFormFieldModule
    , MatInputModule
    , MatCardModule
    , MatButtonModule
    , MatIconModule
    , MatTableModule
    , MatMenuModule
    , MatIconModule
    , MatSelectModule

    , MDBContainerModule
    , MDBGridModule
    , MDBI18NModule
    , MDBTabelaModule
    , MDBAutocompleteModule

    , SMTTituloModule
    , SMTChaveValorModule
    , SMTContainerModule
    , SMTFiltroModule
    , SMTSubTituloModule
    , SMTDiretivasModule
    , ProximosRoutingModule
  ]
})
export class ProximosModule { }
