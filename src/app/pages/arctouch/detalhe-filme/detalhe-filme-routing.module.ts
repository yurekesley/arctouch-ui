import { FilmeResolver } from './../../../core/resolvers/filme.resolver';
import { DetalheFilmeComponent } from './detalhe-filme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':id', component: DetalheFilmeComponent
    , resolve: {
      filme: FilmeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalheFilmeRoutingModule { }
