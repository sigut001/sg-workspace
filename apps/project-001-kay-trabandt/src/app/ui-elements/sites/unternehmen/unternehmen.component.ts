import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  signal,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CustomerReviewsComponent,
  CompanyValuesSliderComponent,
  ProcessLineComponent,
  CallToActionButtonComponent,
} from '@sg-shared-librarys/ui-components';
import { SlideInChildrenDirective } from '@sg-shared-librarys/directives';
import {
  CallBackRequestService,
  ScreenSizeService,
  WarningDialogService,
} from '@sg-shared-librarys/services';
import { PrintedTextComponent } from '../../elements/printed-text/PrintedText.component';
import { mediaURLs } from '../../../media/mediaURL';
@Component({
  selector: 'app-unternehmen',
  standalone: true,
  imports: [
    CommonModule,
    PrintedTextComponent,
    MatIconModule,
    CustomerReviewsComponent,
    CompanyValuesSliderComponent,
    SlideInChildrenDirective,
    ProcessLineComponent,
    CallToActionButtonComponent,
  ],
  templateUrl: './unternehmen.component.html',
})
export class UnternehmenComponent implements OnInit, AfterViewInit, OnDestroy {
  warningDialogService = inject(WarningDialogService);
  callBackRequestService = inject(CallBackRequestService);
  screenSizeService = inject(ScreenSizeService);
  partners = signal<string[]>(['./logo.png', './logo.png', './logo.png']);
  trigger = signal(false);

  @ViewChild('3dPrintedAnimation', { static: false })
  sectionElement3d!: ElementRef;
  #observer!: IntersectionObserver;

  mediaURLs = mediaURLs;
  ngOnInit(): void {
    this.warningDialogService.openDialog();
  }

  ngAfterViewInit(): void {
    const sectionElement = this.sectionElement3d.nativeElement;

    if (sectionElement) {
      this.#observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.trigger.set(true);
            console.log('trigger is set to: ', this.trigger());
          }
        },
        { threshold: 0.1 }
      );

      this.#observer.observe(sectionElement);
    }
  }

  ngOnDestroy(): void {
    if (this.#observer) {
      this.#observer.disconnect();
    }
  }
}
