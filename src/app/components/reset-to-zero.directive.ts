// reset-to-zero.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="number"][resetToZero]',
})
export class ResetToZeroDirective {
  constructor(private el: ElementRef) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    this.handleScroll(event);
  }

  @HostListener('DOMMouseScroll', ['$event'])
  onDomMouseScroll(event: WheelEvent): void {
    this.handleScroll(event);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.handleKeydown(event);
  }

  private handleScroll(event: WheelEvent): void {
    if (this.el.nativeElement.type === 'number') {
      const currentValue: number = this.el.nativeElement.valueAsNumber || 0;
      const step: number = parseFloat(this.el.nativeElement.step) || 1;

      if (event.deltaY > 0 && currentValue - step < 0) {
        // If scrolling down and new value would be negative, reset to zero
        this.el.nativeElement.value = '0';
      } else {
        // Otherwise, let the default behavior handle the change
        return;
      }

      event.preventDefault();
    }
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (this.el.nativeElement.type === 'number' && event.key === 'ArrowDown') {
      const currentValue: number = this.el.nativeElement.valueAsNumber || 0;
      const step: number = parseFloat(this.el.nativeElement.step) || 1;

      if (currentValue - step < 0) {
        // If pressing arrow down and new value would be negative, reset to zero
        this.el.nativeElement.value = '0';
        event.preventDefault();
      }
    }
  }
}
