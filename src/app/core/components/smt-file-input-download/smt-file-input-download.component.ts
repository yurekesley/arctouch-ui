import { FormGroup } from '@angular/forms';
import { MDBI18NService, MDBMensagemServico, URL_SERVIDOR } from 'mdias-componentes';
import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smt-file-input-download',
  templateUrl: './smt-file-input-download.component.html',
  styleUrls: ['./smt-file-input-download.component.scss']
})
export class SMTFileInputDownloadComponent implements OnInit {

  constructor(
    public mdbI18N: MDBI18NService
    , public mensagemServico: MDBMensagemServico
    , @Inject(URL_SERVIDOR) public urlServidor: string
  ) {

  }

  @Input()
  public nome = '';

  @Input()
  public id = '';

  @Input()
  public formulario: FormGroup;

  @Input()
  public accept = '';

  @Input()
  public regex: string;

  @Input()
  public idArquivo: number;

  @Input()
  public disabled = false;

  @Input()
  public endpoint = '';

  @Output() public download: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  public triggerFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  public onFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      const file: File = event.target.files[0];
      this.carregarArquivo(file);
    }
  }

  public carregarArquivo(arquivo: File) {
    if (this.validarArquivo(arquivo)) {
      this.formulario.get('arquivo').setValue(arquivo);
    }
  }

  private validarTipoDeArquivo(arquivo: File): boolean {
    return !(!new RegExp(this.regex, 'g').test(arquivo.name));
  }

  private validarArquivo(arquivo: File): boolean {

    if (!this.validarTipoDeArquivo(arquivo)) {
      const msg = this.mdbI18N.translate('error.formatoInvalido');
      this.mensagemServico.addErro(msg, this.mdbI18N.translate('error.tipoArquivoNaoPermitido'));
      return false;
    }

    if (!this.validarTamanhoArquivo(arquivo)) {
      const msg = this.mdbI18N.translate('error.tamanhoArquivo');
      this.mensagemServico.addErro(msg, this.mdbI18N.translate('error.tamanhoArquivoInvalido'));
      return false;
    }

    return true;

  }


  private validarTamanhoArquivo(arquivo: File): boolean {
    // TODO
    // ralizar validacao do tamanho do arquivo em mb
    return true;
  }


  public downloadArquivo(): void {
      this.download.emit({});
  }

}

