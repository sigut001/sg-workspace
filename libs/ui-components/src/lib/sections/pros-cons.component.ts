import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'sg-lib-component-pros-cons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="min-h-screen flex flex-col justify-center items-center gap-8"
      [ngClass]="containerClass()"
    >
      <p class="text-4xl font-bold text-center">
        Vorteile & Nachteile von {{ headline() }}
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 lg:px-20">
        @for (list of lists(); track $index) {
        <div
          class="p-6 lg:p-24 border rounded-lg backdrop-blur-md shadow-lg shadow-gray-700/50 min-h-[30vh] "
          [ngClass]="boxClass()"
        >
          <div class="flex items-center">
            <p class="text-xl font-bold uppercase" [ngClass]="list.color">
              {{ list.title }}
            </p>
          </div>
          <ul class="mt-4 space-y-3">
            @for (item of list.items; track $index) {
            <li class="flex items-center gap-4">
              <span class="material-icons" [ngClass]="list.color">{{
                list.icon
              }}</span>
              <span class="text-sm md:text-base">{{ item }}</span>
            </li>
            }
          </ul>
        </div>
        }
      </div>
    </section>
  `,
})
export class ProsConsComponent {
  headline = input.required<string>();
  pros = input.required<string[]>();
  cons = input.required<string[]>();
  theme = input<'dark' | 'light'>('light');

  containerClass = computed(() =>
    this.theme() === 'light'
      ? 'border-primary-500 bg-slate-300 text-primary-500'
      : 'border-slate-300 bg-primary-500 text-slate-300'
  );

  boxClass = computed(() =>
    this.theme() === 'dark'
      ? 'border-primary-500 bg-slate-300 text-primary-500'
      : 'border-slate-300 bg-primary-500 text-slate-300'
  );

  lists = computed(() => [
    {
      title: 'Vorteile',
      items: this.pros(),
      icon: 'check_circle',
      color: 'text-green-500',
    },
    {
      title: 'Nachteile',
      items: this.cons(),
      icon: 'cancel',
      color: 'text-red-500',
    },
  ]);
}
