import { Component, input } from '@angular/core';

@Component({
  selector: 'sg-lib-component-hero-container',
  standalone: true,
  template: `
    <div
      class="relative w-full bg-cover bg-center bg-fixed min-h-screen"
      [style.background-image]="
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
        backgroundUrl() +
        ')'
      "
    >
      <div
        class="relative w-full flex flex-col items-center justify-center p-8"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class HeroContainerComponent {
  backgroundUrl = input.required();
}
