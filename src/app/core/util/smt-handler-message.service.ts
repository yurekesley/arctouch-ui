import { IS_PRODUCTION_INJECTOR_TOKEN } from './smt-error-handler/smt-is-production-injector.token';
import { HttpErrorResponse } from '@angular/common/http';
import { MDBMensagemServico, MDBI18NService, JsonResult, MDBObjectUtil, MDBStatusCode } from 'mdias-componentes';
import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SMTHandlerMassageService {

  constructor(
    private mensagem: MDBMensagemServico,
    @Inject(IS_PRODUCTION_INJECTOR_TOKEN) public isProduction: boolean,
    private traducao: MDBI18NService) { }

  public mostrarMensagem(keyMensagem: string, keyTitulo?: string, tempoMilisegundos: number = 4000): void {
    const titulo = keyTitulo ? this.traducao.translate(keyTitulo) : '';
    const mensagem = this.traducao.translate(keyMensagem);
    this.mensagem.limparMensagem();
    if (this.mensagem.getMensagens().length == 0) {
      this.mensagem.addErro(titulo, mensagem, tempoMilisegundos);
      setTimeout(() => {
        this.mensagem.limparMensagem();
      }, tempoMilisegundos);
    }
  }

  getMessage(keyMensagem: string, keyTitulo?: string) {
    const titulo = keyTitulo ? this.traducao.translate(keyTitulo) : '';
    const mensagem = this.traducao.translate(keyMensagem);
    return mensagem;
  }

  public handleErrorMassegeAlert(error: HttpErrorResponse) {
    const hasStatusHttp: boolean = error instanceof HttpErrorResponse;
    if (hasStatusHttp) {
      const status = MDBObjectUtil.buscarValor(error, 'status');
      switch (status) {
        case 0:
          this.mostrarMensagem('error.conexaoRecusada.mensagem');
          break;
        case MDBStatusCode.FORBIDDEN:
          this.mostrarMensagem('error.acessoNegado.mensagem', 'error.acessoNegado.titulo');
          break;
        case MDBStatusCode.NOT_FOUND:
          this.mostrarMensagem('error.urlNaoEncontrada.mensagem');
          break;
        case MDBStatusCode.INTERNAL_SERVER_ERROR:
          this.mostrarMensagem('error.erroInterno.mensagem');
          break;
        case MDBStatusCode.FOUND:
          this.mostrarMensagem('error.redirecionamento.mensagem', 'error.redirecionamento.titulo');
          break;
        case MDBStatusCode.BAD_REQUEST:
          this.mostrarMensagem(this.mensagemError(error));
          break;
      }
    }

    this.logarError(error);

  }

  public handleErrorMassege(error: HttpErrorResponse): string {
    const hasStatusHttp: boolean = error instanceof HttpErrorResponse;
    let massage = '';
    if (hasStatusHttp) {
      const status = MDBObjectUtil.buscarValor(error, 'status');
      switch (status) {
        case 0:
          massage = this.getMessage('error.conexaoRecusada.mensagem');
          break;
        case MDBStatusCode.FORBIDDEN:
          massage = this.getMessage('error.acessoNegado.mensagem', 'error.acessoNegado.titulo');
          break;
        case MDBStatusCode.NOT_FOUND:
          massage = this.getMessage('error.urlNaoEncontrada.mensagem');
          break;
        case MDBStatusCode.INTERNAL_SERVER_ERROR:
          massage = this.getMessage('error.erroInterno.mensagem', 'error.erroInterno.titulo');
          break;
        case MDBStatusCode.BAD_REQUEST:
          massage = this.getMessage(this.mensagemError(error));
          break;
      }
    }

    this.logarError(error);

    return massage;
  }


  public mensagemError(error: any): string {

    let corpo = '';
    if (JsonResult.is(error)) {
      corpo = error.message;
    } else if (JsonResult.is(error.error)) {
      corpo = error.error.message;
    } else {
      corpo = error.mensagem ? error.mensagem : error.message;
    }
    return corpo ? corpo : this.traducao.translate('error.erroNaoEsperado.mensagem');
  }


  private logarError(error) {
    if (!this.isProduction) {
      console.log(error);
    }
  }

}
