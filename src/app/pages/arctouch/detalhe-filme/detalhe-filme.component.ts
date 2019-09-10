import { Filme } from './../../../core/model/filme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-filme',
  templateUrl: './detalhe-filme.component.html',
  styleUrls: ['./detalhe-filme.component.scss']
})
export class DetalheFilmeComponent implements OnInit {

  public filme: Filme;

  constructor(public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.filme = this.activatedRoute.snapshot.data.filme;
  }

}
