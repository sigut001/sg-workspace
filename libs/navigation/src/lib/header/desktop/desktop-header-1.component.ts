import { Component, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropdownMenu1Component } from './dropdown-menu/dropdown-menu-1.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NavBar1Component } from './navbar/navbar-1.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectIsDropdownActive,
  selectLogoPath,
} from '../state/header-state.selectors';
import { setActiveDropdown } from '../state/header-state.actions';
import { Router } from '@angular/router';
import { ScrollPaddingTransitionDirective } from '@sg-shared-librarys/directives';
import { RotateDirective } from '@sg-shared-librarys/directives';
import { EnlargeTextDirective } from '@sg-shared-librarys/directives';
import { ScrollHeightCollapseDirective } from '@sg-shared-librarys/directives';
import { CompanyInformations } from '@sg-shared-librarys/models';
import { HeaderState } from '../state/header-state.reducer';
import { selectCompanyInformations } from '@sg-shared-librarys/ui-components';

@Component({
  selector: 'sg-lib-component-desktop-header-1',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    DropdownMenu1Component,
    NavBar1Component,
    ScrollPaddingTransitionDirective,
    RotateDirective,
    EnlargeTextDirective,
    ScrollHeightCollapseDirective,
  ],
  template: `
    <!-- Leiste über dem Header -->
    <aside
      class="w-full bg-textMedium h-8 flex items-center justify-center gap-2 border-b-2 border-textDark box-border text-slate-300"
      appScrollHeightCollapse
      [transitionDuration]="0.4"
    >
      <span appScrollHeightCollapse [transitionDuration]="0.4">
        Rufen Sie uns gerne unkompliziert an, wir beraten Sie gerne!
        <a
          class=" text-slate-200 hover:underline [text-shadow:1px_1px_2px_rgba(0,0,0,0.8)]"
          href="tel:{{ this.$companyInforamtions()?.phone }}"
        >
          {{ this.$companyInforamtions()?.phone }}
        </a>
      </span>
    </aside>

    <header
      class="relative flex flex-col w-full border-b-2 border-solid border-gray-200 bg-primary-500 text-white z-30 "
    >
      <div
        appScrollPaddingTransition
        [directions]="['top', 'bottom']"
        [activateOnScroll]="'top'"
        [percentageChange]="90"
        [increase]="false"
        [transitionDuration]="0.27"
        appRotate
        [targetId]="'logoIcon'"
        [direction]="'right'"
        [speed]="1.5"
        [degrees]="240"
        class="flex justify-center gap-20 items-center w-full relative z-20 p-2"
      >
        <!-- Logo -->
        <a
          class="flex items-center justify-center gap-6 p-4 ml-2 hover:cursor-pointer text-white text-2xl"
          (click)="navigateToHome()"
          (keydown.enter)="navigateToHome()"
          (keydown.space)="navigateToHome()"
          tabindex="0"
          appEnlargeText
          [targetIds]="['textContent']"
          [scale]="105"
          [speed]="0.6"
        >
          <span
            id="logoIcon"
            class="material-symbols-outlined text-4xl leading-none"
          >
            deployed_code
          </span>
          <span
            id="textContent"
            class="leading-none text-center relative text-base"
            style="top: 2px;"
          >
            {{ this.$companyInforamtions()?.companyName }}
          </span>
        </a>

        <!-- Navbar -->
        <sg-lib-component-navbar-1 class="px-4"></sg-lib-component-navbar-1>
      </div>

      <div class="relative">
        <sg-lib-component-dropdown-menu-1
          [@dropdownAnimation]="
            (isDropdownActive$ | async) ? 'visible' : 'hidden'
          "
          class="absolute top-full left-0 right-0 text-gray-800 z-20"
        ></sg-lib-component-dropdown-menu-1>
      </div>
    </header>
  `,

  animations: [
    trigger('dropdownAnimation', [
      state(
        'hidden',
        style({
          clipPath: 'inset(0 0 100% 0)', // Startzustand: komplett versteckt
          opacity: 0, // Transparenz für ausgeblendeten Zustand
        })
      ),
      state(
        'visible',
        style({
          clipPath: 'inset(0 0 0 0)', // Sichtbar: Komplett ausgeklappt
          opacity: 1, // Vollständig sichtbar im ausgeklappten Zustand
        })
      ),
      transition('hidden => visible', [animate('300ms ease-out')]),
      transition('visible => hidden', [animate('300ms ease-in')]),
    ]),
  ],
})
export class DesktopHeader1Component implements OnDestroy {
  store = inject(Store<HeaderState>);

  router = inject(Router);
  isDropdownActive$: Observable<boolean> = this.store.select(
    selectIsDropdownActive
  );

  $logoPath = signal<string>('');
  $companyInforamtions = signal<CompanyInformations | null>(null);

  constructor() {
    this.store.select(selectLogoPath).subscribe((logoPath) => {
      this.$logoPath.set(logoPath);
    });
    this.store
      .select(selectCompanyInformations)
      .subscribe((companyInformations) => {
        this.$companyInforamtions.set(companyInformations);
      });

    // Listener für Klicks außerhalb hinzufügen
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  // Methode zur Verarbeitung von Klicks außerhalb von Dropdown und Navbar
  handleClickOutside(event: MouseEvent) {
    console.log('Click Outside happend');
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('sg-lib-component-dropdown-menu-1');
    const navbar = document.querySelector('sg-lib-component-navbar-1');

    // Überprüfen, ob der Klick außerhalb von Dropdown und Navbar war
    if (
      dropdown &&
      navbar &&
      !dropdown.contains(target) &&
      !navbar.contains(target)
    ) {
      console.log('deactvtae dropdown');
      this.store.dispatch(setActiveDropdown({ activeDropdown: null }));
    }
  }

  navigateToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }

  ngOnDestroy() {
    // Entferne den Listener, wenn die Komponente zerstört wird
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }
}
