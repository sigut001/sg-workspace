import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sg-lib-component-call-back-request-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatIconModule,
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
  template: `
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto ">
      <div
        *ngIf="submitted"
        @fadeInOut
        class="flex flex-col items-center justify-center p-2"
      >
        <span
          id="logoIcon"
          class="material-symbols-outlined text-green-600 text-4xl "
        >
          deployed_code
        </span>
        <p class="text-green-600 text-lg font-semibold text-center">
          Ihre Anfrage ist eingegangen, <br />
          wir melden uns bei Ihnen.
        </p>
      </div>
      <div class="p-2">
        <p class="text-primary-500 text-start ">
          Bitte geben Sie Ihre Kontaktdaten an und wählen Sie einen bevorzugten
          Zeitbereich für ein Beratungsgespräch aus.
        </p>
        <p>
          Wir freuen uns über ihre Anfrage und werden uns zeitnah bei Ihnen
          melden.
        </p>
      </div>
      <form [formGroup]="availabilityForm" class="flex flex-col lg:gap-2">
        <mat-form-field class="w-full">
          <mat-label>Firmenname</mat-label>
          <input matInput formControlName="companyName" required />
          <mat-error *ngIf="availabilityForm.get('companyName')?.invalid">
            Firmenname erforderlich
          </mat-error>
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Ansprechpartner</mat-label>
          <input matInput formControlName="contactPerson" required />
          <mat-error *ngIf="availabilityForm.get('contactPerson')?.invalid">
            Ansprechpartner erforderlich
          </mat-error>
        </mat-form-field>

        <mat-form-field class="w-full">
          <mat-label>Telefonnummer</mat-label>
          <input matInput formControlName="phoneNumber" required type="tel" />
          <mat-error *ngIf="availabilityForm.get('phoneNumber')?.invalid">
            Telefonnummer erforderlich
          </mat-error>
        </mat-form-field>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-4">
          <mat-form-field>
            <mat-label>Von: </mat-label>
            <input
              matInput
              [matTimepicker]="startPicker"
              formControlName="startTime"
              [disabled]="isAllDay"
            />
            <mat-timepicker-toggle
              matIconSuffix
              [for]="startPicker"
            ></mat-timepicker-toggle>
            <mat-timepicker #startPicker></mat-timepicker>
            <mat-error *ngIf="availabilityForm.get('startTime')?.invalid">
              Startzeit erforderlich
            </mat-error>
          </mat-form-field>
          <mat-form-field>
            <mat-label>Bis: </mat-label>
            <input
              matInput
              [matTimepicker]="endPicker"
              formControlName="endTime"
              [disabled]="isAllDay"
            />
            <mat-timepicker-toggle
              matIconSuffix
              [for]="endPicker"
            ></mat-timepicker-toggle>
            <mat-timepicker #endPicker></mat-timepicker>
            <mat-error *ngIf="availabilityForm.get('endTime')?.invalid">
              Endzeit erforderlich
            </mat-error>
          </mat-form-field>
        </div>
        <div class="flex justify-end">
          <mat-checkbox
            formControlName="allDay"
            (change)="toggleAllDay()"
            class="text-gray-700"
          >
            Ganztägig erreichbar
          </mat-checkbox>
        </div>
      </form>
      <div class="flex justify-end gap-2 pt-4 ">
        <button mat-flat-button (click)="cancel()">Abbrechen</button>
        <button
          mat-flat-button
          (click)="save()"
          [disabled]="availabilityForm.invalid"
          color="primary"
        >
          Speichern
        </button>
      </div>
    </div>
  `,
})
export class CallBackRequestDialogComponent {
  availabilityForm: FormGroup;
  isAllDay = false;
  submitted = false;
  autoCloseTime = 1000;
  previousTimes = { startTime: null, endTime: null };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CallBackRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.availabilityForm = this.fb.group(
      {
        companyName: [null, Validators.required],
        contactPerson: [null, Validators.required],
        phoneNumber: [
          null,
          [Validators.required, Validators.pattern(/^\+?[0-9 ]+$/)],
        ],
        startTime: [null],
        endTime: [null],
        allDay: [false],
      },
      { validators: this.timeOrAllDayRequired }
    );
  }

  toggleAllDay(): void {
    this.isAllDay = !this.isAllDay;
    if (this.isAllDay) {
      this.previousTimes.startTime =
        this.availabilityForm.get('startTime')?.value;
      this.previousTimes.endTime = this.availabilityForm.get('endTime')?.value;
      this.availabilityForm.patchValue({ startTime: null, endTime: null });
    } else {
      this.availabilityForm.patchValue({
        startTime: this.previousTimes.startTime,
        endTime: this.previousTimes.endTime,
      });
    }
    this.availabilityForm.updateValueAndValidity();
  }

  save(): void {
    if (this.availabilityForm.valid) {
      this.submitted = true;
      setTimeout(
        () => this.dialogRef.close(this.availabilityForm.value),
        this.autoCloseTime + 1800
      );
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private timeOrAllDayRequired(
    group: AbstractControl
  ): { [key: string]: boolean } | null {
    const allDay = group.get('allDay')?.value;
    const startTime = group.get('startTime')?.value;
    const endTime = group.get('endTime')?.value;

    if (!allDay && (!startTime || !endTime)) {
      return { timeOrAllDayRequired: true };
    }
    return null;
  }
}
