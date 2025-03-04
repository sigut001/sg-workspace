import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from '../header.model';
import { toggleMobileMenu } from '../state/header-state.actions';
import {
  selectIsMobileMenuOpen,
  selectLogoPath,
  selectNavItems,
} from '../state/header-state.selectors';
import { ScrollPaddingTransitionDirective } from '@sg-shared-librarys/directives';
import { ScrollRotateDirective } from '@sg-shared-librarys/directives';
import { HeaderState } from '../state/header-state.reducer';
import { selectCompanyInformations } from '@sg-shared-librarys/ui-components';
import { CompanyInformations } from '@sg-shared-librarys/models';

@Component({
  selector: 'sg-lib-component-mobile-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ScrollPaddingTransitionDirective,
    ScrollRotateDirective,
  ],
  template: `
    <header
      class="flex flex-col w-full bg-primary-500 text-white py-4"
      appScrollPaddingTransition
      [directions]="['top', 'bottom']"
      [activateOnScroll]="'top'"
      [percentageChange]="90"
      [increase]="false"
      [transitionDuration]="0.27"
    >
      <!-- Toolbar -->
      <div class="flex justify-between items-center w-full px-8">
        <!-- Logo -->
        <a
          class="flex items-center justify-center gap-6 p-4 ml-2 hover:cursor-pointer text-white text-2xl"
          (click)="navigateToHome()"
          (keydown.enter)="navigateToHome()"
          (keydown.space)="navigateToHome()"
          tabindex="0"
          appScrollRotate="logoIcon"
        >
          <span
            id="logoIcon"
            class="material-symbols-outlined text-4xl leading-none"
          >
            deployed_code
          </span>
          <span
            id="textContent"
            class="leading-none text-center relative text-sm"
            style="top: 2px;"
          >
            {{ this.$companyInforamtions()?.companyName }}
          </span>
        </a>
        <!-- Burger Menu Button für mobile und Tablet Ansichten -->
        <button
          mat-icon-button
          (click)="toggleMenu()"
          (keydown.enter)="toggleMenu()"
          aria-label="Open menu"
        >
          <mat-icon>menu</mat-icon>
        </button>
      </div>

      <!-- Overlay für das Burger-Menü bei mobilen Ansichten -->
      @if ($isMobileMenuOpen()) {
      <div
        class="fixed inset-0 z-50"
        (click)="toggleMenu()"
        (keydown.enter)="toggleMenu()"
        (keydown.space)="toggleMenu()"
        tabindex="0"
      ></div>
      }

      <!-- Sidemenu -->
      <div
        class="fixed inset-y-0 left-0 z-50 w-64 bg-primary-500 shadow-lg overflow-y-auto"
        [@menuAnimation]="$isMobileMenuOpen() ? 'open' : 'closed'"
      >
        <a
          class="flex items-center justify-center gap-6 p-4 ml-2 hover:cursor-pointer text-white text-2xl"
          (click)="navigateToHome()"
          (keydown.enter)="navigateToHome()"
          (keydown.space)="navigateToHome()"
          tabindex="0"
          appScrollRotate="logoIcon"
        >
          <span
            id="logoIcon"
            class="material-symbols-outlined text-4xl leading-none"
          >
            deployed_code
          </span>
        </a>
        <ul class="p-4">
          <!-- Menüeinträge mit möglichen Dropdowns -->
          @for (item of $navItems(); track item) {
          <li
            class="relative p-4 border-b border-gray-300 transition-all flex flex-col justify-start items-center"
            tabindex="0"
            (click)="toggleDropdown(item)"
            (keydown.enter)="toggleDropdown(item)"
            (keydown.space)="toggleDropdown(item)"
            aria-haspopup="true"
          >
            <!-- Hauptlink -->
            <div class="flex justify-between items-center w-full">
              @if (!item.categories) {
              <span
                class="text-xl cursor-pointer"
                [routerLink]="item.path"
                (click)="toggleMenu()"
                (keydown.enter)="toggleMenu()"
                (keydown.space)="toggleMenu()"
                tabindex="0"
                >{{ item.label }}</span
              >
              } @else {
              <span class="text-xl cursor-pointer">
                {{ item.label }}
              </span>
              <mat-icon
                [@rotateIcon]="isDropdownOpen(item) ? 'active' : 'inactive'"
              >
                arrow_drop_down
              </mat-icon>
              }
            </div>

            <!-- Dropdown mit Unterseiten -->
            @if (item.categories) {
            <ul
              [@expandSubMenu]="isDropdownOpen(item) ? 'expanded' : 'collapsed'"
              class="w-full pl-2"
            >
              @for (categorie of item.categories; track categorie) {
              <li class="py-1 transition-all rounded-md w-full">
                <div
                  class="flex flex-col items-start justify-start pt-2  w-full relative"
                >
                  <p
                    class="text-md relative top-0 left-0 text-slate-400 font-semibold tracking-widest uppercase"
                    (click)="$event.stopPropagation()"
                    (keydown.enter)="$event.stopPropagation()"
                    (keydown.space)="$event.stopPropagation()"
                    tabindex="0"
                  >
                    {{ categorie.label }}
                  </p>

                  <ul
                    class="flex flex-col items-start justify-start w-full relative"
                  >
                    @for (subItem of categorie.subNavItems; track subItem) {
                    <li
                      (click)="navigateAndCloseMenu(subItem.path, item)"
                      (keydown.enter)="navigateAndCloseMenu(subItem.path, item)"
                      (keydown.space)="navigateAndCloseMenu(subItem.path, item)"
                      tabindex="0"
                      class="w-full"
                    >
                      <p
                        class="text-xs rounded-md w-full  pl-1  truncate"
                        [routerLink]="subItem.path"
                      >
                        {{ subItem.label }}
                      </p>
                    </li>
                    }
                  </ul>
                </div>
              </li>
              }
            </ul>
            }
          </li>
          }
        </ul>
      </div>
    </header>
  `,
  animations: [
    trigger('menuAnimation', [
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('closed => open', [animate('300ms ease-out')]),
      transition('open => closed', [animate('450ms ease-in')]),
    ]),
    trigger('rotateIcon', [
      state('inactive', style({ transform: 'rotate(0deg)' })),
      state('active', style({ transform: 'rotate(180deg)' })),
      transition('inactive <=> active', [animate('300ms ease-in-out')]),
    ]),
    trigger('expandSubMenu', [
      state(
        'collapsed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
          transform: 'translateY(-10px)',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class MobileHeader1Component {
  store = inject(Store<HeaderState>);
  router = inject(Router);
  openDropdowns: string[] = [];
  $isMobileMenuOpen = signal<boolean>(false);
  $navItems = signal<NavItem[]>([]);
  $logoPath = signal<string>('');
  $companyInforamtions = signal<CompanyInformations | null>(null);

  constructor() {
    this.store.select(selectIsMobileMenuOpen).subscribe((mobileMenuState) => {
      this.$isMobileMenuOpen.set(mobileMenuState);
    });

    this.store.select(selectNavItems).subscribe((navItems) => {
      this.$navItems.set(navItems);
    });

    this.store.select(selectLogoPath).subscribe((logoPath) => {
      this.$logoPath.set(logoPath);
    });
    this.store
      .select(selectCompanyInformations)
      .subscribe((companyInformations) => {
        this.$companyInforamtions.set(companyInformations);
      });
  }

  toggleMenu() {
    this.closeAllDropdowns();
    this.store.dispatch(toggleMobileMenu());
  }

  toggleDropdown(item: NavItem) {
    const isOpen = this.isDropdownOpen(item);
    if (isOpen) {
      this.openDropdowns = this.openDropdowns.filter((i) => i !== item.label);
    } else {
      this.openDropdowns.push(item.label);
    }
  }

  isDropdownOpen(item: NavItem): boolean {
    return this.openDropdowns.includes(item.label);
  }

  navigateAndCloseMenu(path: string, item: NavItem) {
    this.closeAllDropdowns();
    this.router.navigate([path]).then(() => {
      this.toggleMenu();
    });
  }

  closeAllDropdowns() {
    setTimeout(() => {
      this.openDropdowns = [];
    }, 50);
  }

  navigateToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 300);
  }
}
