import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mdias-titulo',
  templateUrl: './smt-sub-titulo.component.html',
  styleUrls: ['./smt-sub-titulo.component.scss']
})
export class SmtSubTituloComponent implements OnInit {

  @Input() valor = '';

  constructor() { }

  ngOnInit() { }

}
