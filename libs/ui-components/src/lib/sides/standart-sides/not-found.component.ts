import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CallToActionButtonComponent } from '../../ui-elements/buttons/call-to-action-button.component';

@Component({
  selector: 'sg-lib-component-not-found',
  standalone: true,
  imports: [RouterModule, CallToActionButtonComponent],
  template: `
    <div
      class="flex flex-col items-center justify-center min-h-screen text-slate-300 px-4"
    >
      <div class="text-center">
        <h1 class="text-6xl md:text-8xl font-extrabold mb-4">
          {{ statusCode() }}
        </h1>
        <p class="text-lg md:text-xl mb-6">{{ message() }}</p>
        <sg-lib-component-call-to-action-button
          [buttonText]="ctaButtonText()"
          [link]="ctaButtonLink()"
          [size]="ctaButtonSize()"
          [rounded]="ctaButtonRounded()"
        >
        </sg-lib-component-call-to-action-button>
      </div>
    </div>
  `,
  styles: [],
})
export class NotFoundComponent {
  // Definieren von Input-Signalen mit einem Standardwert
  statusCode = input<string>('404');
  message = input<string>('Seite nicht gefunden');
  ctaButtonText = input<string>('Zurück zur Startseite');
  ctaButtonLink = input<string>('/unsere-dienstleistung');
  ctaButtonSize = input<'large' | 'medium' | 'small'>('large');
  ctaButtonRounded = input<'large' | 'medium' | 'small'>('large');
}
