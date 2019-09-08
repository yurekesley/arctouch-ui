import { URL_SERVIDOR } from 'mdias-componentes';
import { Component, OnInit, Input, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smt-download-file-button',
  templateUrl: './smt-download-file-button.component.html',
  styleUrls: ['./smt-download-file-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SMTDownloadFileButtonComponent implements OnInit {

  constructor(@Inject(URL_SERVIDOR) public urlServidor: string) { }

  @Input()
  public idArquivo: number;

  @Input()
  public disabled = false;

  @Input()
  public endpoint = '';

  ngOnInit() {
  }

  public downloadArquivo(): void {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = this.urlServidor + '/' + this.endpoint + '/download/' + this.idArquivo;
    link.click();
  }

}
