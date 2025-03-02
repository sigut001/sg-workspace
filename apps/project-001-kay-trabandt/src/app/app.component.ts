import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import {
  setCustomerReviews,
  setCompanyValues,
  setProcessLineElements,
  setCompanyInformations,
  setJobPositions,
} from '@sg-shared-librarys/ui-components';
import { navItems } from './config-files/nav-items.config';
import { Observable } from 'rxjs';
import {
  NavItem,
  RespFooter1Component,
  RespHeader1Component,
  setCredits,
  setLogoPath,
  setNavItems,
} from '@sg-shared-librarys/navigation';
import { credits } from './config-files/credits-list.config';
import { customerReviews } from './config-files/customer-reviews.config';
import { companyValues } from './config-files/company-values.config';
import { processLineElements } from './config-files/process-line-elements.config';

import {
  companyInformations,
  jobPositions,
} from './config-files/company-informations.config';
import {
  processes,
  materials,
  allChooseableColors,
} from './config-files/production.config';
import {
  setAllChooseableColors,
  setMaterials,
  setProcessTypes,
} from './state/state-threeDPrinting/threeDPrinting.actions';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RespHeader1Component,
    RespFooter1Component,
  ],
  selector: 'app-root',
  template: `
    <div class="flex flex-col min-h-[100vh] bg-primary-600 relative">
      <sg-lib-component-resp-header-1
        class="sticky top-0 z-30"
      ></sg-lib-component-resp-header-1>
      <div class="w-full min-h-[100vh]">
        <router-outlet class="flex-grow pt-6"></router-outlet>
      </div>
      <sg-lib-component-resp-footer-1></sg-lib-component-resp-footer-1>
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
