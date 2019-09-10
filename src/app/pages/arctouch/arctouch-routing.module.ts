import { Rotas } from './../../core/model/enum/rotas.enum';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: Rotas.FILMES_PROXIMOS
    , loadChildren: './proximos/proximos.module#ProximosModule'
  },
  {
    path: Rotas.FILMES_DETALHE
    , loadChildren: './detalhe-filme/detalhe-filme.module#DetalheFilmeModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArctouchRoutingModule { }
