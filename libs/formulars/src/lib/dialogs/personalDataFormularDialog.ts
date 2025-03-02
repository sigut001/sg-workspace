import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sg-lib-component-personal-data-form-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  template: `
    <div class="relative p-6 bg-white rounded-lg shadow-lg mx-auto">
      <!-- Schließen-Icon -->
      <button
        (click)="closeDialog()"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Schließen"
      >
        <mat-icon>close</mat-icon>
      </button>

      <h2 class="text-xl font-bold mb-4">Kundendaten eingeben</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form [formGroup]="form" (ngSubmit)="closeDialog()" class="space-y-4">
          <!-- Firma -->
          <div>
            <span class="block text-sm font-medium mb-2">Firma</span>
            <input
              type="text"
              formControlName="companyName"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Firmenname"
            />
          </div>

          <!-- Ansprechpartner -->
          <div>
            <span class="block text-sm font-medium mb-2">Ansprechpartner*</span>
            <input
              type="text"
              formControlName="contactPerson"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Ansprechpartner"
              [ngClass]="{
                'border-red-500':
                  form.get('contactPerson')?.invalid &&
                  form.get('contactPerson')?.touched
              }"
            />
            <div
              *ngIf="
                form.get('contactPerson')?.invalid &&
                form.get('contactPerson')?.touched
              "
              class="text-red-500 text-sm"
            >
              Dieses Feld ist erforderlich.
            </div>
          </div>

          <!-- E-Mail -->
          <div>
            <span class="block text-sm font-medium mb-2">E-Mail*</span>
            <input
              type="email"
              formControlName="email"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="E-Mail-Adresse"
              [ngClass]="{
                'border-red-500':
                  form.get('email')?.invalid && form.get('email')?.touched
              }"
            />
            <div
              *ngIf="form.get('email')?.invalid && form.get('email')?.touched"
              class="text-red-500 text-sm"
            >
              <span *ngIf="form.get('email')?.errors?.['required']"
                >Dieses Feld ist erforderlich.</span
              >
              <span *ngIf="form.get('email')?.errors?.['email']"
                >Bitte eine gültige E-Mail-Adresse eingeben.</span
              >
            </div>
          </div>

          <!-- Telefon -->
          <div>
            <span class="block text-sm font-medium mb-2">Telefon</span>
            <input
              type="tel"
              formControlName="phone"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Telefonnummer"
            />
          </div>

          <!-- Checkbox für telefonische Rückmeldung -->
          <div class="flex items-center">
            <input
              type="checkbox"
              formControlName="phoneCallback"
              id="phoneCallback"
              class="mr-2"
            />
            <span for="phoneCallback" class="text-sm"
              >Telefonische Rückmeldung erwünscht</span
            >
            <span
              matTooltip="Eine Antwort per E-Mail erfolgt immer. Wenn Sie diese Option aktivieren, melden wir uns zusätzlich telefonisch bei Ihnen."
              matTooltipPosition="right"
              class="ml-2 text-blue-500 cursor-pointer"
            >
              ⓘ
            </span>
          </div>

          <!-- Produktdetails -->
          <div>
            <span class="block text-sm font-medium mb-2">Produktdetails</span>
            <textarea
              formControlName="notes"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Details zum Produkt"
              rows="4"
            ></textarea>
          </div>

          <!-- Checkbox für Datenschutzbedingungen -->
          <div class="flex items-center">
            <input
              type="checkbox"
              formControlName="privacyPolicy"
              id="privacyPolicy"
              class="mr-2"
              [ngClass]="{
                'border-red-500':
                  form.get('privacyPolicy')?.invalid &&
                  form.get('privacyPolicy')?.touched
              }"
            />
            <span for="privacyPolicy" class="text-sm">
              Ich stimme den
              <a
                href="/datenschutz"
                target="_blank"
                class="text-blue-500 underline"
                >Datenschutzbedingungen</a
              >
              zu.
            </span>
            <div
              *ngIf="
                form.get('privacyPolicy')?.invalid &&
                form.get('privacyPolicy')?.touched
              "
              class="text-red-500 text-sm"
            >
              Sie müssen den Datenschutzbedingungen zustimmen.
            </div>
          </div>

          <!-- Absenden-Button -->
          <div>
            <button
              type="submit"
              [disabled]="form.invalid"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500"
            >
              Absenden
            </button>
          </div>
        </form>

        <!-- Nachricht zur Anfrage -->
        <div class="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold mb-2 text-blue-600">
            Information zur Anfrage
          </h2>
          <p class="text-sm text-gray-700">
            Ihre Anfrage wird von unserem Team geprüft. Dabei werden
            Kapazitäten, Materialverfügbarkeit und Preise bestimmt. Innerhalb
            von 24 Werktagsstunden erhalten Sie ein Angebot per E-Mail.
          </p>
          <p class="mt-4 text-sm text-gray-700">
            Falls Sie eine telefonische Rückmeldung wünschen, erfolgt zusätzlich
            ein Anruf. Bitte stellen Sie sicher, dass Sie Ihre Telefonnummer
            korrekt angegeben haben.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class PersonalDataFormDialogComponent {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PersonalDataFormDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      companyName: [data?.companyName || ''],
      contactPerson: [data?.contactPerson || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      phone: [data?.phone || ''],
      phoneCallback: [data?.phoneCallback || false],
      notes: [data?.notes || ''],
      privacyPolicy: [data?.privacyPolicy || false, Validators.requiredTrue],
    });
  }

  closeDialog() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.dialogRef.close();
    }
  }
}
