import { Component, input } from '@angular/core';
import { SequentialFadeInDirective } from '@sg-shared-librarys/directives';

@Component({
  selector: 'sg-lib-component-company-values',
  standalone: true,
  imports: [SequentialFadeInDirective],
  template: `
    <div class="text-slate-300 w-full flex flex-col gap-8" #observerElement>
      <div class="p-6">
        <!-- Responsive Grid Layout -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          @for (value of coreValues(); track value) {
          <div
            class="text-center flex flex-col items-center justify-center gap-4"
          >
            <img
              [src]="value.image"
              [alt]="value.name"
              class="w-32 h-32 object-cover rounded-full"
            />
            <p class="font-semibold text-lg">{{ value.name }}</p>
          </div>
          }
        </div>
      </div>

      <div
        class="p-6 flex flex-col justify-center items-center"
        appSequentialFadeIn
        [trigger]="trigger()!"
      >
        @for (detail of detailedValues(); track detail) {
        <p class="text-base opacity-0 text-center px-4 md:px-12">
          {{ detail.description }}
        </p>
        }
      </div>
    </div>
  `,
})
export class CompanyValuesComponent {
  values = input<string[]>(); // Liste der Leitsätze
  coreValues = input<{ image: string; name: string }[]>(); // Kernwerte mit Bild und Namen
  detailedValues = input<{ name: string; description: string }[]>(); // Nur Name und Beschreibung, ohne Bild
  trigger = input.required<boolean>(); // Trigger wird von außen gesetzt
}
