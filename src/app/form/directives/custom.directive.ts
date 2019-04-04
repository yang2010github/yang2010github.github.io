import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customFormat]'
})
export class CustomDirective {
  @Input ('customFormat') format = 'lowerCase';

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
