import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appSlideInChildren]',
  standalone: true,
})
export class SlideInChildrenDirective implements AfterViewInit, OnDestroy {
  @Input() slideDistance = 300;
  @Input() duration = 1100;
  @Input() delayBetween = 1100;
  @Input() startDelay = 100;
  @Input() slideDirection: 'left' | 'right' | 'top' | 'bottom' = 'left';

  private children: HTMLElement[] = [];
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.children = Array.from(this.el.nativeElement.children);

    this.children.forEach((child) => {
      this.renderer.setStyle(child, 'opacity', '0');
      this.renderer.setStyle(child, 'transform', this.getTranslateValue());
      this.renderer.setStyle(
        child,
        'transition',
        `all ${this.duration}ms ease-in-out`
      );
    });

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => this.startAnimation(), this.startDelay);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private getTranslateValue(): string {
    switch (this.slideDirection) {
      case 'right':
        return `translateX(${this.slideDistance}px)`;
      case 'top':
        return `translateY(-${this.slideDistance}px)`;
      case 'bottom':
        return `translateY(${this.slideDistance}px)`;
      case 'left':
      default:
        return `translateX(-${this.slideDistance}px)`;
    }
  }

  private startAnimation(): void {
    this.children.forEach((child, index) => {
      setTimeout(() => {
        this.renderer.setStyle(child, 'opacity', '1');
        this.renderer.setStyle(
          child,
          'transform',
          'translateX(0) translateY(0)'
        );
      }, index * this.delayBetween);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
