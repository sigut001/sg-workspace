import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appHoverShadow]',
})
export class HoverShadowDirective {
  @Input() transitionSpeed = '0.3s';
  @Input() resetSpeed = '0.2s';
  @Input() delay = 0.1;
  @Input() shadowOffsetY = '6px';
  @Input() shadowBlur = '12px';
  @Input() shadowOpacity = 0.45;
  @Input() shadowColorClass = 'action-500';

  private timeout: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.appendTransition(`box-shadow ${this.resetSpeed} ease-in-out`);
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

  private getTailwindColor(): string {
    // Erstelle ein temporäres Element, um die Tailwind-Farbe auszulesen
    const tempElement = document.createElement('div');
    tempElement.classList.add(`text-${this.shadowColorClass}`); // Nutzt Tailwind-Klasse
    document.body.appendChild(tempElement);

    // Hole den berechneten Farbwert (funktioniert mit Tailwind)
    const computedColor = window.getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement); // Entferne das Element

    // Ändere den Farbwert in eine RGBA-Version für dezente Opazität
    return computedColor
      .replace('rgb', 'rgba')
      .replace(')', `, ${this.shadowOpacity})`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.timeout = setTimeout(() => {
      this.appendTransition(`box-shadow ${this.transitionSpeed} ease-in-out`);
      const shadowColor = this.getTailwindColor();

      this.renderer.setStyle(
        this.el.nativeElement,
        'box-shadow',
        `0 ${this.shadowOffsetY} ${this.shadowBlur} ${shadowColor}`
      );
    }, this.delay * 1000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.timeout);
    this.appendTransition(`box-shadow ${this.resetSpeed} ease-in-out`);
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
  }
}
