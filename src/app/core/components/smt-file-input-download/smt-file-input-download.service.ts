import { URL_SERVIDOR } from 'mdias-componentes';
import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SMTFileInputDownloadService {

  constructor(@Inject(URL_SERVIDOR) public urlServidor: string) {

  }

  private downloadRest(endpoint: string, idArquivo: number): void {

    if (idArquivo == null) {
      throw new Error('ID arquivo null');
    }

    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = this.urlServidor + '/' + endpoint + '/download/' + idArquivo;
    link.click();

  }

  private downloadArquivo(file: File): void {
    if (file != null) {
      window.open(window.URL.createObjectURL(file), '_blank');
    }
  }

  public download(param: any) {
    if (param.arquivo instanceof File && (param.arquivo as File).size > 0) {
      this.downloadArquivo(param.arquivo);
    } else {
      this.downloadRest(param.endpoint, param.id);
    }
  }
}
