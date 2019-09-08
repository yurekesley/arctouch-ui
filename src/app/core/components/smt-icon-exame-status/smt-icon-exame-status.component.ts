import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'smt-icon-exame-status',
  templateUrl: './smt-icon-exame-status.component.html',
  styleUrls: ['./smt-icon-exame-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmtIconExameStatusComponent {

  @Input()
  public item: any;

  constructor() { }

}
