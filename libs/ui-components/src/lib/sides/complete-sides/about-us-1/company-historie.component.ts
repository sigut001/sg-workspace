import {
  Component,
  input,
  signal,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { SequentialFadeInDirective } from '@sg-shared-librarys/directives';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sg-lib-component-company-historie',
  standalone: true,
  imports: [SequentialFadeInDirective, CommonModule],
  template: `
    <div
      #gridContainer
      appSequentialFadeIn
      [trigger]="fadeInTrigger()"
      class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
    >
      @for (event of companyHistorieCards(); track event.title) {
      <div class="opacity-0 bg-slate-300 shadow-lg overflow-hidden rounded-md">
        <img
          [src]="event.imgUrl"
          [alt]="event.title"
          class="w-full h-40 object-cover"
        />
        <div class="p-4">
          <p class="text-xl text-primary-200 mb-2">
            {{ event.title }}
          </p>
          <p class="text-primary-300">{{ event.description }}</p>
          <p class="text-sm text-primary-400 mt-2" *ngIf="event.timePeriod">
            {{ event.timePeriod }}
          </p>
        </div>
      </div>
      }
    </div>
  `,
})
export class CompanyHistorieComponent implements AfterViewInit {
  @ViewChild('gridContainer') gridContainer!: ElementRef;

  companyHistorieCards = input.required<
    {
      imgUrl: string;
      title: string;
      description: string;
      timePeriod?: string;
    }[]
  >();

  fadeInTrigger = signal(false);

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (!this.gridContainer) {
      setTimeout(() => this.initObserver(), 100);
    } else {
      this.initObserver();
    }
  }

  private initObserver() {
    if (!this.gridContainer?.nativeElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.fadeInTrigger.set(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.gridContainer.nativeElement);
  }
}
