import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appScrollTransition]',
  standalone: true,
})
export class ScrollTransitionDirective {
  // Input-Parameter für die Richtung der Verschiebung und den Schwellenwert der Scroll-Position
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up'; // Standardrichtung: nach oben
  @Input() offset = 20; // Standardverschiebung: 20px
  @Input() scrollThreshold = 0; // Standard-Scroll-Schwellenwert

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Überwacht das Scroll-Event auf dem Window-Objekt
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Berechnet die Scroll-Position
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Führt die Transition aus, wenn die Scroll-Position den Schwellenwert überschreitet
    if (scrollPosition > this.scrollThreshold) {
      this.applyTransform(true);
    } else {
      this.applyTransform(false);
    }
  }

  // Setzt den Transform-Stil basierend auf der Richtung und dem Zustand
  private applyTransform(isScrolled: boolean) {
    let transformValue = 'translateY(0)';

    // Berechnet den Transform-Wert basierend auf der Richtung und dem Offset
    switch (this.direction) {
      case 'up':
        transformValue = isScrolled
          ? `translateY(-${this.offset}px)`
          : 'translateY(0)';
        break;
      case 'down':
        transformValue = isScrolled
          ? `translateY(${this.offset}px)`
          : 'translateY(0)';
        break;
      case 'left':
        transformValue = isScrolled
          ? `translateX(-${this.offset}px)`
          : 'translateX(0)';
        break;
      case 'right':
        transformValue = isScrolled
          ? `translateX(${this.offset}px)`
          : 'translateX(0)';
        break;
    }

    // Setzt den Transform-Stil und die Transition
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformValue);
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease-out'
    );
  }
}
