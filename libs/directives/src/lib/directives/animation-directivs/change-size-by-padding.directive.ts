import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appScrollPaddingTransition]',
  standalone: true,
})
export class ScrollPaddingTransitionDirective implements OnInit {
  @Input() directions: ('top' | 'bottom' | 'left' | 'right')[] = [
    'top',
    'bottom',
  ];
  @Input() percentageChange = 25;
  @Input() increase = false;
  @Input() activateOnScroll = 'top'; // Standardwert: "top"

  @Input() set transitionDuration(value: number) {
    // Wandelt die Zahl in einen Sekunden-String um (z.B. "0.3s")
    this._transitionDuration = `${value}s`;
  }

  private _transitionDuration = '0.3s'; // Standard-Übergangsdauer
  private initialPadding: { [key: string]: number } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Initiale Padding-Werte speichern
    const computedStyle = getComputedStyle(this.el.nativeElement);
    this.directions.forEach((direction) => {
      const paddingValue = parseFloat(
        computedStyle.getPropertyValue(`padding-${direction}`)
      );
      this.initialPadding[direction] = paddingValue;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const scrollBottomPosition = window.innerHeight + scrollPosition;
    const maxScroll = document.documentElement.scrollHeight;

    // Bestimme, ob die Scroll-Position die festgelegte Bedingung erfüllt
    const isScrolled =
      this.activateOnScroll === 'top'
        ? scrollPosition > 0 // Wenn 'top' gewählt ist, prüfe, ob gescrollt wurde
        : scrollBottomPosition < maxScroll; // Wenn 'bottom' gewählt ist, prüfe, ob unten gescrollt wurde

    if (isScrolled) {
      this.applyPaddingChange(true);
    } else {
      this.applyPaddingChange(false);
    }
  }

  private applyPaddingChange(isScrolled: boolean) {
    this.directions.forEach((direction) => {
      const initialPaddingValue = this.initialPadding[direction];
      const adjustmentFactor =
        (this.percentageChange / 100) * initialPaddingValue;
      const newPaddingValue = isScrolled
        ? this.increase
          ? initialPaddingValue + adjustmentFactor
          : initialPaddingValue - adjustmentFactor
        : initialPaddingValue;

      this.renderer.setStyle(
        this.el.nativeElement,
        `padding-${direction}`,
        `${newPaddingValue}px`
      );
    });

    // Setzt die Transition-Eigenschaft
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `padding ${this._transitionDuration} ease-out`
    );
  }
}
