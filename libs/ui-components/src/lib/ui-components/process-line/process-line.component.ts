import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProcessLineElement } from './process-line-element.model';
import {
  HoverScaleDirective,
  HoverShadowDirective,
  SequentialFadeInDirective,
} from '@sg-shared-librarys/directives';
import { selectProcessLineElements } from './state/costumer-reviews-state.selectors';
import { Router } from '@angular/router';
import { CallBackRequestService } from '@sg-shared-librarys/services';

@Component({
  selector: 'sg-lib-component-process-line',
  standalone: true,
  imports: [
    CommonModule,
    SequentialFadeInDirective,
    HoverScaleDirective,
    HoverShadowDirective,
  ],
  template: `
    <div #processLineContainer class="flex flex-col items-center w-full">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        appSequentialFadeIn
        [trigger]="trigger"
        [animationDelay]="400"
        [animationDuration]="700"
      >
        <div
          *ngFor="let element of processLineElements(); let i = index"
          (click)="getFunctionForProcessLineElement(i)"
          class="group p-4 bg-primary-500 border border-primary-300 shadow-sm rounded-lg opacity-0 h-60 w-full flex flex-col justify-center cursor-pointer transition-all duration-300"
          tabindex="0"
          (keyup.enter)="getFunctionForProcessLineElement(i)"
          (keydown.space)="getFunctionForProcessLineElement(i)"
          appHoverScale
          appHoverShadow
        >
          <!-- Zahlen-Container -->
          <div
            class="flex items-center justify-center w-10 h-10 bg-slate-200 text-black rounded-full mb-4 mx-auto transition-colors duration-300 group-hover:bg-action-500 group-hover:text-white"
          >
            {{ i + 1 }}
          </div>

          <div class="text-slate-200 text-center">
            <h3 class="text-lg font-bold mb-2">{{ element.title }}</h3>
            <p class="text-sm">{{ element.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Falls du lieber direkt mit CSS arbeitest */
      .group:hover .number-circle {
        background-color: var(
          --color-action-500
        ); /* Falls du CSS Variablen nutzt */
        color: white;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      }
    `,
  ],
})
export class ProcessLineComponent implements AfterViewInit, OnDestroy {
  router = inject(Router);
  callBackRequestService = inject(CallBackRequestService);
  @ViewChild('processLineContainer', { static: true })
  processLineContainer!: ElementRef;
  processLineElements = signal<ProcessLineElement[]>([]);
  store = inject(Store);
  trigger = false; // Trigger für die Animation
  observer: IntersectionObserver | null = null;

  processLineElements$: Observable<ProcessLineElement[]> = this.store.select(
    selectProcessLineElements
  );

  constructor(private renderer: Renderer2) {
    this.processLineElements$.subscribe((elements) => {
      this.processLineElements.set(elements);
    });
  }

  ngAfterViewInit(): void {
    if (!this.processLineContainer) {
      console.error('Process line container not found.');
      return;
    }

    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  getFunctionForProcessLineElement(processLineIndex: number) {
    if (processLineIndex !== 0) {
      this.router.navigate(['/druckanfrage']);
    } else {
      this.callBackRequestService.openDialog();
    }
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.trigger = true;
            this.observer?.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (this.processLineContainer) {
      this.observer.observe(this.processLineContainer.nativeElement);
    }
  }
}
