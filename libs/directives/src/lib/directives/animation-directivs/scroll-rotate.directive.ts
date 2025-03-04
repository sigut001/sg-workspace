import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appScrollRotate]',
  standalone: true,
})
export class ScrollRotateDirective implements AfterViewInit {
  @Input('appScrollRotate') targetId = ''; // ID des Elements, das gedreht werden soll
  private targetElement: HTMLElement | null = null;
  private viewportHeight = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Holen der Zielkomponente nach Initialisierung
    this.targetElement = document.getElementById(this.targetId);
    this.updateViewportHeight();
  }

  // Aktualisiere die Fensterhöhe, falls die Größe geändert wird
  @HostListener('window:resize')
  onResize() {
    this.updateViewportHeight();
  }

  // Funktion, die bei jedem Scrollen ausgeführt wird
  @HostListener('window:scroll')
  onScroll() {
    if (this.targetElement) {
      const scrollPosition = window.scrollY; // Aktuelle Scroll-Position
      const rotationDegree = (scrollPosition / this.viewportHeight) * 180; // Proportionale Berechnung
      this.renderer.setStyle(
        this.targetElement,
        'transform',
        `rotate(${rotationDegree}deg)`
      );
    }
  }

  // Hilfsfunktion zur Aktualisierung der aktuellen Bildschirmhöhe
  private updateViewportHeight() {
    this.viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
  }
}
