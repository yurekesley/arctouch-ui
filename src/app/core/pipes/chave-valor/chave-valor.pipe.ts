import { Processamento } from 'mdias-componentes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'chaveValor'})
export class ChaveValorPipe implements PipeTransform {

  transform(chave: string, lista: Processamento[] ): any {
    return this.recuperarValorChave(chave, lista);
  }

  public recuperarValorChave(chave: string, lista: Processamento[]): string {
    let valor = '';
    for (const s of lista) {
            if (s.chave == chave) {
              valor = s.valor;
              break;
            }
    }
    if (valor === '') {
      valor = chave;
    }
    return valor;
  }
}
