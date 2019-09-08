import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smt-mdb-titulo',
  templateUrl: './smt-titulo.component.html',
  styleUrls: ['./smt-titulo.component.scss']
})
export class SMTTituloComponent implements OnInit {

  @Input() public icone = '';
  @Input() public mostrarIcone = false;
  @Input() public mostrarBotao = false;
  @Input() public textoBotao = '';
  @Input() public textoTitulo = '';
  @Input() public idBotao = '';
  @Output() public botao: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.idBotao) {
      this.idBotao = 'BTN_NOVO';
    }
  }

  public acaoBotao(event) {
    this.botao.emit(event);
  }

}
