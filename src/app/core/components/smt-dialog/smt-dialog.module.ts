import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SMTDialogComponent } from './smt-dialog.component';

@NgModule({
  declarations: [ SMTDialogComponent ],
  exports: [ SMTDialogComponent ] ,
  entryComponents: [SMTDialogComponent ],
  imports: [
      CommonModule
    , MatDialogModule
    , MatButtonModule
  ], providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ]
})
export class SMTDialogModule { }
