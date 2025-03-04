import {
  Directive,
  Input,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appEnlargeText]',
  standalone: true,
})
export class EnlargeTextDirective implements OnInit {
  @Input() targetIds: string[] = []; // Array von IDs der Elemente, die vergrößert werden sollen
  @Input() scale = 150; // Standardwert für die Skalierung in Prozent (150% der ursprünglichen Größe)
  @Input() speed = 1; // Standardgeschwindigkeit in Sekunden

  private targetElements: HTMLElement[] = [];
  private originalFontSizes: Map<HTMLElement, string> = new Map();

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Ziel-Elemente basierend auf den übergebenen IDs finden und ihre ursprüngliche Schriftgröße speichern
    this.targetElements = this.targetIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    this.targetElements.forEach((element) => {
      const originalFontSize = window.getComputedStyle(element).fontSize;
      this.originalFontSizes.set(element, originalFontSize);
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    // Berechne die neue Schriftgröße basierend auf dem Skalierungsfaktor und wende sie an
    this.targetElements.forEach((element) => {
      const originalFontSize = this.originalFontSizes.get(element);
      if (originalFontSize) {
        const newSize = parseFloat(originalFontSize) * (this.scale / 100);
        this.renderer.setStyle(
          element,
          'transition',
          `font-size ${this.speed}s ease`
        );
        this.renderer.setStyle(element, 'font-size', `${newSize}px`);
      }
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Setze die Schriftgröße auf den ursprünglichen Wert zurück
    this.targetElements.forEach((element) => {
      const originalFontSize = this.originalFontSizes.get(element);
      if (originalFontSize) {
        this.renderer.setStyle(element, 'font-size', originalFontSize);
      }
    });
  }
}
