// no-scroll.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="number"][noScroll]',
})
export class NoScrollDirective {
  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    this.handleScroll(event);
  }

  @HostListener('DOMMouseScroll', ['$event'])
  onDomMouseScroll(event: WheelEvent): void {
    this.handleScroll(event);
  }

  private handleScroll(event: WheelEvent): void {
    if (this.el.nativeElement.type === 'number') {
      event.preventDefault();
    }
  }
}
