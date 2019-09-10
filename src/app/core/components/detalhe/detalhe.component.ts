import { IMAGES_URL_POSTER_TOKEN } from './../../tokens/images-url-resource.token';
import { Filme } from './../../model/filme';
import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  constructor(@Inject(IMAGES_URL_POSTER_TOKEN) protected _url: string
  ) { }

  get url() {

    return `${this._url}\\${this.filme.poster_path}` ;
  }

  @Input()
  public filme: Filme;
    ngOnInit() {
  }

}
