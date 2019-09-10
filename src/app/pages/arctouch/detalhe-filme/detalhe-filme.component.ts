import { Filme } from './../../../core/model/filme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotas } from 'src/app/core/model/enum/rotas.enum';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.scss']
})
export class DetalheFilmeComponent implements OnInit {

  public filme: Filme;

  constructor(public activatedRoute: ActivatedRoute, public router: Router  ) { }

  ngOnInit() {
    this.filme = this.activatedRoute.snapshot.data.filme;
  }

  voltar() {
    this.router.navigate([Rotas.FILMES_PROXIMOS]);
  }

}
