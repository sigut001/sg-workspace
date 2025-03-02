import {
  AfterViewInit,
  Component,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sg-lib-component-image-slider',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `
    <section
      class="min-h-screen flex flex-col items-center justify-center overflow-hidden w-full gap-8"
      [ngClass]="
        theme() === 'light'
          ? 'bg-slate-300 text-primary-600'
          : 'bg-primary-600 text-slate-300'
      "
    >
      <div class="flex flex-col items-center justify-center">
        <p class="text-4xl font-bold">{{ headline() }}</p>
        <p class="text-lg">{{ subheadline() }}</p>
      </div>
      <swiper-container init="false" class="w-full h-[23rem]">
        @for (image of imageUrls(); track image; let i = $index) {
        <swiper-slide class="size-full">
          <img
            [src]="image"
            class="size-full object-cover rounded-lg cursor-pointer"
            [alt]="'Image ' + (i + 1)"
          />
        </swiper-slide>
        }
      </swiper-container>
    </section>
  `,
})
export class ImageSliderComponent implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);

  // Inputs mit input<>()
  loop = input<boolean>(true);
  speed = input<number>(1200);
  autoplay = input<boolean>(true);
  autoplayDelay = input<number>(1650);
  navigation = input<boolean>(false);
  pagination = input<boolean>(false);
  scrollbar = input<boolean>(false);
  spaceBetween = input<number>(20);

  theme = input<'dark' | 'light'>('light');
  headline = input<string | null>(null);
  subheadline = input<string | null>(null);
  imageUrls = input.required<string[]>(); // Required Input

  private swiperEl: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.swiperEl =
      this.elementRef.nativeElement.querySelector('swiper-container');
    if (!this.swiperEl) {
      console.error('Swiper element not found.');
      return;
    }
    this.initializeSwiper();
  }

  private initializeSwiper(): void {
    if (!this.swiperEl) return;

    const slidesPerView = this.getSlidesPerView(window.innerWidth);

    Object.assign(this.swiperEl, {
      loop: this.loop(),
      autoplay: this.autoplay() ? { delay: this.autoplayDelay() } : false,
      speed: this.speed(),
      navigation: this.navigation(),
      pagination: this.pagination(),
      scrollbar: this.scrollbar(),
      spaceBetween: this.spaceBetween(),
      slidesPerView: slidesPerView,
    });

    (this.swiperEl as any).initialize();
  }

  private getSlidesPerView(width: number): number {
    return width < 640 ? 1 : width < 1024 ? 2 : 3;
  }
}
