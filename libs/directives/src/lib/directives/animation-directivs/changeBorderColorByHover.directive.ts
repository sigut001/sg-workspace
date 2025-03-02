import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appBorderHoverTransition]',
  standalone: true,
})
export class BorderHoverTransitionDirective
  implements AfterViewInit, OnChanges
{
  @Input() hoverColor = '#FF5733';
  @Input() activeColor = '#0020DB';
  @Input() transitionDuration = 300;
  @Input() isActive = false;

  private pseudoElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initPseudoElement();
    this.updateBorder();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isActive']) {
      this.updateBorder();
    }
  }

  private initPseudoElement() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

    this.pseudoElement = this.renderer.createElement('span');
    this.renderer.appendChild(this.el.nativeElement, this.pseudoElement);

    this.renderer.setStyle(this.pseudoElement, 'content', '""');
    this.renderer.setStyle(this.pseudoElement, 'position', 'absolute');
    this.renderer.setStyle(this.pseudoElement, 'bottom', '0');
    this.renderer.setStyle(this.pseudoElement, 'left', '0');
    this.renderer.setStyle(this.pseudoElement, 'width', '0%');
    this.renderer.setStyle(this.pseudoElement, 'height', '2px');
    this.renderer.setStyle(
      this.pseudoElement,
      'transition',
      `width ${this.transitionDuration}ms ease`
    );

    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');

    this.renderer.listen(this.el.nativeElement, 'mouseover', () => {
      if (!this.isActive) {
        this.renderer.setStyle(
          this.pseudoElement,
          'background-color',
          this.hoverColor
        );
        this.renderer.setStyle(this.pseudoElement, 'width', '100%');
      }
    });

    this.renderer.listen(this.el.nativeElement, 'mouseout', () => {
      if (!this.isActive) {
        this.renderer.setStyle(this.pseudoElement, 'width', '0%');
      }
    });
  }

  private updateBorder() {
    if (this.pseudoElement) {
      if (this.isActive) {
        this.renderer.setStyle(
          this.pseudoElement,
          'background-color',
          this.activeColor
        );
        this.renderer.setStyle(this.pseudoElement, 'width', '100%');
      } else {
        this.renderer.setStyle(this.pseudoElement, 'width', '0%');
      }
    }
  }
}
