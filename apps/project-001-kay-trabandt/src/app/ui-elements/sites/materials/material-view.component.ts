import {
  Component,
  signal,
  computed,
  inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
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
      class="overflow-hidden text-ellipsis"
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
      class="overflow-hidden text-ellipsis"
    ></sg-lib-component-text-image-choose-direction-and-color>
    }

    <!-- Technische Details des Materials -->
    <sg-lib-component-hero-container
      [backgroundUrl]="material.informations.media.mainImage.url"
    >
      <div
        class="flex flex-col justify-center items-center gap-20 py-40 w-full"
      >
        <!-- Materialeigenschaften -->
        <div class="flex flex-col justify-center items-center gap-8 w-full">
          <p
            class="text-4xl font-bold text-slate-200 text-center overflow-hidden text-ellipsis "
          >
            Technische Eigenschaften
          </p>
          <sg-lib-component-table
            [columns]="materialTechnicalDetailsColumns()"
            [data]="materialTechnicalDetailsData()"
            class="w-full lg:w-fit"
          ></sg-lib-component-table>
        </div>

        <!-- Geeignete Verfahren für das Material -->
        <div class="flex flex-col justify-center items-center gap-8 w-full">
          <p
            class="text-4xl font-bold text-slate-200 text-center overflow-hidden text-ellipsis"
          >
            Geeignete Verfahren
          </p>
          <sg-lib-component-table
            [columns]="processTechnicalDetailsColumns()"
            [data]="processTechnicalDetailsData()"
            [links]="processLinks()"
            class="w-full lg:w-fit"
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
      <p
        class="text-3xl font-bold text-slate-200 text-center overflow-hidden text-ellipsis"
      >
        Interesse an {{ material.informations.label }}, als Druckmaterial?
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
        [primaryActionRoute]="'/druckanfrage'"
        [secondaryActionLabel]="'Beratung anfragen'"
        [secondaryActionUrl]="'tel:+492282920472'"
        class="overflow-hidden text-ellipsis"
      ></app-printed-text>
    </section>
  </div>`,
})
export class MaterialViewComponent implements AfterViewInit, OnDestroy {
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

    console.log('🔍 Material Path from URL:', materialPathFromUrl);

    if (!materialPathFromUrl) throw new Error('No material path found in URL');

    this.store
      .select(selectMaterialByPath(materialPathFromUrl))
      .subscribe((material) => {
        console.log('📦 Material from Store:', material);

        this.materialSignal.set(material);

        if (material) {
          console.log(
            '✅ Material is defined. Checking informations:',
            material.informations
          );

          if (!material.informations) {
            console.error('❌ Error: material.informations is undefined');
          }

          // Holen der zugehörigen Prozessarten
          const processes =
            material.informations?.summary?.suitableProcesses?.map((proc) =>
              this.store
                .select(selectProcessTypes)
                .pipe(
                  map((processTypes) =>
                    processTypes.find((p) => p.type.name === proc.name)
                  )
                )
            ) ?? [];

          console.log('🔄 Suitable Processes:', processes);

          // Alle passenden Prozesse abrufen und speichern
          combineLatest(processes).subscribe((processData) => {
            console.log('📊 Process Data:', processData);
            this.processesSignal.set(
              processData.filter((p) => p !== null) as Process[]
            );
          });
        } else {
          console.error(
            '❌ Material not found in store for path:',
            materialPathFromUrl
          );
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.sectionElementMaterial) {
      console.log('🎥 Observing Material Animation Section');
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log('📌 Material section is visible!');
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
      console.log('🛑 Disconnecting observer');
      this.observer.disconnect();
    }
  }

  // Spalten für die Material-Tabelle
  materialTechnicalDetailsColumns = computed(() => {
    console.log('📋 Computing Technical Details Columns');
    return this.materialSignal()?.informations?.technicalDetails
      ? Object.values(
          this.materialSignal()?.informations.technicalDetails ?? {}
        ).map((detail) => detail.key)
      : [];
  });

  // Daten für die Material-Tabelle
  materialTechnicalDetailsData = computed(() => {
    console.log('📊 Computing Technical Details Data');
    return this.materialSignal()?.informations?.technicalDetails
      ? [
          Object.values(
            this.materialSignal()?.informations.technicalDetails ?? {}
          ).reduce((acc, detail) => {
            acc[detail.key] = detail.value;
            return acc;
          }, {} as Record<string, string>),
        ]
      : [];
  });

  materialAdvantages = computed(() => {
    console.log('✅ Computing Material Advantages');
    return this.materialSignal()?.informations?.summary?.advantages ?? [];
  });

  materialDisadvantages = computed(() => {
    console.log('❌ Computing Material Disadvantages');
    return this.materialSignal()?.informations?.summary?.disadvantages ?? [];
  });

  imageUrls = computed(() => {
    console.log('🖼 Computing Image URLs');
    return (
      this.materialSignal()?.informations?.media?.additionalImages?.map(
        (img) => img.url
      ) || []
    );
  });

  // Liste der 5 wichtigsten technischen Details für Prozessarten
  importantProcessDetails = new Set<TechnicalDetailProcessLabel>([
    TechnicalDetailProcessLabels.massGenauigkeit,
    TechnicalDetailProcessLabels.maximaleBaugroesse,
    TechnicalDetailProcessLabels.mindestMerkmalsgroesse,
    TechnicalDetailProcessLabels.schichtStaerke,
    TechnicalDetailProcessLabels.standardVorlaufzeiten,
  ]);

  processTechnicalDetailsColumns = computed(() => {
    console.log('📊 Computing Process Technical Details Columns');
    return this.processesSignal()?.length > 0
      ? ['Prozessarten', ...Array.from(this.importantProcessDetails)]
      : [];
  });

  processTechnicalDetailsData = computed(
    () =>
      this.processesSignal()?.map((process) => {
        console.log('🔎 Technische Details für Prozess:', process);

        const row: Record<string, string> = {
          Prozessarten: process.type.name,
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

  processLinks = computed(() => {
    console.log('🔗 Computing Process Links');
    return this.processesSignal()?.reduce((acc, process) => {
      if (process.informations.path) {
        acc[
          process.type.name
        ] = `/3d-druck-infos/fertigungsverfahren/${process.informations.path}`;
      }
      return acc;
    }, {} as Record<string, string>);
  });
}
