import { Filme } from './../model/filme';
import { MdbHttpService } from 'mdias-componentes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class FilmeService {
  constructor(private mdbHTTP: MdbHttpService) {
  }

  public consultarPorId(id: number): Observable<Filme> {
      return this.mdbHTTP.consultarPorId('proximos-filmes', id);
  }
}
