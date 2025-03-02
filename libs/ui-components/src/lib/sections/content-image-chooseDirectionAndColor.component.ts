import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlideInChildrenDirective } from '@sg-shared-librarys/directives';

@Component({
  selector: 'sg-lib-component-content-image-choose-direction-and-color',
  standalone: true,
  imports: [CommonModule, SlideInChildrenDirective],
  template: `
    <section
      [ngClass]="[
        theme === 'light'
          ? 'bg-slate-300 text-primary-500'
          : 'bg-gray-800 text-white'
      ]"
      class="min-h-[80vh] flex flex-col"
    >
      <div class="grid grid-cols-9 gap-6 flex-grow w-full">
        <!-- Bild links, Text rechts -->
        @if (alignment === 'left') {
        <div
          class="col-span-4 bg-cover bg-center rounded-lg h-full"
          [style.background-image]="'url(' + imageUrlLeft + ')'"
        ></div>
        <div
          appSlideInChildren
          [slideDirection]="'right'"
          class="col-span-5 flex flex-col justify-start items-start p-4 xl:p-10 h-full"
        >
          <ng-content select="[text-content-left]"></ng-content>
        </div>
        }

        <!-- Text links, Bild rechts -->
        @if (alignment === 'right') {
        <div
          appSlideInChildren
          [slideDirection]="'left'"
          class="col-span-5 flex flex-col justify-start items-start p-4 xl:p-10 h-full"
        >
          <ng-content select="[text-content-right]"></ng-content>
        </div>
        <div
          class="col-span-4 bg-cover bg-center rounded-lg h-full"
          [style.background-image]="'url(' + imageUrlRight + ')'"
        ></div>
        }
      </div>
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
export class ContentImageChooseDirectionAndColorComponent {
  @Input() theme: 'dark' | 'light' = 'light';
  @Input() alignment: 'left' | 'right' = 'right';
  @Input() imageUrlLeft = '';
  @Input() imageUrlRight = '';
}
