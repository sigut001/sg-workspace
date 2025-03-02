import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavItem } from '../../header.model';
import { CommonModule } from '@angular/common';
import { BorderHoverTransitionDirective } from '@sg-shared-librarys/directives';
import { selectActiveDropdown } from '../../state/header-state.selectors';
import { HeaderState } from '../../state/header-state.reducer';
import { setActiveDropdown } from '../../state/header-state.actions';

@Component({
  selector: 'sg-lib-component-dropdown-menu-1',
  standalone: true,
  imports: [RouterModule, CommonModule, BorderHoverTransitionDirective],
  template: `
    <div
      class="relative w-full min-h-[27.5vh] p-8 text-slate-300 border-b-2 border-t-2 border-solid border-gray-200 flex justify-center gap-3"
    >
      <div class="absolute inset-0 bg-primary-500 -z-10 w-full"></div>

      <ng-container>
        <div
          *ngFor="
            let categorie of this.actualActiveDropdown()?.categories;
            trackBy: trackByFn
          "
          class="flex-1 flex flex-col justify-start items-start p-2"
        >
          <div class="w-full text-start">
            <p class="text-xl font-semibold">{{ categorie.label }}</p>
            <div class="grid grid-cols-3 gap-0.5 mt-4">
              <div
                *ngFor="
                  let sublink of categorie.subNavItems;
                  trackBy: trackByFn
                "
                appBorderHoverTransition
                [hoverColor]="'#0020DB'"
                [activeColor]="'#0020DB'"
                [transitionDuration]="300"
                [isActive]="false"
                class="h-14 bg-primary-600 text-white flex items-center justify-center text-center p-2 rounded-sm shadow-lg overflow-hidden text-ellipsis cursor-pointer transition duration-300 hover:bg-primary-400"
              >
                <a
                  class="w-full h-full flex items-center justify-center p-2"
                  [routerLink]="sublink.path"
                  (click)="closeDropdown()"
                >
                  {{ sublink.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class DropdownMenu1Component {
  actualActiveDropdown = signal<NavItem | null>(null);

  constructor() {
    this.store.select(selectActiveDropdown).subscribe((dropdown) => {
      if (dropdown) {
        this.actualActiveDropdown.set(dropdown);
      } else {
        setTimeout(() => {
          this.actualActiveDropdown.set(dropdown);
        }, 400);
      }
    });
  }
  store = inject(Store<HeaderState>);

  closeDropdown(): void {
    this.store.dispatch(setActiveDropdown({ activeDropdown: null }));
  }

  trackByFn(index: number, item: any): string {
    return item?.label || index.toString();
  }
}
