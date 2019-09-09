import { Genero } from './../../../core/model/genero';
import { GeneroService } from './../../../core/services/genero.service';
import { Rest } from './../../../core/util/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filme } from './../../../core/model/filme';
import { Evento } from 'src/app/core/util/evento.util';
import { LazyEvent, MDBObjectUtil } from 'mdias-componentes';
export class FilmeEvento extends Evento<Filme> {

    proximosFilmes: Filme[];
    generos: Genero[];

    constructor(formBuilder: FormBuilder, rest: Rest, private generoService: GeneroService) {
        super(formBuilder, rest);
    }

    consultarGeneros(evento: LazyEvent) {

        if (typeof evento.texto != 'string') {
            return;
        }

        this.generoService.consultarPorNome(evento).subscribe((generos) => {
            this.generos = generos.content;
        });
    }

    public montarFiltro(): Filme {
        const filme: Filme = new Filme();
        filme.title = MDBObjectUtil.buscarValor(this.formularioPesquisa.value, 'title');
        filme.generes = [];
        const genere = MDBObjectUtil.buscarValor(this.formularioPesquisa.value, 'genero');
        if (genere) {
            filme.generes.push(genere);
        }
        return filme;
    }

    public getFormularioPesquisa(): FormGroup {
        return this.formBuilder.group({
            genero: [null],
            title: [null]
        });
    }

    public endpoint(): string {
        return 'proximos-filmes';
    }



}
