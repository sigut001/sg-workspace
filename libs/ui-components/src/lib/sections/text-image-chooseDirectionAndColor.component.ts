import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';
import { SlideInChildrenDirective } from '@sg-shared-librarys/directives';
import { CallToActionButtonComponent } from '../ui-elements/buttons/call-to-action-button.component';

@Component({
  selector: 'sg-lib-component-text-image-choose-direction-and-color',
  standalone: true,
  imports: [
    CommonModule,
    SlideInChildrenDirective,
    CallToActionButtonComponent,
  ],
  template: `
    <section
      [ngClass]="[
        theme === 'light'
          ? 'bg-primary-600 text-slate-300'
          : 'bg-slate-300 text-primary-600'
      ]"
      class="min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      @if (isMobile) {
      <div class="flex-grow w-full flex flex-col gap-10 px-4">
        <!-- Mobile Layout: Bild oben, Text darunter -->
        <div class="rounded-lg relative overflow-hidden h-64">
          <img
            [src]="imageURL"
            loading="lazy"
            alt="Hintergrundbild"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        <div class="flex flex-col gap-8">
          @if (title) {
          <span class="text-3xl font-bold w-fit overflow-hidden text-center ">{{
            title
          }}</span>
          }
          <div class="flex flex-col gap-2">
            @for (paragraph of paragraphs; track paragraph) {
            <span>{{ paragraph }}</span>
            }
          </div>
          @if (path) {
          <sg-lib-component-call-to-action-button
            [link]="path"
            class="w-full"
            [buttonText]="buttonText"
            size="medium"
            [rounded]="'large'"
          ></sg-lib-component-call-to-action-button>
          }
        </div>
      </div>
      } @else {
      <div class="grid grid-cols-12 gap-6 px-4 min-h-[50vh] w-11/12">
        <!-- Bild links, Text rechts -->
        @if (alignment === 'left') {
        <div class="col-span-6 rounded-lg relative overflow-hidden">
          <img
            [src]="imageURL"
            loading="lazy"
            alt="Hintergrundbild"
            class="absolute inset-0 object-cover w-full h-[50vh]"
          />
        </div>

        <div
          appSlideInChildren
          [slideDirection]="'right'"
          [delayBetween]="60"
          class="col-span-6 flex flex-col justify-start items-start px-8 pb-20 h-full"
        >
          @if (title) {
          <p class="text-4xl font-bold mb-8">{{ title }}</p>
          } @for (paragraph of paragraphs; track paragraph) {
          <p>{{ paragraph }}</p>
          } @if (path) {
          <sg-lib-component-call-to-action-button
            [link]="path"
            class="w-full md:w-fit"
            [buttonText]="buttonText"
            [size]="'small'"
            [rounded]="'large'"
          ></sg-lib-component-call-to-action-button>
          }
        </div>
        }

        <!-- Text links, Bild rechts -->
        @if (alignment === 'right') {
        <div
          appSlideInChildren
          [slideDirection]="'left'"
          [delayBetween]="60"
          class="col-span-6 flex flex-col justify-start items-start px-8 pb-20 h-full"
        >
          @if (title) {
          <p class="text-4xl font-bold mb-8">{{ title }}</p>
          } @for (paragraph of paragraphs; track paragraph) {
          <p>{{ paragraph }}</p>
          } @if (path) {
          <sg-lib-component-call-to-action-button
            [link]="path"
            class="w-full md:w-fit"
            [buttonText]="buttonText"
            [size]="'small'"
            [rounded]="'large'"
          ></sg-lib-component-call-to-action-button>
          }
        </div>
        <div class="col-span-6 rounded-lg relative overflow-hidden h-full">
          <img
            [src]="imageURL"
            loading="lazy"
            alt="Hintergrundbild"
            class="absolute inset-0 object-cover w-full h-[50vh]"
          />
        </div>
        }
      </div>
      }
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
      .bg-cover {
        background-size: cover;
      }
      .bg-center {
        background-position: center;
      }
    `,
  ],
})
export class TextImageChooseDirectionAndColorComponent {
  @Input() theme: 'dark' | 'light' = 'light';
  @Input() alignment: 'left' | 'right' = 'right';
  @Input() imageURL = '';
  @Input() title: string | null = null;
  @Input() path = '';
  @Input() paragraphs: string[] = [];
  @Input() buttonText = '';

  isMobile: boolean = window.innerWidth <= 768;

  constructor() {
    this.updateLayout();
    console.log('🚀 TextImageChooseDirectionAndColorComponent initialized');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateLayout();
  }

  private updateLayout() {
    this.isMobile = window.innerWidth <= 768;
  }
}
