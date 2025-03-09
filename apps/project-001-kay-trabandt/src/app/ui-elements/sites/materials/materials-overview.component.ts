import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Material } from '../../../models/production-content.model';
import { TextImageChooseDirectionAndColorComponent } from '@sg-shared-librarys/ui-components';
import { selectMaterials } from '../../../state/state-threeDPrinting/threeDPrinting.selectors';

@Component({
  selector: 'app-materials-overview',
  standalone: true,
  template: `
    <section
      class="flex flex-col items-center text-center text-slate-200 gap-12"
    >
      <div class="flex flex-col">
        <p class="text-3xl md:text-5xl font-bold">Materialübersicht</p>
        <p class="text-slate-500 text-sm md:text-base">
          Entdecken Sie die Eigenschaften und Anwendungsbereiche unserer
          3D-Druckmaterialien.
        </p>
      </div>

      <div class="w-11/12 lg:w-8/12 2xl:w-1/2">
        <iframe
          class="w-full aspect-video block max-w-[100%]"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex flex-col text-slate-300 lg:text-lg ">
        <p class="text-justify p-2">
          Unsere Materialien beziehen wir von unserem renommierten Partner XY,
          der sich durch höchste Qualität, Nachhaltigkeit und innovative
          Fertigungsmethoden auszeichnet.
        </p>
        <p class=" text-justify p-2">
          Dank modernster Technologien und strengen Qualitätskontrollen
          gewährleisten wir, dass jedes Material optimal für den 3D-Druck
          geeignet ist und den höchsten Anforderungen in Design, Funktionalität
          und Langlebigkeit entspricht.
        </p>
      </div>
    </section>

    @if (materials().length > 0) { @for (material of materials(); track
    material.informations.label) {
    <sg-lib-component-text-image-choose-direction-and-color
      [theme]="materialIndex(material) % 2 === 0 ? 'dark' : 'light'"
      [alignment]="materialIndex(material) % 2 === 0 ? 'left' : 'right'"
      [imageURL]="material.informations.media.mainImage.url"
      [title]="material.informations.label"
      [paragraphs]="[
        material.informations.oneLineDescription || '',
        'Dichte: ' + material.informations.technicalDetails.density.value,
        'Schmelzpunkt: ' +
          material.informations.technicalDetails.meltingPoint.value
      ]"
      [path]="'/3d-druck-infos/materialien/' + material.informations.path"
      buttonText="Mehr Informationen"
      class="overflow-hidden"
    ></sg-lib-component-text-image-choose-direction-and-color>
    } }
  `,
  imports: [TextImageChooseDirectionAndColorComponent],
})
export class MaterialsOverviewComponent {
  store = inject(Store);
  materials = signal<Material[]>([]);

  constructor() {
    this.store.select(selectMaterials).subscribe((materials) => {
      this.materials.set(materials);
    });
  }

  materialIndex(material: Material): number {
    return this.materials().findIndex(
      (m) => m.informations.label === material.informations.label
    );
  }
}
