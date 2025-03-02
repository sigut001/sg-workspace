import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  NavItem,
  RespHeaderComponent,
  setCredits,
  setNavItems,
  setCustomerReviews,
  setLogoPath,
  setCompanyValues,
  setProcessLineElements,
  setProcessTypes,
  setMaterials,
  setAllChooseableColors,
  setCompanyInformations,
  setJobPositions,
  // setFinishingProcessTypes,
} from '@simons-workspace/ui-components';
import { navItems } from 'apps/trabbis3D/config-files/nav-items.config';
import { Observable } from 'rxjs';
import { RespFooterComponent } from '@simons-workspace/ui-components';
import { credits } from '../../config-files/credits-list.config';
import { customerReviews } from '../../config-files/customer-reviews.config';
import { companyValues } from 'apps/trabbis3D/config-files/company-values.config';
import { processLineElements } from 'apps/trabbis3D/config-files/processLineElements.config';

import {
  companyInformations,
  jobPositions,
} from 'apps/trabbis3D/config-files/company-informations.config';
import {
  processes,
  materials,
  allChooseableColors,
} from 'apps/trabbis3D/config-files/production.config';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RespHeaderComponent,
    RespFooterComponent,
  ],
  selector: 'app-root',
  template: `
    <div class="flex flex-col min-h-[100vh] bg-primary-600 relative">
      <lib-resp-header class="sticky top-0 z-30"></lib-resp-header>
      <div class="w-full min-h-[100vh]">
        <router-outlet class="flex-grow pt-6"></router-outlet>
      </div>
      <lib-resp-footer></lib-resp-footer>
    </div>
  `,
})
export class AppComponent implements OnInit {
  navItems$!: Observable<NavItem[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    // Lade die Navigationselemente in den Store
    this.store.dispatch(setNavItems({ navItems }));
    this.store.dispatch(setCredits({ credits: credits }));
    this.store.dispatch(
      setCustomerReviews({ customerReviews: customerReviews })
    );
    // In Librarys genutzt generic
    this.store.dispatch(setLogoPath({ logoPath: '/logo.png' }));
    this.store.dispatch(setCompanyValues({ companyValues: companyValues }));
    this.store.dispatch(
      setProcessLineElements({ processLineElements: processLineElements })
    );
    // In Libraray genutzt Theme-specific
    this.store.dispatch(setProcessTypes({ processTypes: processes }));
    this.store.dispatch(setMaterials({ materials: materials }));
    this.store.dispatch(
      setAllChooseableColors({ colors: Object.values(allChooseableColors) })
    );
    // Lade Firmeninformationen und Jobpositionen in den Store
    this.store.dispatch(
      setCompanyInformations({ companyInformations: companyInformations })
    );
    this.store.dispatch(setJobPositions({ jobPositions: jobPositions }));

    // this.store.dispatch(
    //   setFinishingProcessTypes({ finishingProcessTypes: finishingProcessTypes })
    // );
  }
}
