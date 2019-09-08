import { ArctouchRoutingModule } from './pages/arctouch/arctouch-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rotas } from './core/model/enum/rotas.enum';

const routes: Routes = [
  {
    path: Rotas.INICIO
    , loadChildren: './pages/inicio/inicio.module#InicioModule'
  },
];

@NgModule({
  imports: [
    ArctouchRoutingModule
    , RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
