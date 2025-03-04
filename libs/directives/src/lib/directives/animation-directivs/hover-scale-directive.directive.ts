import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appHoverScale]',
})
export class HoverScaleDirective {
  @Input() scaleSize = 1.05;
  @Input() transitionSpeed = '0.35s';
  @Input() resetSpeed = '0.2s';
  @Input() delay = 0;

  private timeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.appendTransition(`transform ${this.transitionSpeed} ease-in-out`);
  }

  private appendTransition(newTransition: string) {
    const existingTransition = this.el.nativeElement.style.transition || '';
    const updatedTransition = existingTransition
      ? `${existingTransition}, ${newTransition}`
      : newTransition;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      updatedTransition
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.timeout = setTimeout(() => {
      this.appendTransition(`transform ${this.transitionSpeed} ease-in-out`);
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `scale(${this.scaleSize})`
      );
    }, this.delay * 1000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.timeout);
    this.appendTransition(`transform ${this.resetSpeed} ease-in-out`);
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
