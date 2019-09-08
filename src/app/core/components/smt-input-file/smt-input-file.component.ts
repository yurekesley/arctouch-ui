import { MDBI18NService, MDBMensagemServico } from 'mdias-componentes';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smt-input-file',
  templateUrl: './smt-input-file.component.html',
  styleUrls: ['./smt-input-file.component.scss']
})
export class SMTInputFileComponent implements OnInit {

  constructor(
    public mdbI18N: MDBI18NService
    , public mensagemServico: MDBMensagemServico
  ) {

  }

  @Input()
  public nome = '';

  @Input()
  public formulario: FormGroup;

  @Input()
  public accept = '';

  @Input()
  public regex: string;

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
    if (this.validarTipoDeArquivo(arquivo)) {
      this.formulario.get('arquivo').setValue(arquivo);
    } else {
      const msg = this.mdbI18N.translate('error.formatoInvalido');
      this.mensagemServico.addErro(msg, this.mdbI18N.translate('error.tipoArquivoNaoPermitido'));
    }
  }

  private validarTipoDeArquivo(arquivo: File): boolean {
    return !(!new RegExp(this.regex, 'g').test(arquivo.name));
  }
}
