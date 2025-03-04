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
  HeroContainerComponent,
  ProsConsComponent,
  ImageSliderComponent,
  TextImageChooseDirectionAndColorComponent,
  TableComponent,
  HeroImageComponent,
  CallToActionButtonComponent,
} from '@sg-shared-librarys/ui-components';

import { CommonModule } from '@angular/common';
import { combineLatest, map } from 'rxjs';
import { Material, Process } from '../../../models/production-content.model';

import {
  TechnicalDetailMaterialLabel,
  TechnicalDetailMaterialLabels,
} from '../../../config-files/production.config';
import { PrintedTextComponent } from '../../elements/printed-text/PrintedText.component';
import {
  selectMaterialByName,
  selectProcessTypes,
} from '../../../state/state-threeDPrinting/threeDPrinting.selectors';

@Component({
  selector: 'app-process-type-view',
  standalone: true,
  imports: [
    CommonModule,
    TextImageChooseDirectionAndColorComponent,
    TableComponent,
    HeroImageComponent,
    ImageSliderComponent,
    PrintedTextComponent,
    HeroContainerComponent,
    ProsConsComponent,
    CallToActionButtonComponent,
  ],
  template: `<div class="text-slate-200 ">
    @let processType = this.processTypeSignal()!;
    <!-- Sektion with hero-image and headline -->
    <sg-lib-component-hero-image
      backgroundUrl="https://biocraftlab.com/cdn/shop/articles/Wie_funktioniert_FDM_3D_Druck_1000x.jpg?v=1719421047"
      [subheadline]="processType.informations.oneLineDescription"
      [headline]="processType.informations.label"
    ></sg-lib-component-hero-image>

    <!-- Videosection -->
    <section
      class="flex flex-col items-center justify-center gap-4 min-h-screen"
    >
      <div class="w-full md:w-2/3 ">
        <iframe
          class="w-full aspect-video block max-w-[100%]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- Sections with Q&A -->
    @for (section of processType.informations.contentSections; track
    section.header) {
    <sg-lib-component-text-image-choose-direction-and-color
      [theme]="$index % 2 === 0 ? 'dark' : 'light'"
      [alignment]="$index % 2 === 0 ? 'left' : 'right'"
      [imageURL]="section.imageURL || 'https://via.placeholder.com/800x600'"
      [title]="section.header"
      [paragraphs]="section.paragraphs"
    >
    </sg-lib-component-text-image-choose-direction-and-color>
    }

    <!-- technical Data -->
    <sg-lib-component-hero-container
      backgroundUrl="https://biocraftlab.com/cdn/shop/articles/Wie_funktioniert_FDM_3D_Druck_1000x.jpg?v=1719421047"
    >
      <div
        class="flex flex-col justify-center items-center gap-20 py-40 w-full"
      >
        <div class="flex flex-col justify-center items-center gap-8">
          <p class="text-4xl font-bold text-slate-200 text-center">
            Technische Details
          </p>
          <sg-lib-component-table
            [columns]="technicalDetailsOfProcessColumns()"
            [data]="technicalDetailsOfProcessData()"
            class="w-full lg:w-fit"
          ></sg-lib-component-table>
        </div>

        <div class="flex flex-col justify-center items-center gap-8 w-full">
          <p class="text-4xl font-bold text-slate-200 text-center">
            Materialien
          </p>
          <sg-lib-component-table
            [columns]="materialTechnicalDetailsColumns()"
            [data]="materialTechnicalDetailsData()"
            [links]="materialLinks()"
            class="w-full lg:w-fit"
          ></sg-lib-component-table>
          <sg-lib-component-call-to-action-button
            [buttonText]="'Zur Materialübersicht'"
            link="/3d-druck-infos/materialien-uebersicht"
          ></sg-lib-component-call-to-action-button>
        </div>
      </div>
    </sg-lib-component-hero-container>

    <!-- Call-to-action -->
    <section class="flex flex-col gap-16 py-40" #3dPrintedAnimation>
      <p class="text-3xl font-bold text-slate-200 text-center">
        Haben wir ihr Interesse geweckt?
      </p>
      <app-printed-text
        [trigger]="trigger()"
        [animationSpeed]="175"
        [totalSteps]="30"
        [ids]="['angebotAnfordernButton', 'beratungAnfragenButton']"
        [icon]="'deployed_code'"
        [text]="
          'Fordern Sie ein unverbindliches Angebot an! Und wir drucken Ihnen im ' +
          processType.informations.label +
          ' Verfahren Ihr individuelles Bauteil.'
        "
        [primaryActionLabel]="'Angebot anfordern'"
        [primaryActionRoute]="'/druckanfrage'"
        [secondaryActionLabel]="'Beratung anfragen'"
        [secondaryActionUrl]="'tel:+492282920472'"
      >
      </app-printed-text>
    </section>

    <!-- Vorteile & Nachteile -->
    <sg-lib-component-pros-cons
      [headline]="prosConsData().headline"
      [pros]="prosConsData().pros"
      [cons]="prosConsData().cons"
      [theme]="'light'"
    ></sg-lib-component-pros-cons>

    <!-- completed Projects -->
    <sg-lib-component-image-slider
      [imageUrls]="imageUrls()"
      theme="dark"
      [pagination]="true"
      headline="Bereits realisierte Projekte"
      [subheadline]="
        'Wir verzeichnen bis heute meht als ' +
        processType.informations.numberCompletedProjects +
        ' umgesetzte Projekt mit ' +
        processType.informations.label
      "
    ></sg-lib-component-image-slider>
  </div>`,
})
export class ProcessTypeComponent {
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  processTypeSignal = signal<Process | undefined>(undefined);
  materialsSignal = signal<Material[]>([]);
  trigger = signal(false);

