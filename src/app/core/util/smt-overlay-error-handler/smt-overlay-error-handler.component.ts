import { Component, Inject, Optional, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { MatDialogRef, MatDialog } from '@angular/material';

import { ERROR_INJECTOR_TOKEN } from './error.injector.token';
import { SMTDialogComponent } from '../../components/smt-dialog/smt-dialog.component';
import { SMTHandlerMassageService } from '../smt-handler-message.service';

@Component({
  selector: 'smt-overlay-error-handler',
  templateUrl: './smt-overlay-error-handler.component.html',
  styleUrls: ['./smt-overlay-error-handler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SMTOverlayErrorHandlerComponent implements AfterViewInit {

  private isVisible = new Subject();
  public dismiss$: Observable<{}> = this.isVisible.asObservable();
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SMTDialogComponent>,
    public handlerMassage: SMTHandlerMassageService,
    @Optional() @Inject(ERROR_INJECTOR_TOKEN) public error) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dialogRef = this.dialog.open(SMTDialogComponent, {
        width: '330px',
        disableClose: true,
        data: this.handlerMassage.handleErrorMassege(this.error)
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.isVisible.next();
        this.isVisible.complete();
      });
    });
  }

}
