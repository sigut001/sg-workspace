import {
  Component,
  signal,
  computed,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  TableComponent,
  HeroImageComponent,
  HeroContainerComponent,
  ProsConsComponent,
  ImageSliderComponent,
  TextImageChooseDirectionAndColorComponent,
  CallToActionButtonComponent,
} from '@sg-shared-librarys/ui-components';

import { CommonModule } from '@angular/common';
import { Material, Process } from '../../../models/production-content.model';
import { PrintedTextComponent } from '../../elements/printed-text/PrintedText.component';
import {
  TechnicalDetailProcessLabel,
  TechnicalDetailProcessLabels,
} from '../../../config-files/production.config';
import { combineLatest, map } from 'rxjs';
import {
  selectMaterialByPath,
  selectProcessTypes,
} from '../../../state/state-threeDPrinting/threeDPrinting.selectors';

@Component({
  selector: 'app-material-view',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    HeroImageComponent,
    HeroContainerComponent,
    ProsConsComponent,
    PrintedTextComponent,
    ImageSliderComponent,
    TextImageChooseDirectionAndColorComponent,
    CallToActionButtonComponent,
  ],
  template: `<div class="text-slate-200">
    @let material = this.materialSignal()!;

    <!-- Hero Image -->
    <sg-lib-component-hero-image
      [backgroundUrl]="material.informations.media.heroImage.url"
      [subheadline]="material.informations.oneLineDescription"
      [headline]="material.informations.label"
    ></sg-lib-component-hero-image>
    <!-- Eigenschaften & Anwendung -->
    @for (section of material.informations.contentSections; track
    section.header) {
    <sg-lib-component-text-image-choose-direction-and-color
      [theme]="$index % 2 === 0 ? 'dark' : 'light'"
      [alignment]="$index % 2 === 0 ? 'left' : 'right'"
      [imageURL]="section.imageURL || 'https://via.placeholder.com/800x600'"
      [title]="section.header"
      [paragraphs]="section.paragraphs"
    ></sg-lib-component-text-image-choose-direction-and-color>
    }

    <!-- Technische Details des Materials -->
    <sg-lib-component-hero-container
      [backgroundUrl]="material.informations.media.mainImage.url"
    >
      <div class="flex flex-col justify-center items-center gap-20 py-40">
        <!-- Materialeigenschaften -->
        <div class="flex flex-col justify-center items-center gap-8">
          <p class="text-4xl font-bold text-slate-200 text-center">
            Technische Eigenschaften von {{ material.informations.label }}
          </p>
          <sg-lib-component-table
            [columns]="materialTechnicalDetailsColumns()"
            [data]="materialTechnicalDetailsData()"
          ></sg-lib-component-table>
        </div>

        <!-- Geeignete Verfahren für das Material -->
        <div class="flex flex-col justify-center items-center gap-8">
          <p class="text-4xl font-bold text-slate-200 text-center">
            Geeignete Verfahren für {{ material.informations.label }}
          </p>
          <sg-lib-component-table
            [columns]="processTechnicalDetailsColumns()"
            [data]="processTechnicalDetailsData()"
            [links]="processLinks()"
          ></sg-lib-component-table>
          <sg-lib-component-call-to-action-button
            [buttonText]="'Alle Fertigungsverfahren'"
            link="/3d-druck-infos/fertigungsverfahren-uebersicht"
          ></sg-lib-component-call-to-action-button>
        </div>
      </div>
    </sg-lib-component-hero-container>

    <!-- Call-to-action -->
    <section class="flex flex-col gap-16 py-40" #materialAnimation>
      <p class="text-3xl font-bold text-slate-200 text-center">
        Interesse an {{ material.informations.label }} als Durckmaterial?
      </p>
      <app-printed-text
        [trigger]="trigger()"
        [animationSpeed]="175"
        [totalSteps]="30"
        [ids]="['angebotAnfordernButton', 'beratungAnfragenButton']"
        [icon]="'inventory'"
        [text]="
          'Fragen Sie jetzt Ihr individuelles Bauteil aus ' +
          material.informations.label +
          ' an!'
        "
        [primaryActionLabel]="'Angebot anfordern'"
        [primaryActionRoute]="'/materialanfrage'"
        [secondaryActionLabel]="'Beratung anfragen'"
        [secondaryActionUrl]="'tel:+492282920472'"
      ></app-printed-text>
    </section>

    <!-- Vorteile & Nachteile -->
    <sg-lib-component-pros-cons
      [headline]="material.informations.label + ' Eigenschaften'"
      [pros]="materialAdvantages()"
      [cons]="materialDisadvantages()"
      [theme]="'light'"
    ></sg-lib-component-pros-cons>

    <!-- Galerie -->
    <sg-lib-component-image-slider
      [imageUrls]="imageUrls()"
      theme="dark"
      [pagination]="true"
      headline="Angefertigte Kundenprojekte in {{
        material.informations.label
      }}"
    ></sg-lib-component-image-slider>
  </div>`,
})
export class MaterialViewComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  materialSignal = signal<Material | null>(null);
  processesSignal = signal<Process[]>([]);
  trigger = signal(false);

  @ViewChild('materialAnimation', { static: false })
  sectionElementMaterial!: ElementRef;

  private observer!: IntersectionObserver;

  constructor() {
    const materialPathFromUrl = this.route.snapshot.url
      .map((segment) => segment.path)
      .pop();

    this.store
      .select(selectMaterialByPath(materialPathFromUrl!))
      .subscribe((material) => {
        this.materialSignal.set(material);
        if (material) {
          // Holen der zugehörigen Prozessarten
          const processes = material.informations.summary.suitableProcesses.map(
            (proc) =>
              this.store
                .select(selectProcessTypes)
                .pipe(
                  map((processTypes) =>
                    processTypes.find((p) => p.type.name === proc.name)
                  )
                )
          );

          // Alle passenden Prozesse abrufen und speichern
          combineLatest(processes).subscribe((processData) =>
            this.processesSignal.set(
              processData.filter((p) => p !== null) as Process[]
            )
          );
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.sectionElementMaterial) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.trigger.set(true);
          }
        },
        { threshold: 0.1 }
      );
      this.observer.observe(this.sectionElementMaterial.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Spalten für die Material-Tabelle
  materialTechnicalDetailsColumns = computed(() =>
    this.materialSignal()?.informations.technicalDetails
      ? Object.values(
          this.materialSignal()?.informations.technicalDetails ?? {}
        ).map((detail) => detail.key)
      : []
  );

  // Daten für die Material-Tabelle
  materialTechnicalDetailsData = computed(() =>
    this.materialSignal()?.informations.technicalDetails
      ? [
          Object.values(
            this.materialSignal()?.informations.technicalDetails ?? {}
          ).reduce((acc, detail) => {
            acc[detail.key] = detail.value;
            return acc;
          }, {} as Record<string, string>),
        ]
      : []
  );

  materialAdvantages = computed(
    () => this.materialSignal()?.informations.summary.advantages ?? []
  );

  materialDisadvantages = computed(
    () => this.materialSignal()?.informations.summary.disadvantages ?? []
  );

  imageUrls = computed(
    () =>
      this.materialSignal()?.informations.media.additionalImages?.map(
        (img) => img.url
      ) || []
  );

  // Liste der 5 wichtigsten technischen Details für Prozessarten
  importantProcessDetails = new Set<TechnicalDetailProcessLabel>([
    TechnicalDetailProcessLabels.massGenauigkeit,
    TechnicalDetailProcessLabels.maximaleBaugroesse,
    TechnicalDetailProcessLabels.mindestMerkmalsgroesse,
    TechnicalDetailProcessLabels.schichtStaerke,
    TechnicalDetailProcessLabels.standardVorlaufzeiten,
  ]);

  processTechnicalDetailsColumns = computed(() =>
    this.processesSignal()?.length > 0
      ? ['Prozessarten', ...Array.from(this.importantProcessDetails)] // "Prozessarten" als erste Spalte
      : []
  );

  processTechnicalDetailsData = computed(
    () =>
      this.processesSignal()?.map((process) => {
        console.log(
          'Technische Details:',
          process.informations.technicalDetails
        );

        const row: Record<string, any> = {
          Prozessarten: process.type.name, // Erste Spalte mit dem Verfahrenstyp
        };

        Object.values(process.informations.technicalDetails).forEach(
          (detail) => {
            if (
              this.importantProcessDetails.has(
                detail.key as TechnicalDetailProcessLabel
              )
            ) {
              row[detail.key] = detail.value;
            }
          }
        );

        console.log('🚀 ~ processTechnicalDetailsData ~ row:', row);
        return row;
      }) ?? []
  );

  processLinks = computed(() =>
    this.processesSignal()?.reduce((acc, process) => {
      if (process.informations.path) {
        acc[
          process.type.name
        ] = `/3d-druck-infos/fertigungsverfahren/${process.informations.path}`;
      }
      return acc;
    }, {} as Record<string, string>)
  );
}
