import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'sg-lib-component-call-to-action-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="[
        sizeClasses,
        roundedClasses,
        disabledClasses,
        buttonType === 'primary'
          ? 'bg-action-500 text-white'
          : 'bg-secondary-500 text-white'
      ]"
      [disabled]="disabled"
      (click)="navigate()"
      class="shadow-lg hover:bg-action-600 focus:outline-none transition-all duration-150 w-full shadow-[0_4px_6px_rgba(0, 123, 255, 0.3)]"
    >
      @if (tel) {
      <a id="beratungAnfragenButton" [href]="'tel:' + tel">
        {{ buttonText }}
      </a>
      } @else {
      {{ buttonText }}
      }
    </button>
  `,
  styles: [
    `
      .white-shadow {
        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3); /* Weißer Schatten mit Transparenz */
      }
    `,
  ],
})
export class CallToActionButtonComponent {
  @Input({ required: true }) buttonText!: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() tel: string | null = null;
  @Input() link: string | null = null;
  @Input() rounded: 'none' | 'small' | 'medium' | 'large' = 'large';
  @Input() buttonType: 'primary' | 'secondary' = 'primary';

  router = inject(Router);

  get sizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'p-2 text-sm';
      case 'large':
        return 'p-4 text-lg';
      default:
        return 'p-3 text-base';
    }
  }

  get disabledClasses(): string {
    return this.disabled
      ? 'bg-action-800 text-gray-500 cursor-not-allowed pointer-events-none'
      : 'hover:bg-action-600 focus:ring-action-300 active:bg-action-700';
  }

  get roundedClasses(): string {
    switch (this.rounded) {
      case 'small':
        return 'rounded-sm';
      case 'medium':
        return 'rounded-md';
      case 'large':
        return 'rounded-full';
      default:
        return '';
    }
  }

  navigate() {
    this.router.navigate([this.link]);
  }
}
