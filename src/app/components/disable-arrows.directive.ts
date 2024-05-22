// disable-arrows.directive.ts
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="number"][disableArrows]',
})
export class DisableArrowsDirective {
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
      // Prevent changes via keyboard
      event.preventDefault();
    }
  
    private handleScroll(event: WheelEvent): void {
      if (this.el.nativeElement.type === 'number') {
        event.preventDefault();
      }
    }
}
