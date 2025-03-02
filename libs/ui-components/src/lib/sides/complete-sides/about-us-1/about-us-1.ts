import {
  Component,
  signal,
  computed,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { CompanyInformations } from '../../../models/basicModels/company-informations.model';

import { JobPositions } from '../../../models/basicModels/company-personal.model';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from '../../../sections/hero-image.component';
import { PersonalCardComponent } from './personal-karten.component';
import { CompanyHistorieComponent } from './company-historie.component';
import { CompanyValuesComponent } from './company-values.component';
import { HeroContainerComponent } from '../../../sections/hero-container.component';
import {
  selectCompanyInformations,
  selectJobPositions,
} from './state/about-us.selectors';

@Component({
  selector: 'sg-lib-component-about-us-1',
  standalone: true,
  imports: [
    CommonModule,
    HeroImageComponent,
    PersonalCardComponent,
    CompanyHistorieComponent,
    CompanyValuesComponent,
    HeroContainerComponent,
  ],
  template: `
    <sg-lib-component-hero-image
      backgroundUrl="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      [subheadline]="
        'Erfahren Sie mehr über unser Unternehmen und die Menschen, die es ausmachen.'
      "
      headline="Über uns"
    ></sg-lib-component-hero-image>

    <section>
      <div class="flex flex-col items-center text-center text-slate-200">
        <p class="text-3xl md:text-5xl font-bold p-8">Unsere Geschichte</p>
      </div>
      <sg-lib-component-company-historie
        [companyHistorieCards]="companyHistorieCards()"
      ></sg-lib-component-company-historie>
    </section>

    <!-- Technische Details des Materials -->
    <sg-lib-component-hero-container
      backgroundUrl="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <section
        #companyValuesSection
        class="flex flex-col justify-center items-center"
      >
        <div class="flex flex-col items-center text-center text-slate-200 p-8">
          <p class="text-3xl md:text-5xl font-bold">Unsere Unternehmenswerte</p>
        </div>
        <sg-lib-component-company-values
          [values]="companyValuesList()"
          [coreValues]="companyCoreValues()"
          [detailedValues]="companyDetailedValues()"
          [trigger]="companyValuesInView()"
        ></sg-lib-component-company-values>
      </section>
    </sg-lib-component-hero-container>

    <section>
      <div class="flex flex-col items-center text-center text-slate-200 p-8">
        <p class="text-3xl md:text-5xl font-bold">Unser Team</p>
      </div>
      <sg-lib-component-personal-karten
        [employees]="employeesList()"
      ></sg-lib-component-personal-karten>
    </section>
  `,
})
export class AboutUs1Component {
  companyInformations = signal<CompanyInformations | undefined>(undefined);
  jobPositions = signal<JobPositions | undefined>(undefined);
  companyValuesInView = signal(false); // Signal für das Sichtbarkeits-Triggern

  @ViewChild('companyValuesSection', { static: true })
  companyValuesSection!: ElementRef;

  ngAfterViewInit(): void {
    if (this.companyValuesSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.companyValuesInView.set(true);
            observer.disconnect(); // Observer deaktivieren, nachdem das Element sichtbar wurde
          }
        },
        { threshold: 0.5 } // Wird ausgelöst, wenn 30% des Elements sichtbar sind
      );

      observer.observe(this.companyValuesSection.nativeElement);
    }
  }

  // Berechnet die Unternehmenswerte für die CompanyValuesComponent
  companyValuesList = computed(
    () => this.companyInformations()?.companyValues?.map((v) => v.label) || []
  );

  companyCoreValues = computed(
    () =>
      this.companyInformations()?.companyValues?.map((v) => ({
        image: v.imgUrl,
        name: v.label,
      })) || []
  );

  companyDetailedValues = computed(
    () =>
      this.companyInformations()?.companyValues?.map((v) => ({
        image: v.imgUrl,
        name: v.label,
        description: v.description,
      })) || []
  );

  // Berechnet die Unternehmenshistorie für die CompanyHistorieComponent
  companyHistorieCards = computed(
    () => this.companyInformations()?.companyHistorieCards || []
  );

  // Berechnet alle Mitarbeiter für die PersonalKarten-Komponente
  employeesList = computed(() => {
    const jobs = this.jobPositions();
    return jobs ? Object.values(jobs).flat() : [];
  });

  constructor(private store: Store) {
    this.store
      .select(selectCompanyInformations)
      .subscribe((data: any) => this.companyInformations.set(data));
    this.store
      .select(selectJobPositions)
      .subscribe((data: any) => this.jobPositions.set(data));
  }
}
