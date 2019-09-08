import { FilmeEvento } from './proximos.evento';
import { Rest } from './../../../core/util/rest';
import { Filme } from './../../../core/model/filme';
import { Componente } from 'src/app/core/util/componente';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smt-proximos',
  templateUrl: './proximos.component.html',
  styleUrls: ['./proximos.component.scss']
})
export class ProximosComponent extends Componente<Filme> implements OnInit {

  constructor(formBuilder: FormBuilder, rest: Rest) {
    super(new FilmeEvento(formBuilder, rest));
  }

  ngOnInit() {
  }

}
