import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

@Component({
  selector: 'smt-dialog',
  templateUrl: './smt-dialog.component.html',
  styleUrls: ['./smt-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SMTDialogComponent {

  constructor(public dialogRef: MatDialogRef<SMTDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  fechar() { this.dialogRef.close(false); }



}
