import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {
  MDBLoadService } from 'mdias-componentes';
import { SMTHandlerMassageService } from '../smt-handler-message.service';

@Injectable({ providedIn: 'root' })
export class SMTErrorHandler implements ErrorHandler {

  constructor(
    private loadService: MDBLoadService,
    private handlerMassage: SMTHandlerMassageService
  ) { }

  public handleError(error: HttpErrorResponse) {
    this.handlerMassage.handleErrorMassegeAlert(error);
    this.loadService.mostrar = false;
  }
}
