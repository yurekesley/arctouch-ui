import { MDBI18NService } from 'mdias-componentes';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smt-acoes-padrao',
  templateUrl: './smt-acoes-padrao.component.html',
  styleUrls: ['./smt-acoes-padrao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SMTAcoesPadraoComponent implements OnInit {

  @Input() mostrarLimpar = true;
  @Input() mostrarCancelar = true;
  @Input() mostrarSalvar = true;

  @Input() idLimpar = 'BTN_LIMPAR';
  @Input() idCancelar = 'BTN_CANCELAR';
  @Input() idSalvar = 'BTN_SALVAR';

  @Input() textoLimpar = '';
  @Input() textoCancelar = '';
  @Input() textoSalvar = '';


  @Output() public limpar: EventEmitter<any> = new EventEmitter();

  @Output() public cancelar: EventEmitter<any> = new EventEmitter();

  @Output() public salvar: EventEmitter<any> = new EventEmitter();

  constructor(private i18n: MDBI18NService) { }

  ngOnInit() {
    if (!this.textoLimpar) {
      this.textoLimpar = this.i18n.translate('label.limpar');
    }
    if (!this.textoCancelar) {
      this.textoCancelar = this.i18n.translate('label.cancelar');
    }
    if (!this.textoSalvar) {
      this.textoSalvar = this.i18n.translate('label.salvar');
    }
  }

  public acaoLimpar(event) {
    this.limpar.emit(event);
  }

  public acaoCancelar(event) {
    this.cancelar.emit(event);
  }

  public acaoSalvar(event) {
    this.salvar.emit(event);
  }

}
