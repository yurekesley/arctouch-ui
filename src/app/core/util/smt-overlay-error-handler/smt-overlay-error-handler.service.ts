import { ERROR_INJECTOR_TOKEN } from './error.injector.token';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { SMTOverlayErrorHandlerComponent } from './smt-overlay-error-handler.component';
import { ComponentRef } from '@angular/core/src/render3';
import { Observable, of, interval, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
  hasBackdrop: true,
};

@Injectable({ providedIn: 'root' })
export class SMTOverlayErrorHandlerService implements ErrorHandler {

  private overlay: Overlay;
  constructor(
    private injector: Injector) {
    this.overlay = this.injector.get(Overlay);
  }
  handleError(error: any): void {
    const overlayRef: OverlayRef = this.overlay.create(DEFAULT_OVERLAY_CONFIG);
    this.attachPortal(overlayRef, error).subscribe(() => {
      overlayRef.dispose();
    });
  }

  private attachPortal(overlayRef: OverlayRef, error: any): Observable<{}> {
    const ErrorHandlerPortal: ComponentPortal<SMTOverlayErrorHandlerComponent> = new ComponentPortal(
      SMTOverlayErrorHandlerComponent,
      null,
      this.createInjector(error)
    );
    const compRef: ComponentRef<SMTOverlayErrorHandlerComponent> | any = overlayRef.attach(ErrorHandlerPortal);

    return compRef.instance.dismiss$;
  }

  private createInjector(error: any): PortalInjector {
    const injectorTokens = new WeakMap<any, any>([
      [ERROR_INJECTOR_TOKEN, error]
    ]);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
