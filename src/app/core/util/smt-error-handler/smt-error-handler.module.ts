import { IS_PRODUCTION_INJECTOR_TOKEN } from './smt-is-production-injector.token';
import { SMTErrorHandler } from './smt-error.handler.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { IEnvironment } from 'mdias-componentes/src/app/provedores/i-environment';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class SMTErrorHandlerModule {
  public static forRoot(env: IEnvironment): ModuleWithProviders {
    return {
      ngModule: SMTErrorHandlerModule,
      providers: [
        { provide: ErrorHandler, useClass: SMTErrorHandler },
        { provide: IS_PRODUCTION_INJECTOR_TOKEN, useValue: env.production }
      ]
    };
  }
}
