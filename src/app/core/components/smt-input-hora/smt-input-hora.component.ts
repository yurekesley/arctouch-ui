import { MDBI18NService } from 'mdias-componentes';
import { AbstractControl, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smt-input-hora',
  templateUrl: './smt-input-hora.component.html',
  styleUrls: ['./smt-input-hora.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SMTInputHoraComponent),
      multi: true
    }
  ],
})
export class SMTInputHoraComponent implements OnInit {

  constructor(
    private mdbI18N: MDBI18NService) {
  }

  public mask = [/\d/, /\d/, ':', /\d/, /\d/];

  @Input()
  public id = '';

  @Input()
  public obrigatorio = false;

  @Input()
  public placeholder = 'Hora:';

  public _control: AbstractControl = new FormControl();

  @Input() set control(abstractControl: AbstractControl) {
    this._control = abstractControl;
  }

  get control() {
    return this._control;
  }

  public ngOnInit() {

  }

  public error(control: AbstractControl, error: string = 'required', msgError: string = 'mensagem.campo-obrigatorio', params?: any) {
    return control.hasError(error) ? this.mdbI18N.translate(msgError, params) : '';
  }

  public traduzir(chave: string) {
    return this.mdbI18N.translate(chave);
  }

}
