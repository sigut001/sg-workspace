import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavItem } from '../../header.model';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BorderHoverTransitionDirective } from '@sg-shared-librarys/directives';
import { HeaderState } from '../../state/header-state.reducer';
import {
  selectActiveDropdown,
  selectIsDropdownActive,
  selectNavItems,
} from '../../state/header-state.selectors';
import { setActiveDropdown } from '../../state/header-state.actions';

@Component({
  selector: 'sg-lib-component-navbar-1',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    RouterModule,
    BorderHoverTransitionDirective,
  ],
  animations: [
    trigger('rotateIcon', [
      state('inactive', style({ transform: 'rotate(0deg)' })),
      state('active', style({ transform: 'rotate(180deg)' })),
      transition('inactive <=> active', [animate('400ms ease-in-out')]),
    ]),
  ],
  template: `
    <div class="flex justify-between items-center p-4 h-fit">
      <!-- Hauptnavigation mit einer flexiblen Anordnung -->
      <ul class="flex gap-12 items-center">
        <li
          *ngFor="let item of navItems$ | async"
          class="relative transition-all list-none cursor-pointer"
          (click)="clickOnNavItem(item)"
          (keydown.enter)="clickOnNavItem(item)"
          (keydown.space)="clickOnNavItem(item)"
          tabindex="0"
        >
          <!-- Überprüfen, ob der Eintrag nicht die spezielle "Druckanfrage" ist -->
          <ng-container
            *ngIf="item.label !== 'Druckanfrage'; else druckanfrage"
          >
            <div
              appBorderHoverTransition
              [hoverColor]="'#0020DB'"
              [activeColor]="'#0020DB'"
              [transitionDuration]="300"
              [isActive]="isActiveRoute(item.path)"
              class="hover:border-action-500 p-2"
              [routerLinkActive]="'border-action-500'"
              [routerLinkActiveOptions]="{ exact: false }"
            >
              <ng-container *ngIf="item.categories; else noCategories">
                <span class="text-lg align-middle">{{ item.label }}</span>
                <mat-icon
                  class="align-middle"
                  aria-hidden="false"
                  aria-label="Dropdown icon"
                  [@rotateIcon]="
                    isDropdownActive() &&
                    actualActiveDropdown()?.label === item.label
                      ? 'active'
                      : 'inactive'
                  "
                >
                  arrow_drop_down
                </mat-icon>
              </ng-container>
            </div>
          </ng-container>

          <!-- Einträge ohne Kategorien (Direkter Link) -->
          <ng-template #noCategories>
            <a class="text-lg" [routerLink]="item.path">{{ item.label }}</a>
          </ng-template>

          <!-- Spezieller Button für "Druckanfrage" -->
          <ng-template #druckanfrage>
            <button
              class="p-3 bg-action-500 mx-8 text-white rounded-full shadow-md hover:bg-action-600 focus:outline-none focus:ring-4 focus:ring-action-300 active:bg-action-700 transition-all duration-150"
            >
              Druckanfrage stellen
            </button>
          </ng-template>
        </li>
      </ul>
    </div>
  `,
})
export class NavBar1Component implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  store = inject(Store<HeaderState>);

  // Im Template verwendete navItems
  navItems$: Observable<NavItem[]> = this.store.select(selectNavItems);

  // Signals zum Speichern der lokalen Zustände
  isDropdownActive = signal<boolean>(false);
  actualActiveDropdown = signal<NavItem | null>(null);

  ngOnInit() {
    this.store.select(selectActiveDropdown).subscribe((activDropDown) => {
      this.actualActiveDropdown.set(activDropDown);
    });

    this.store.select(selectIsDropdownActive).subscribe((state) => {
      this.isDropdownActive.set(state);
    });
  }

  // Methode, um zu prüfen, ob der aktuelle Pfad mit dem Item-Path übereinstimmt
  isActiveRoute(path: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl.includes(path);
  }

  clickOnNavItem(item: NavItem) {
    const currentDropdown = this.actualActiveDropdown();

    switch (true) {
      // Fall 1: Das Element hat keine Kategorien
      case !item.categories:
        this.store.dispatch(setActiveDropdown({ activeDropdown: null }));
        this.router.navigate([item.path]);
        break;

      // Fall 2: Kein Dropdown ist aktuell geöffnet
      case !currentDropdown:
        this.store.dispatch(setActiveDropdown({ activeDropdown: item }));
        break;

      // Fall 3: Ein anderes Dropdown ist geöffnet
      case currentDropdown!.label !== item.label:
        this.store.dispatch(setActiveDropdown({ activeDropdown: null }));
        setTimeout(() => {
          this.store.dispatch(setActiveDropdown({ activeDropdown: item }));
        }, 500);
        break;

      // Fall 4: Das gleiche Dropdown wird erneut geklickt, wir schließen es
      default:
        this.store.dispatch(setActiveDropdown({ activeDropdown: null }));
        break;
    }
  }
}
