import { FilmeService } from './../services/filme.service';
import { Observable } from 'rxjs';
import { Filme } from './../model/filme';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FilmeResolver implements Resolve<Observable<Filme>> {
  constructor(private filmeService: FilmeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Filme> {
    const id = route.params.id;
    return this.filmeService.consultarPorId(id);
  }
}
