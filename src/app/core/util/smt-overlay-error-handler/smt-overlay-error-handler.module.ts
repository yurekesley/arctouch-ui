import { SMTDialogModule } from './../../components/smt-dialog/smt-dialog.module';
import { MatDialogRef } from '@angular/material';
import { SMTOverlayErrorHandlerService } from './smt-overlay-error-handler.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { NgModule, ErrorHandler } from '@angular/core';
import { SMTOverlayErrorHandlerComponent } from './smt-overlay-error-handler.component';
import {  MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  imports: [
   SMTDialogModule
  ],
  declarations: [ SMTOverlayErrorHandlerComponent],
  entryComponents: [ SMTOverlayErrorHandlerComponent ]
})
export class SMTOverlayErrorHandlerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SMTOverlayErrorHandlerModule,
      providers: [
        { provide: ErrorHandler, useClass: SMTOverlayErrorHandlerService },
        { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
        { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
      ]
    };
  }
}

