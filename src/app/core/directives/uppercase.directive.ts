import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[smtUppercase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UppercaseDirective),
      multi: true,
    },
  ],
})
export class UppercaseDirective implements ControlValueAccessor {

  onChange: (_: any) => void;


  touched: () => void;

  constructor(@Self() private el: ElementRef, private renderer: Renderer2) { }


  @HostListener('keyup', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    if (!evt.shiftKey) {
      const start = this.el.nativeElement.selectionStart;
      const end = this.el.nativeElement.selectionEnd;
      const value = this.el.nativeElement.value.toUpperCase();
      this.writeValue(value);
      this.onChange(value);
      evt.preventDefault();
      this.el.nativeElement.setSelectionRange(start, end);
    }
  }



  @HostListener('blur', ['$event'])
  onBlur() {
    const value = this.el.nativeElement.value.toUpperCase();
    this.writeValue(value);
    this.onChange(value);
    this.touched();
  }


  writeValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }


  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: () => void): void {
    this.touched = fn;
  }


  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }
}
