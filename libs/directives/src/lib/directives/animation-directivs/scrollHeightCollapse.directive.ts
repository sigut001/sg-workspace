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
  selector: '[appScrollHeightCollapse]',
  standalone: true,
})
export class ScrollHeightCollapseDirective implements OnInit {
  @Input() transitionDuration = 0.3; // Übergangsdauer in Sekunden

  private initialHeight = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Speichere die anfängliche Höhe des Elements
    const computedStyle = getComputedStyle(this.el.nativeElement);
    this.initialHeight = parseFloat(computedStyle.height);

    // Setze die Transition für die Höhe
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `height ${this.transitionDuration}s ease-out`
    );
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Wenn nicht oben gescrollt wird, setze die Höhe auf 0, ansonsten auf die initiale Höhe
    if (scrollPosition > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'height',
        `${this.initialHeight}px`
      );
    }
  }
}
