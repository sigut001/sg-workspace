import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appHighlightElements]',
  standalone: true,
})
export class HighlightElementsDirective implements OnChanges {
  @Input() ids: string[] = []; // Liste der IDs der Elemente
  @Input() transitionTime = 1000; // Transition-Dauer
  @Input() brightness = 20; // Helligkeitsanpassung
  @Input() trigger = false; // Startet den Effekt nur, wenn auf true gesetzt
  @Input() repeatCount = 0; // Anzahl der Wiederholungen (0 für unendlich)
  @Input() persistHighlight = true; // Bleibt leuchtend, wenn true (standardmäßig)

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trigger'] && this.trigger) {
      this.startHighlightEffect();
    }
  }

  private startHighlightEffect(): void {
    this.ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        this.applyHighlightEffect(element);
      }
    });
  }

  private applyHighlightEffect(element: HTMLElement): void {
    const originalBackground = window.getComputedStyle(element).backgroundColor;

    // Set transition properties for smooth background color and shadow change
    this.renderer.setStyle(
      element,
      'transition',
      `background-color ${this.transitionTime}ms ease-in-out, box-shadow ${this.transitionTime}ms ease-in-out`
    );

    // Define the lighter color and shadow style
    const lightenColor = this.calculateLighterColor(originalBackground);
    const shadowStyle = '0px 0px 5px 2px rgba(255, 255, 255, 0.5)';

    let count = 0;
    const interval = setInterval(() => {
      // Toggle the highlight effect with background and shadow
      this.renderer.setStyle(element, 'backgroundColor', lightenColor);
      this.renderer.setStyle(element, 'boxShadow', shadowStyle);

      setTimeout(() => {
        // Revert to original background color and shadow after transition
        this.renderer.setStyle(element, 'backgroundColor', originalBackground);
        this.renderer.setStyle(element, 'boxShadow', 'none');
      }, this.transitionTime);

      count++;

      // Stop the effect if repeatCount is reached
      if (this.repeatCount > 0 && count >= this.repeatCount) {
        clearInterval(interval);

        // Apply final state based on persistHighlight
        if (this.persistHighlight) {
          this.renderer.setStyle(element, 'backgroundColor', lightenColor);
          this.renderer.setStyle(element, 'boxShadow', shadowStyle);
        } else {
          this.renderer.setStyle(
            element,
            'backgroundColor',
            originalBackground
          );
          this.renderer.setStyle(element, 'boxShadow', 'none');
        }
      }
    }, 2 * this.transitionTime);
  }

  private calculateLighterColor(color: string): string {
    const match = color.match(/\d+/g);
    if (!match) return color;

    const [r, g, b] = match.map(Number);
    const adjust = (value: number) =>
      Math.min(255, value + (value * this.brightness) / 100);
    return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
  }
}
