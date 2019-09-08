import { EntidadeGenerica } from 'mdias-componentes';
import { Evento } from './evento.util';
import { AbstractControl } from '@angular/forms';

export abstract class Componente<T extends EntidadeGenerica> {

  public evento: Evento<T>;

  constructor(evento: Evento<T>) {
    this.evento = evento;

    if (this.evento) {
      this.evento.limparEntidade();
      this.evento.limparFiltro();
      this.evento.limparResultadoPesquisa();
    }
  }

  public traduzir(key: any, parametros?: any) {
    return this.evento.rest.mdbI18N.translate(key, parametros );
  }

  public error(control: AbstractControl, error: string = 'required', msgError: string = 'mensagem.campo-obrigatorio', parametros?: any) {
    return control.hasError(error) ? this.evento.rest.mdbI18N.translate(msgError, parametros) : '';
  }
}
