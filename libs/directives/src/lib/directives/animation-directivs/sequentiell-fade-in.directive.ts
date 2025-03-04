import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appSequentialFadeIn]',
  standalone: true,
})
export class SequentialFadeInDirective implements OnChanges {
  // $ Wichtig wenn die hier angwendete Directive verwedent wird, müssen die Kinderelemente im vorfeld auf opacity:0 gesetzt sein!

  @Input() animationDelay = 200; // Verzögerung zwischen den Animationen (in ms)
  @Input() animationDuration = 500; // Dauer einer einzelnen Animation (in ms)
  @Input() initialScale = 0.8; // Start-Skalierung (z.B. 0.8 für 80% der Originalgröße)
  @Input() trigger = false; // Trigger für die Animation

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trigger']) {
      if (this.trigger) {
        this.startAnimation();
      }
    }
  }

  private startAnimation(): void {
    const children = Array.from(
      this.el.nativeElement.children
    ) as HTMLElement[];

    children.forEach((child, index) => {
      child.style.opacity = '0'; // Unsichtbar
      child.style.transform = `scale(${this.initialScale})`; // Verkleinert
      // Animationseigenschaften setzen
      child.style.transition = `opacity ${this.animationDuration}ms ease-out, transform ${this.animationDuration}ms ease-out`;

      // Sichtbar machen mit zeitlichem Versatz
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'scale(1)';
      }, index * this.animationDelay);
    });
  }
}
