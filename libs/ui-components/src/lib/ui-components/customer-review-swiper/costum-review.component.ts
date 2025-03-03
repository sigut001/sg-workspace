import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  signal,
  effect,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerReview } from './costumer-review.model';
import { CommonModule } from '@angular/common';
import { CustomerReviewCardComponent } from './costumer-review-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { selectCustomerReviews } from './state/costumer-reviews-state.selectors';

@Component({
  selector: 'sg-lib-component-customer-reviews',
  standalone: true,
  imports: [CommonModule, CustomerReviewCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` <swiper-container init="false" class="w-full h-full">
    <swiper-slide *ngFor="let review of reviews(); let i = index">
      <sg-lib-component-customer-review-card
        [review]="review"
      ></sg-lib-component-customer-review-card>
    </swiper-slide>
  </swiper-container>`,
})
export class CustomerReviewsComponent implements AfterViewInit {
  reviews = signal<CustomerReview[]>([]);
  store = inject(Store);
  reviewGroups$: Observable<CustomerReview[]> = this.store.select(
    selectCustomerReviews
  );

  constructor(private elementRef: ElementRef) {
    // Subscribe to NgRx Store
    this.reviewGroups$.subscribe((reviews) => {
      this.reviews.set(reviews);
    });
  }

  @Input() loop = true;
  @Input() speed = 1700;
  @Input() autoplay = true;
  @Input() autoplay_delay = 3550; // Verweildauer in ms
  @Input() navigation = false;
  @Input() pagination = false;
  @Input() scrollbar = false;
  @Input() init = false;
  @Input() spaceBetween = 20;
  private swiperEl: HTMLElement | null = null;

  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement.innerHTML);
    this.swiperEl =
      this.elementRef.nativeElement.querySelector('swiper-container');
    if (!this.swiperEl) {
      console.error('Swiper element not found.');
    }
    const updatedReviews = this.reviews();

    if (updatedReviews.length > 0) {
      console.log('Initializing Swiper with reviews:', updatedReviews);
      this.initializeSwiper();
    }
  }

  private initializeSwiper(): void {
    if (!this.swiperEl) {
      console.error('Cannot initialize Swiper. Element not found.');
      return;
    }

    // Bildschirmabhängige slidesPerView bestimmen
    const slidesPerView = this.getSlidesPerView(window.innerWidth);

    // Swiper-Einstellungen
    Object.assign(this.swiperEl, {
      loop: this.loop,
      navigation: this.navigation,
      pagination: this.pagination,
      scrollbar: this.scrollbar,
      autoplay: this.autoplay ? { delay: this.autoplay_delay } : false,
      speed: this.speed,
      spaceBetween: this.spaceBetween,

      slidesPerView: slidesPerView,
    });

    console.log('Initializing Swiper with settings:', {
      loop: this.loop,
      autoplay: this.autoplay,
      autoplay_delay: this.autoplay_delay,
      speed: this.speed,
      navigation: this.navigation,
      pagination: this.pagination,
      scrollbar: this.scrollbar,
      spaceBetween: this.spaceBetween,
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
        return 3;
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
