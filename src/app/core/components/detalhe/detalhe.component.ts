import { IMAGES_URL_POSTER_TOKEN } from './../../tokens/images-url-resource.token';
import { Filme } from './../../model/filme';
import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  @Output() public voltar: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(IMAGES_URL_POSTER_TOKEN) protected _url: string
  ) { }

  get url() {

    return `${this._url}\\${this.filme.poster_path}` ;
  }

  get avatar() {
    return `${this._url}\\${this.filme.backdrop_path}` ;
  }

  @Input()
  public filme: Filme;
    ngOnInit() {
  }

  public acaoVoltar(event) {
    this.voltar.emit(event);
  }

}
