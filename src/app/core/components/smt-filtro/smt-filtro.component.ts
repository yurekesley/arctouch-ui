import { MDBI18NService } from 'mdias-componentes';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mdias-filtro',
  templateUrl: './smt-filtro.component.html',
  styleUrls: ['./smt-filtro.component.scss']
})
export class SmtFiltroComponent implements OnInit {

  @Output() pesquisar = new EventEmitter<any>();
  @Output() limpar = new EventEmitter<any>();

  @Input() nomePesquisar: string;
  @Input() nomeLimpar: string;

  @Input() desabilitarPesquisar = false;
  @Input() desabilitarLimpar = false;

  @Input() mostrarPesquisar = true;
  @Input() mostrarLimpar = true;

  @Input() idPesquisar: string;
  @Input() idLimpar: string;

  constructor(private i18n: MDBI18NService) { }

  ngOnInit() {
    if (!this.nomePesquisar) {
      this.nomePesquisar = this.i18n.translate('label.pesquisar');
    }
    if (!this.nomeLimpar) {
      this.nomeLimpar = this.i18n.translate('label.limpar');
    }

    if (!this.idPesquisar) {
      this.idPesquisar = 'BTN_PESQUISAR';
    }

    if (!this.idLimpar) {
      this.idLimpar = 'BTN_LIMPAR';
    }

  }

}
