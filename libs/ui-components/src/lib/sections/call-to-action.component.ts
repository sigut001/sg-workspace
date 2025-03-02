import { Component, input } from '@angular/core';
import { CallToActionButtonComponent } from '../ui-elements/buttons/call-to-action-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sg-lib-component-call-to-action',
  standalone: true,
  imports: [CallToActionButtonComponent, CommonModule],
  template: `
    <div
      class="p-10 flex justify-evenly items-center gap-4 flex-wrap md:flex-nowrap backdrop-brightness-90"
      [ngClass]="
        layout() === 'text-left' ? 'md:flex-row' : 'md:flex-row-reverse'
      "
    >
      <p class="text-2xl font-bold text-center md:text-left">
        {{ text() }}
      </p>
      <sg-lib-component-call-to-action-button
        [buttonText]="buttonText()"
        [size]="size()"
        [disabled]="disabled()"
        [tel]="tel()"
        [link]="link()"
        [rounded]="rounded()"
      >
      </sg-lib-component-call-to-action-button>
    </div>
  `,
})
export class CallToActionComponent {
  text = input.required<string>();
  buttonText = input.required<string>();
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input<boolean>(false);
  tel = input<string | null>(null);
  link = input<string | null>(null);
  rounded = input<'none' | 'small' | 'medium' | 'large'>('large');
  layout = input<'text-left' | 'button-left'>('text-left');
}
