import {
  Component,
  input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightElementsDirective } from '@sg-shared-librarys/directives';
import { Router } from '@angular/router';
import { CallBackRequestService } from '@sg-shared-librarys/services';

@Component({
  selector: 'app-printed-text',
  standalone: true,
  imports: [CommonModule, HighlightElementsDirective],
  template: `
    <div
      class="h-auto lg:h-96 flex flex-col lg:flex-row justify-center items-center border border-primary-300 bg-primary-500 relative rounded-lg p-4 py-24 lg:p-16 gap-4 lg:gap-0"
    >
      <!-- Fortschrittsanzeige oben links -->
      <div
        class="progress-label absolute top-2 left-2 bg-white text-primary-500 p-1 rounded m-auto"
      >
        Druckprozess: {{ progress() }}%
      </div>
      <div
        class="card-container overflow-hidden"
        appHighlightElements
        [ids]="ids()"
        [transitionTime]="550"
        [brightness]="35"
        [trigger]="progress() === 80"
        [repeatCount]="2"
      >
        <div class="relative p-2">
          <div
            class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10"
          >
            <span
              id="logoIconInActionBox"
              class="material-symbols-outlined text-6xl lg:text-9xl leading-none text-white"
            >
              {{ icon() }}
            </span>
            <div class="flex flex-col gap-4 lg:gap-8">
              <p class="text-sm lg:text-lg text-white text-center lg:text-left">
                {{ text() }}
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                class="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  id="angebotAnfordernButton"
                  class="bg-action-500 text-white py-2 px-4 text-base lg:text-xl rounded-full hover:bg-action-600"
                >
                  <button
                    (click)="navigateToPrimaryAction()"
                    (keyup.enter)="navigateToPrimaryAction()"
                    (keydown.space)="navigateToPrimaryAction()"
                  >
                    {{ primaryActionLabel() }}
                  </button>
                </button>
                <button
                  id="beratungAnfragenButton"
                  class="bg-secondary-500 text-white py-2 px-4 text-base lg:text-xl rounded-full hover:bg-secondary-700"
                  (click)="this.callBackRequestService.openDialog()"
                >
                  <a>
                    {{ secondaryActionLabel() }}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            *ngFor="let clip of clipPaths(); let i = index"
            class="clip-path-layer absolute bg-primary-500"
            [style.height.%]="clip.heightPercentage"
            [style.width.%]="clip.widthPercentage"
            [style.transitionDuration.ms]="animationSpeed()"
            [style.top.%]="clip.topPercentage"
          ></div>
        </div>
      </div>
    </div>
  `,
})
export class PrintedTextComponent implements OnInit, OnChanges {
  callBackRequestService = inject(CallBackRequestService);
  icon = input.required<string>();
  text = input.required<string>();
  primaryActionLabel = input.required<string>();
  primaryActionRoute = input.required<string>();
  secondaryActionLabel = input.required<string>();
  secondaryActionUrl = input.required<string>();
  ids = input.required<string[]>();
  animationSpeed = input.required<number>();
  totalSteps = input.required<number>();
  trigger = input.required<boolean>();

  @ViewChild('printContainer') printContainer!: ElementRef;

  router = inject(Router);
  clipPaths = signal<
    {
      heightPercentage: number;
      widthPercentage: number;
      topPercentage: number;
    }[]
  >([]);
  currentStep = signal<number>(0);

  progress = () =>
    Math.min(100, Math.round((this.currentStep() / this.totalSteps()) * 100));

  ngOnInit(): void {
    this.initializeClipPaths();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trigger']) {
      if (this.trigger()) {
        this.startPrintEffect();
      } else {
        this.resetClipPaths();
      }
    }
  }

  navigateToPrimaryAction() {
    this.router.navigate([this.primaryActionRoute()]);
  }

  initializeClipPaths() {
    const steps = this.totalSteps();
    this.clipPaths.set(
      Array.from({ length: steps }, (_, i) => {
        const heightPercentage = 100 / steps;
        const topPercentage = 100 - (i + 1) * heightPercentage;
        return { heightPercentage, widthPercentage: 100, topPercentage };
      })
    );
  }

  startPrintEffect() {
    this.currentStep.set(0);
    this.animateClipPaths();
  }

  resetClipPaths() {
    this.clipPaths.update((clips) =>
      clips.map((clip) => ({ ...clip, widthPercentage: 100 }))
    );
    this.currentStep.set(0);
  }

  animateClipPaths() {
    if (
      this.currentStep() >= this.totalSteps() ||
      !this.clipPaths()[this.currentStep()]
    )
      return;

    this.clipPaths.update((clips) => {
      clips[this.currentStep()].widthPercentage = 0;
      return [...clips];
    });

    this.currentStep.set(this.currentStep() + 1);
    setTimeout(() => {
      this.animateClipPaths();
    }, this.animationSpeed());
  }
}
