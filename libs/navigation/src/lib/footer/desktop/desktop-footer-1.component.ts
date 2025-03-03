import {
  OnInit,
  Component,
  inject,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavItem } from '../../header/header.model';
import { CompanyInformations } from '@sg-shared-librarys/models';
import { CallToActionComponent } from '@sg-shared-librarys/ui-components';
import { HeaderState } from '../../header/state/header-state.reducer';
import { selectNavItems } from '../../header/state/header-state.selectors';
import { selectCompanyInformations } from '@sg-shared-librarys/ui-components';

@Component({
  selector: 'sg-lib-component-desktop-footer-1',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    CallToActionComponent,
  ],
  template: `
    <footer
      class="bg-primary-500 text-slate-200 w-full flex flex-col min-h-[50vh]"
    >
      <sg-lib-component-call-to-action
        buttonText="Jetzt Kontakt aufnehmen"
        text="Haben wir sie Neugierig gemacht?"
      ></sg-lib-component-call-to-action>
      <div class="flex p-12 px-24">
        <!-- Box 1: Logo -->
        <div class="w-1/6 ">
          <!-- Haupt-Logo -->
          <div class="flex flex-col items-center justify-center gap-8 mt-4">
            <!-- Partner-Logos -->
            <span class="material-symbols-outlined text-4xl">emoji_events</span>
            <span class="material-symbols-outlined text-4xl"
              >workspace_premium</span
            >
            <span class="material-symbols-outlined text-4xl"
              >corporate_fare</span
            >
          </div>
        </div>
        <div class="flex justify-evenly items-start gap-2  w-full">
          <!-- Box 3: Lösungen -->
          <div>
            <p class="text-lg font-semibold mb-4 text-textMuted">
              Wissenswertes
            </p>
            <ul class="space-y-2">
              <li *ngFor="let category of $navItems()[1].categories">
                <a
                  [routerLink]="category.subNavItems[0].path"
                  class="hover:text-gray-400 text-textLight"
                  >{{ category.label }}</a
                >
              </li>
            </ul>
          </div>
          <!-- Box 4: Impressum -->
          <div>
            <p class="text-lg font-semibold mb-4 text-textMuted">Impressum</p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().companyName }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().address }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().postalCode }}
              {{ $companyInformations().city }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              Tel.: {{ $companyInformations().phone }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              E-Mail: {{ $companyInformations().email }}
            </p>
          </div>
          <!-- Box 5: Kontakt -->
          <div>
            <p class="text-lg font-semibold mb-4 text-textMuted">Kontakt</p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().contactPerson }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().address }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              {{ $companyInformations().postalCode }}
              {{ $companyInformations().city }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              Tel.: {{ $companyInformations().phone }}
            </p>
            <p class="text-sm mb-2 text-textLight">
              E-Mail: {{ $companyInformations().email }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class DesktopFooter1Component implements OnInit {
  store = inject(Store<HeaderState>);
  cdr = inject(ChangeDetectorRef);
  $navItems = signal<NavItem[]>([]);
  $companyInformations = signal<CompanyInformations>({
    companyName: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
    contactPerson: '',
    country: '',
    website: '',
    managingDirectors: [],
  });

  ngOnInit(): void {
    this.store.select(selectNavItems).subscribe((navItems) => {
      this.$navItems.set(navItems);
    });
    this.store
      .select(selectCompanyInformations)
      .subscribe((companyInformations) => {
        this.$companyInformations.set(companyInformations);
      });
  }
}
