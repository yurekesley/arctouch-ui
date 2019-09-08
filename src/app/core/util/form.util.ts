import { FormGroup } from '@angular/forms';

export function marcarComoTocado(formulario: FormGroup) {
  for (const key in formulario.controls) {
    if (formulario.controls.hasOwnProperty(key)) {
      const control: any = formulario.controls[key];
      if (control.controls) {
        this.marcarComoTocado(control);
      } else {
        control.markAsTouched();
      }
    }
  }
}

export function marcarComoNaoTocado(formulario: FormGroup) {
  for (const key in formulario.controls) {
    if (formulario.controls.hasOwnProperty(key)) {
      const control: any = formulario.controls[key];
      if (control.controls) {
        this.marcarComoNaoTocado(control);
      } else {
        control.markAsUntouched();
      }
    }
  }
}
