import { finalize } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { URL_SERVIDOR, MDBLoadService, MDBMensagemServico } from 'mdias-componentes';
import { Observable, from } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SMTInputFileService {

  constructor(
    private loadService: MDBLoadService,
    public mensagemServico: MDBMensagemServico,
    @Inject(URL_SERVIDOR) public urlServidor: string) {
  }

  public enviarArquivo(formData: FormData, endpoint: string): Observable<any> {

    this.loadService.mostrar = true;

    const promise = $.ajax({
      type: 'POST',
      url: this.urlServidor + '/' + endpoint,
      data: formData,
      contentType: false,
      processData: false,
    }).catch((error) => {
      if (error.status && error.status === -1) {
        location.reload();
      }
      if (error.responseJSON && error.responseJSON.message) {
        this.mensagemServico.addErro('', error.responseJSON.message);
      }
      return false;
    });

    return from(promise).pipe(
      finalize(() => {
      this.loadService.mostrar = false;
    }));
  }


  public downloadArquivo(endpoint: string, idArquivo: any): void {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = this.urlServidor + '/' + endpoint + '/download/' + idArquivo;
    link.click();
  }
}
