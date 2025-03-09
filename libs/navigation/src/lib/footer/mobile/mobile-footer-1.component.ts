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
import { HeaderState } from '../../header/state/header-state.reducer';
import { selectNavItems } from '../../header/state/header-state.selectors';

@Component({
  selector: 'sg-lib-component-mobile-footer-1',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  template: `
    <footer class="bg-primary-500 text-white py-6 w-full">
      <div class="container mx-auto flex flex-col space-y-6">
        <!-- Box 1: Logo und Dropdown für Sprachen -->
        <div class="text-center">
          <div class="flex justify-center gap-4 mt-2"></div>

          <!-- <div class="mt-4">
            <button mat-button [matMenuTriggerFor]="langMenu">Sprache</button>
            <mat-menu #langMenu="matMenu">
              <button mat-menu-item (click)="switchLanguage('de')">
                Deutsch
              </button>
              <button mat-menu-item (click)="switchLanguage('en')">
                Englisch
              </button>
            </mat-menu>
          </div> -->
        </div>

        <!-- Box 2: Wissenswertes -->
        <div>
          <p class="text-md font-semibold mb-2 text-center text-textMuted">
            Wissenswertes
          </p>
          <ul class="space-y-1 text-center">
            <li *ngFor="let item of $navItems()">
              <a
                [routerLink]="item.path"
                class="hover:text-gray-400 text-textLight text-sm"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Box 3: Lösungen -->
        <div>
          <p class="text-md font-semibold mb-2 text-center text-textMuted">
            Lösungen
          </p>
          <ul class="space-y-1 text-center">
            <li *ngFor="let category of $navItems()[1]?.categories">
              <a
                [routerLink]="category.subNavItems[0].path"
                class="hover:text-gray-400 text-textLight text-sm"
                >{{ category.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Box 4: Impressum -->
        <div class="text-center text-sm">
          <p class="font-semibold mb-2 text-textMuted">Impressum</p>
          <p class="text-textLight">Firma XYZ GmbH</p>
          <p class="text-textLight">Musterstraße 123</p>
          <p class="text-textLight">12345 Musterstadt</p>
          <p class="text-textLight">Tel.: +49 123 4567890</p>
          <p class="text-textLight">E-Mail: infofirma-xyz.de</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        padding: 1.5rem 0;
      }
    `,
  ],
})
export class MobileFooter1Component implements OnInit {
  store = inject(Store<HeaderState>);
  cdr = inject(ChangeDetectorRef);
  $navItems = signal<NavItem[]>([]);

  ngOnInit(): void {
    this.store.select(selectNavItems).subscribe((navItems) => {
      this.$navItems.set(navItems);
    });
  }

  switchLanguage(local: string) {
    console.log('local');
  }
}
