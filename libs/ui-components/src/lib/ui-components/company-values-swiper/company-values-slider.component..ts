import {
  Component,
  ElementRef,
  inject,
  Input,
  signal,
  effect,
  AfterContentInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompanyValue } from './company-values-slider.model';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { selectCompanyValues } from './state/company-values-state.selectors';

@Component({
  selector: 'sg-lib-component-company-values-swiper',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: ` <swiper-container init="false" class="w-full h-full">
    <swiper-slide
      *ngFor="let value of companyValues(); let i = index"
      class="flex items-center justify-center"
    >
      <div class="text-slate-200 text-center px-4 sm:px-8">
        <p class="text-3xl lg:text-2xl">{{ value.content.title }}</p>
        <p class="text-3xl lg:text-4xl text-slate-300 font-bold">
          {{ value.content.value }}
        </p>
      </div>
    </swiper-slide>
  </swiper-container>`,
})
export class CompanyValuesSliderComponent implements AfterContentInit {
  companyValues = signal<CompanyValue[]>([]);
  store = inject(Store);
  companyValues$: Observable<CompanyValue[]> =
    this.store.select(selectCompanyValues);

  @Input() loop = true;
  @Input() speed = 900; // Wechselgeschwindigkeit in ms
  @Input() autoplay = true;
  @Input() autoplay_delay = 2850; // Verweildauer in ms
  @Input() navigation = false;
  @Input() pagination = false;
  @Input() scrollbar = false;
  @Input() init = false;
  @Input() spaceBetween = 20;
  private swiperEl: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) {
    // React to changes in companyValues
    effect(() => {
      const updatedValues = this.companyValues();
      if (updatedValues.length > 0) {
        this.initializeSwiper();
      }
    });
  }

  ngAfterContentInit(): void {
    // Subscribe to NgRx Store
    this.companyValues$.subscribe((values) => {
      this.companyValues.set(values);
    });

    this.swiperEl =
      this.elementRef.nativeElement.querySelector('swiper-container');
    if (!this.swiperEl) {
      console.error('Swiper element not found.');
      return;
    }

    // Initialisierung mit Bildschirmabhängigen slidesPerView
    this.initializeSwiper();
  }

  private initializeSwiper(): void {
    if (!this.swiperEl) {
      console.error('Cannot initialize Swiper. Element not found.');
      return;
    }

    // Bildschirmabhängige slidesPerView bestimmen
    const slidesPerView = this.getSlidesPerView(window.innerWidth);

    // Swiper-Einstellungen mit dynamischem slidesPerView
    Object.assign(this.swiperEl, {
      loop: this.loop,
      navigation: this.navigation,
      pagination: this.pagination,
      scrollbar: this.scrollbar,
      autoplay: this.autoplay
        ? { delay: this.autoplay_delay, reverseDirection: true }
        : false,
      speed: this.speed,
      spaceBetween: this.spaceBetween,
      slidesPerView, // Dynamisch basierend auf Bildschirmgröße
    });

    // Reinitialize Swiper
    (this.swiperEl as any).initialize();
  }

  /**
   * Bestimmt die Anzahl der slidesPerView basierend auf der Bildschirmbreite
   * @param width Bildschirmbreite
   * @returns Anzahl der Slides
   */
  private getSlidesPerView(width: number): number {
    switch (true) {
      case width < 640: // sm
        return 1;
      case width >= 640 && width < 768: // md
        return 2;
      case width >= 768 && width < 1024: // lg
        return 3;
      case width >= 1024 && width < 1280: // xl
        return 3;
      case width >= 1280 && width < 1536: // 2xl
        return 3;
      default: // Ab 2xl oder Standard
        return 3;
    }
  }
}