  @ViewChild('3dPrintedAnimation', { static: false })
  sectionElement3d!: ElementRef;

  private observer!: IntersectionObserver;

  constructor() {
    const processPathFromUrl = this.route.snapshot.url
      .map((segment) => segment.path)
      .pop();

    this.store
      .select(selectProcessTypes)
      .pipe(
        map((processTypes) =>
          processTypes.find(
            (processType) =>
              processType.informations.path === processPathFromUrl
          )
        )
      )
      .subscribe((processType) => {
        this.processTypeSignal.set(processType);
        if (processType) {
          // Holen der zugehörigen Materialien
          const materials =
            processType.informations.summary.suitableMaterials.map((mat) =>
              this.store.select(selectMaterialByName(mat.name))
            );

          combineLatest(materials).subscribe((materialData) =>
            this.materialsSignal.set(
              materialData.filter((m) => m !== null) as Material[]
            )
          );
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.sectionElement3d) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.trigger.set(true);
          }
        },
        { threshold: 0.1 }
      );
      this.observer.observe(this.sectionElement3d.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Dynamische Spalten für Prozessdetails
  technicalDetailsOfProcessColumns = computed(() =>
    this.processTypeSignal()?.informations.technicalDetails
      ? Object.values(
          this.processTypeSignal()?.informations.technicalDetails ?? {}
        ).map((detail) => detail.key)
      : []
  );

  // Prozessdetails-Daten
  technicalDetailsOfProcessData = computed(() =>
    this.processTypeSignal()?.informations.technicalDetails
      ? [
          Object.values(
            this.processTypeSignal()?.informations.technicalDetails ?? {}
          ).reduce((acc, detail) => {
            acc[detail.key] = detail.value;
            return acc;
          }, {} as Record<string, string>),
        ]
      : []
  );

  // Dynamische Spalten für Material-Details (inkl. Farben-Spalte, falls vorhanden)
  // Liste der 5 wichtigsten technischen Details, die angezeigt werden sollen
  // Liste der 5 wichtigsten technischen Details
  importantDetails = new Set<TechnicalDetailMaterialLabel>([
    TechnicalDetailMaterialLabels.density,
    TechnicalDetailMaterialLabels.meltingPoint,
    TechnicalDetailMaterialLabels.tensileStrength,
    TechnicalDetailMaterialLabels.thermalResistance,
    TechnicalDetailMaterialLabels.flexibility,
  ]);

  materialTechnicalDetailsColumns = computed(() =>
    this.materialsSignal()?.length > 0
      ? [
          'Material',
          ...Array.from(this.importantDetails), // Set wieder in ein Array umwandeln
        ]
      : []
  );

  materialTechnicalDetailsData = computed(
    () =>
      this.materialsSignal()?.map((material) => {
        console.log(
          '🚀 ~ materialTechnicalDetailsData ~ Technische Details:',
          material.informations.technicalDetails
        );

        const row: Record<string, any> = {
          Material: material.type.name, // Erste Spalte mit dem Materialnamen
        };

        Object.values(material.informations.technicalDetails).forEach(
          (detail) => {
            if (
              this.importantDetails.has(
                detail.key as TechnicalDetailMaterialLabel
              )
            ) {
              row[detail.key] = detail.value;
            }
          }
        );

        console.log('🚀 ~ materialTechnicalDetailsData ~ row:', row);
        return row;
      }) ?? []
  );

  // Farben für jedes Material extrahieren
  materialColors = computed(() => {
    const colors = this.materialsSignal()?.reduce((acc, material) => {
      if (material.informations.summary.chooseableColors?.length) {
        acc[material.type.name] =
          material.informations.summary.chooseableColors.map(
            (color) => color.hex
          );
      }
      return acc;
    }, {} as Record<string, string[]>);

    console.log('Material Colors:', colors); // Debugging-Log
    return colors;
  });

  // Dynamische Links für Materialien
  materialLinks = computed(() =>
    this.materialsSignal()?.reduce((acc, material) => {
      if (material.type.path) {
        acc[
          material.type.name
        ] = `/3d-druck-infos/materialien/${material.type.path}`;
      }
      return acc;
    }, {} as Record<string, string>)
  );

  imageUrls = computed(
    () =>
      this.processTypeSignal()?.informations.media.additionalImages?.map(
        (img) => img.url
      ) || []
  );

  prosConsData = computed(() => {
    const processType = this.processTypeSignal();
    if (!processType) return { pros: [], cons: [], headline: '' };

    return {
      pros: processType.informations.summary.advantages ?? [],
      cons: processType.informations.summary.disadvantages ?? [],
      headline: processType.informations.label,
    };
  });
}
