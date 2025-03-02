import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CallToActionButtonComponent } from '../ui-elements/buttons/call-to-action-button.component';

@Component({
  selector: 'sg-lib-component-table',
  standalone: true,
  imports: [RouterModule, CommonModule, CallToActionButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Tableview for big screens -->
    <div class="hidden lg:block overflow-x-auto">
      <table class="w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-slate-700">
            @for (column of columns(); track column) {
            <th class="border border-gray-300 p-4 text-center align-middle">
              {{ column }}
            </th>
            } @if (colors()) {
            <th class="border border-gray-300 p-4 text-center align-middle">
              Farben
            </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of data(); track row) {
          <tr class="border border-gray-300">
            @for (column of columns(); track column) {
            <td
              class="border border-gray-300 p-4 text-center align-middle bg-primary-500"
            >
              {{ row[column] }}
            </td>
            } @if (colors() && colors()![row['Material']]) {
            <td
              class="border border-gray-300 p-4 text-center align-middle bg-primary-500"
            >
              <div class="grid grid-cols-4 gap-1">
                @for (color of colors()![row['Material']]; track color) {
                <span
                  class="w-4 h-4 rounded-full border border-gray-300"
                  [style.background]="color"
                ></span>
                }
              </div>
            </td>
            }
          </tr>
          }
        </tbody>
      </table>
    </div>
    <!-- Cardview for small screens -->
    <div class="block lg:hidden w-full">
      <swiper-container init="false" class="w-full">
        @for (row of data(); track row) {
        <swiper-slide class="size-full p-4">
          <div class="border p-4 rounded-lg shadow-md bg-primary-600 w-full">
            <div class="grid gap-4 w-full">
              @for (column of columns(); track column) {
              <div class="border-b pb-2">
                <span class="block font-semibold text-slate-300">{{
                  column
                }}</span>
                <span class="block text-right text-white">
                  {{ row[column] }}
                </span>
              </div>
              } @if (colors() && colors()![row['Material']]) {
              <div>
                <span class="block font-semibold text-slate-200">Farben</span>
                <div class="flex justify-center gap-2 p-4">
                  @for (color of colors()![row['Material']]; track color) {
                  <span
                    class="w-6 h-6 rounded-full border border-gray-300"
                    [style.background]="color"
                  ></span>
                  }
                </div>
              </div>
              }
            </div>
            <!-- Button am Ende der Karte -->
            @if (links() && links()![row[columns()[0]]]) {
            <sg-lib-component-call-to-action-button
              [buttonText]="'Details zu ' + row[columns()[0]]"
              [link]="links()![row[columns()[0]]]"
              size="small"
              rounded="large"
              class="w-full"
            ></sg-lib-component-call-to-action-button>
            }
          </div>
        </swiper-slide>
        }
      </swiper-container>
    </div>
  `,
})
export class TableComponent implements AfterViewInit {
  columns = input.required<string[]>();
  data = input.required<Record<string, any>[]>();
  links = input<Record<string, string>>();
  colors = input<Record<string, string[]>>();

  private readonly elementRef = inject(ElementRef);

  // Inputs mit input<>()
  loop = input<boolean>(false);
  speed = input<number>(1200);
  autoplay = input<boolean>(false);
  autoplayDelay = input<number>(1650);
  navigation = input<boolean>(true);
  pagination = input<boolean>(true);
  scrollbar = input<boolean>(false);
  spaceBetween = input<number>(0);

  private swiperEl: HTMLElement | null = null;

  constructor() {
    effect(() => {
      console.log(this.colors());
    });
  }

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

    const slidesPerView = 1;

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
}
