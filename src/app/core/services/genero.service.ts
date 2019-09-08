import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from './../model/genero';
import { MdbHttpService, MDBHttp, Pageable, LazyEvent } from 'mdias-componentes';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeneroService {
    constructor(private mdbHTTP: MdbHttpService) {
    }


    public consultarPorNome($event: LazyEvent): Observable<Pageable<Genero>> {
        const filtro: Genero = new Genero({ name: $event.texto });

        let params: HttpParams = new HttpParams();
        params = params.append('size', String(10));
        params = params.append('page', String(0));
        params = params.append('sort', 'name,asc');

        return this.consultarPaginado(filtro, params, null);
    }


    public consultarPaginado<T>(entidade: any, parametros: HttpParams, opcoes?: MDBHttp): Observable<Pageable<T>> {
        if (!opcoes) {
            opcoes = new MDBHttp(('generos/consultar/paginado'));
        }
        opcoes.params = parametros;
        const jsonEntidade = JSON.stringify(entidade);
        return this.mdbHTTP.post<Pageable<T>>(opcoes, jsonEntidade);
    }

}
