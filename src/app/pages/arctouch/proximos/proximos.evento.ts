import { Rest } from './../../../core/util/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filme } from './../../../core/model/filme';
import { Evento } from 'src/app/core/util/evento.util';
export class FilmeEvento extends Evento<Filme> {

    proximosFilmes: Filme[];

    constructor(formBuilder: FormBuilder, rest: Rest) {
        super(formBuilder, rest);
    }

    pesquisarProximosFilmes(e) {
        console.log(e);
    }

    public getFormularioPesquisa(): FormGroup {
        return this.formBuilder.group({
          descricao: [null]
        });
      }

    public endpoint(): string {
        return 'upcoming';
    }



}
