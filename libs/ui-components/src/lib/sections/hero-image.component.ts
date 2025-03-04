import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'sg-lib-component-hero-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative bg-cover bg-center bg-fixed"
      [ngClass]="hight()"
      [style.background-image]="
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
        backgroundUrl() +
        ')'
      "
    >
      <div
        class="absolute top-1/4 lg:top-1/3 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center text-white px-8 overflow-hidden"
      >
        <p class="text-4xl font-bold text-slate-100 ">{{ headline() }}</p>
        <p class="text-lg mt-2 text-slate-200">{{ subheadline() }}</p>
      </div>
    </div>
  `,
})
export class HeroImageComponent {
  headline = input.required();
  subheadline = input.required();
  backgroundUrl = input.required();
  hight = input<'h-50' | 'h-60' | 'h-70' | 'h-80' | 'h-90' | 'h-screen'>(
    'h-screen'
  );
}
