import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Employee } from '@sg-shared-librarys/models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sg-lib-component-personal-karten',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      @for (employee of employees(); track employee.id) {
      <div
        #cardRef
        class="bg-primary-500 shadow-xl rounded-sm p-6 flex flex-col items-center text-center w-full"
      >
        <img
          *ngIf="employee.profilePictureURL"
          [src]="employee.profilePictureURL"
          alt="{{ employee.name }}"
          class="w-36 h-36 rounded-full mb-4 border-4 border-gray-300 object-cover"
        />
        <div class="text-2xl font-bold text-slate-300">{{ employee.name }}</div>
        <div class="text-lg font-medium mt-1 text-slate-400">
          {{ employee.position }}
        </div>
        @if (employee.department) {
        <div class="text-sm mt-1">{{ employee.department }}</div>
        }
        <div class="text-sm mt-4 px-4 flex-grow text-slate-500">
          @if (employee.bio) {
          <p>{{ employee.bio }}</p>
          }
        </div>
        <div class="flex gap-4 mt-auto">
          @if (employee.email) {
          <a
            [href]="'mailto:' + employee.email"
            class="text-blue-600 hover:text-blue-800 text-2xl flex items-center"
          >
            <mat-icon>mail</mat-icon>
          </a>
          } @if (employee.phone) {
          <a
            [href]="'tel:' + employee.phone"
            class="text-green-600 hover:text-green-800 text-2xl flex items-center"
          >
            <mat-icon>phone</mat-icon>
          </a>
          } @if (getSocialKeys(employee).length > 0) { @for (key of
          getSocialKeys(employee); track key) {
          <a
            [href]="employee.socialLinks![key].url"
            target="_blank"
            class="text-gray-500 hover:text-gray-700 text-2xl flex items-center"
          >
            @if (employee.socialLinks![key].icon) {
            <img
              [src]="employee.socialLinks![key].icon"
              [alt]="key + ' Icon'"
              class="w-6 h-6"
            />
            } @else {
            <mat-icon>public</mat-icon>
            }
          </a>
          } }
        </div>
      </div>
      }
    </div>
  `,
})
export class PersonalCardComponent implements AfterViewInit {
  employees = input.required<Employee[]>();

  @ViewChildren('cardRef') cardElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    setTimeout(() => {
      const maxHeight = Math.max(
        ...this.cardElements.map((el) => el.nativeElement.offsetHeight)
      );
      this.cardElements.forEach(
        (el) => (el.nativeElement.style.height = `${maxHeight}px`)
      );
    });
  }

  getSocialKeys(employee: Employee): string[] {
    return employee.socialLinks ? Object.keys(employee.socialLinks) : [];
  }
}
