import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appRotate]',
  standalone: true,
})
export class RotateDirective implements OnInit {
  @Input() targetId = ''; // ID des Elements, das gedreht werden soll
  @Input() direction: 'left' | 'right' = 'right';
  @Input() speed = 1; // Standard: 1 Sekunde
  @Input() degrees = 360; // Standard: 360 Grad

  private targetElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.targetId) {
      this.targetElement = document.getElementById(this.targetId);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.targetElement) {
      const rotation =
        this.direction === 'right' ? this.degrees : -this.degrees;

      this.renderer.setStyle(
        this.targetElement,
        'transition',
        `transform ${this.speed}s ease`
      );
      this.renderer.setStyle(
        this.targetElement,
        'transform',
        `rotate(${rotation}deg)`
      );
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.targetElement) {
      this.renderer.setStyle(this.targetElement, 'transform', 'rotate(0deg)');
    }
  }
}
