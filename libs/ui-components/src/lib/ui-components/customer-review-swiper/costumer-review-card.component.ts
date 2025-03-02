import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReview } from './costumer-review.model';

@Component({
  selector: 'sg-lib-component-customer-review-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="grid grid-cols-2 grid-rows-2 bg-primary-500 rounded-md  xl:rounded-lg shadow-lg p-6 h-72 w-full max-w-4xl text-slate-200 gap-4 mx-auto "
  >
    <!-- Quadrant 1: Bild -->
    <div class="row-span-1 col-span-1 flex items-center justify-center">
      <img
        class="w-full h-full object-cover rounded-md border-2 border-gray-300"
        [src]="review.image"
        loading="lazy"
        alt="{{ review.name }}'s avatar"
      />
    </div>

    <!-- Quadrant 2: Name, Titel und Bewertung -->
    <div
      class="row-span-1 col-span-1 flex flex-col justify-center items-center gap-2 p-4 text-center "
    >
      <span
        class="text-md text-slate-200 font-bold  w-full overflow-hidden whitespace-nowrap"
      >
        {{ review.name }}
      </span>
      <span class="text-sm font-medium text-slate-300">
        {{ review.title }}
      </span>
    </div>

    <!-- Quadrant 3 und 4: Kommentartext -->
    <div class="row-span-1 col-span-2 flex items-center justify-center p-4">
      <p class="text-slate-400 text-sm text-center px-4">
        "{{ review.comment }}"
      </p>
    </div>
  </div> `,
  styles: [],
})
export class CustomerReviewCardComponent {
  @Input() review!: CustomerReview;
}
