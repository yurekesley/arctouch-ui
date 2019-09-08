import { MDBI18NService, MDBValidators, MDBObjectUtil } from 'mdias-componentes';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

import * as moment from 'moment';
import { Copy } from '../../util/copy.util';
import { montarDataEHora } from '../../util/utils.functions';
import { marcarComoTocado } from '../../util/form.util';

@Component({
  selector: 'smt-input-data-hora',
  templateUrl: './smt-input-data-hora.component.html',
  styleUrls: ['./smt-input-data-hora.component.scss'],
  providers: []
})
export class SMTInputDataHoraComponent implements OnInit, OnChanges {

  public mask = [/\d/, /\d/, ':', /\d/, /\d/];
  public data: any;
  public hora: any;

  @Input()
  public placeholder = '';

  @Input()
  public _dataObrigatoria = false;

  @Input() set dataObrigatoria($value) {
    this._dataObrigatoria = $value;

    if (this.form) {
      this.form.get('data').setErrors(null);
      if (this._dataObrigatoria) {
        this.form.get('data').setErrors([MDBValidators.required]);
      }
    }
  }

  get dataObrigatoria() {
    return this._dataObrigatoria;
  }

  @Input()
  public dataID = '';

  @Input()
  public _horaObrigatoria = false;

  @Input() set horaObrigatoria($value) {
    this._horaObrigatoria = $value;

    if (this.form) {
      this.form.get('hora').setErrors(null);
      if (this._horaObrigatoria) {
        this.form.get('hora').setErrors([MDBValidators.required]);
      }
    }
  }

  get horaObrigatoria() {
    return this._horaObrigatoria;
  }

  @Input()
  public horaID = '';

  @Input()
  public placeholderData = 'Data';

  @Input()
  public placeholderHora = 'Hora';

  public _max = null;
  public _min = null;

  @Input()
  public readonly = false;

  @Input()
  public formato = 'dd/MM/yyyy';

  @Input() set max($value) {
    let newDate: any;
    if ($value) {
      newDate = Copy.parserStringDate($value);
    }

    this._max = newDate;
  }

  get max() {
    return this._max;
  }

  @Input() set min($value) {
    let newDate: any;
    if ($value) {
      newDate = Copy.parserStringDate($value);
    }

    this._min = newDate;
  }

  get min() {
    return this._min;
  }

  public form: FormGroup;

  public _controle: AbstractControl;

  @Input()
  set controle($value) {
    this._controle = $value;
  }

  get controle() {
    return this._controle;
  }

  public setarValorData() {
    let newDate: any;
    if (this.form && this.form.valid) {
      const date: Date = MDBObjectUtil.buscarValor(this.form.value, 'data', null);
      const hora: string = MDBObjectUtil.buscarValor(this.form.value, 'hora', null);

      newDate = hora;

      if (date && hora) {
        newDate = montarDataEHora(date, hora);
      } else if (date) {
        newDate = montarDataEHora(date, '');
      }

      this.controle.setValue(newDate);
    }
  }

  ngOnChanges() {

    if (this.controle.value) {
      this.hora = moment(this.controle.value).format('HH:mm');
      this.data = moment(this.controle.value).toDate();
    }
  }

  constructor(public mdbI18N: MDBI18NService, public fb: FormBuilder) {

  }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      data: [this.data],
      hora: [this.hora, [MDBValidators.pattern('^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?$')]]
    });

    this.form.valueChanges.subscribe(()=>{
      this.setarValorData();
    });

    this.controle.statusChanges.subscribe((res) => {
      if (res == 'INVALID' && this.controle.touched) {
        marcarComoTocado(this.form);
      } else if (this.controle.untouched && (this.controle.invalid || this.controle.updateOn != "change"))  {
        this.form.reset();
      }
    });
  }

  public error(control: AbstractControl, error: string = 'required', msgError: string = 'mensagem.campo-obrigatorio', params?: any) {
    return control.hasError(error) ? this.mdbI18N.translate(msgError, params) : '';
  }

  public traduzir(chave: string) {
    return this.mdbI18N.translate(chave);
  }
}
