import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TextImageChooseDirectionAndColorComponent } from '@sg-shared-librarys/ui-components';
import { Process } from '../../../models/production-content.model';
import { selectProcessTypes } from '../../../state/state-threeDPrinting/threeDPrinting.selectors';

@Component({
  selector: 'app-process-types-overview',
  standalone: true,
  imports: [CommonModule, TextImageChooseDirectionAndColorComponent],
  template: `
    <section
      class="flex flex-col items-center text-center text-slate-200 gap-2 lg:gap-8"
    >
      <div class="flex flex-col">
        <p class="text-3xl md:text-5xl font-bold">Verfahren im 3D-Druck</p>
        <p class="text-slate-500 text-sm md:text-base">
          Erfahren Sie mehr über die verschiedenen 3D-Drucktechnologien, <br />
          ihre Anwendungen und Vorteile.
        </p>
      </div>

      <div class="w-11/12 md:w-2/3">
        <iframe
          class="w-full aspect-video block max-w-[100%]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="flex flex-col lg:p-8 text-slate-300 text-lg">
        <p class=" text-justify p-2">
          In der additiven Fertigung gibt es verschiedene Verfahren, die je nach
          Anwendungsbereich ihre spezifischen Vorteile bieten. Von Fused
          Deposition Modeling (FDM) für Prototypen und funktionale Bauteile über
          Stereolithografie (SLA) für hochdetaillierte Modelle bis hin zu
          selektivem Lasersintern (SLS) für belastbare und komplexe Strukturen –
          jedes Verfahren hat seine Stärken.
        </p>
        <p class=" text-justify p-2">
          Durch den Einsatz modernster Technologien und hochpräziser Maschinen
          stellen wir sicher, dass jedes Bauteil mit höchster Qualität gefertigt
          wird. Unsere Fertigungsverfahren ermöglichen eine effiziente
          Produktion mit minimalem Materialeinsatz und maximaler Designfreiheit.
        </p>
      </div>
    </section>
    <div *ngIf="processes$ | async as processes; else loading">
      <ng-container *ngIf="processes.length > 0; else noData">
        <ng-container *ngFor="let processe of processes; let i = index">
          <sg-lib-component-text-image-choose-direction-and-color
            [theme]="i % 2 === 0 ? 'dark' : 'light'"
            [alignment]="i % 2 === 0 ? 'left' : 'right'"
            [imageURL]="processe.informations.media.additionalImages?.[0]?.url || ''"
            [title]="processe.informations.label"
            [paragraphs]="[
              processe.informations.callToAction.paragraph1,
              processe.informations.callToAction.paragraph2,
              processe.informations.callToAction.paragraph3
            ]"
            [path]="
              '3d-druck-infos/fertigungsverfahren/' + processe.informations.path
            "
            buttonText="Mehr Informationen"
            class="overflow-hidden"
          ></sg-lib-component-text-image-choose-direction-and-color>
        </ng-container>
      </ng-container>
    </div>

    <ng-template #loading>
      <p>Loading data...</p>
    </ng-template>

    <ng-template #noData>
      <p>No data available.</p>
    </ng-template>
  `,
})
export class ProcessTypesOverviewComponent {
  store = inject(Store);
  processes$: Observable<Process[]> = this.store.select(selectProcessTypes);
}
