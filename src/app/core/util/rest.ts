import { SMTInputFileService } from '../components/smt-input-file/smt-input-file.service';
import { MDBMensagemServico, MdbHttpService, MDBI18NService, MDBModalConfirmacaoService, MDBLoadService } from 'mdias-componentes';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class Rest {

  constructor(
      public mdbHTTP: MdbHttpService
    , public mensagemServico: MDBMensagemServico
    , public mdbI18N: MDBI18NService
    , public router: Router
    , public confirmacaoService: MDBModalConfirmacaoService
    , public loadService: MDBLoadService
    , public inputFileService: SMTInputFileService
  ) {}
}
