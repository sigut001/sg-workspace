import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CallToActionButtonComponent } from '@sg-shared-librarys/ui-components';
import { Store } from '@ngrx/store';
import { Material, Process } from '../../../models/production-content.model';

import {
  selectAllChooseableColors,
  selectMaterials,
  selectProcessTypes,
} from '../../../state/state-threeDPrinting/threeDPrinting.selectors';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { formatFileSize } from '@sg-shared-librarys/helper-functions';
import { OrdersService } from '@sg-shared-librarys/services';
import { PersonalDataFormDialogComponent } from '@sg-shared-librarys/formulars';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FirebaseStorageService } from '@sg-shared-librarys/services';
import { RouterModule } from '@angular/router';
import { chooseableColors } from '../../../config-files/production.config';

export interface OrderForm {
  file: FormControl<File | null>;
  technology: FormControl<string | null>;
  material: FormControl<string | null>;
  color: FormControl<string | null>;

  // finishing: FormControl<string | null>;
  amount: FormControl<number | null>;
  description: FormControl<string | null>;
}

@Component({
  selector: 'app-druckanfrage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatIcon,
    CallToActionButtonComponent,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    RouterModule,
  ],
  template: `
    <!-- Template angepasst an die neue Businesslogik -->
    <section class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <!-- Headerbereich -->
      <div class="col-span-1 md:col-span-4 space-y-4 md:space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
          <div>
            <p class="text-2xl md:text-3xl font-bold text-slate-200">
              Laden Sie Ihre Dateien hoch
            </p>
            <p class="mt-2 text-slate-300 text-sm">
              Wir werden uns Werktags spätestens binnen 24 Stunden bei Ihnen
              melden.
            </p>
          </div>
        </div>

        <!-- Input-Bereich für Datei-Upload -->
        <div class="space-y-4">
          <header
            class="flex flex-col md:flex-row justify-between items-start md:items-end"
          >
            <p class="text-slate-200 text-sm md:text-base">
              Dateieinheiten in Millimeter (mm), Dateigröße bis 100MB
            </p>

            <span class="text-sm mt-2 md:mt-0 text-slate-300">
              Fragen zu
              <a
                [routerLink]="[
                  '/3d-druck-infos/fertigungsverfahren-uebersicht'
                ]"
                class="text-blue-500 underline "
                matTooltip="Sie können innerhalb der Anfrage einstellen, ob Sie eine Empfehlung von uns wünschen. Oder klicken Sie auf den Link, um unsere Infoseiten zu besuchen, auf denen Sie sich informieren können."
                matTooltipPosition="above"
                >Fertigungsprozessen</a
              >
              <span> oder </span>
              <a
                [routerLink]="['/3d-druck-infos/materialien-uebersicht']"
                class="text-blue-500 underline "
                matTooltip="Sie können innerhalb der Anfrage einstellen, ob Sie eine Empfehlung von uns wünschen. Oder klicken Sie auf den Link, um unsere Infoseiten zu besuchen, auf denen Sie sich informieren können."
                matTooltipPosition="above"
                >Materialien</a
              >
              ?
            </span>
          </header>

          <div
            class="border-2 border-dashed border-slate-300 rounded-lg text-center hover:border-blue-500 hover:text-blue-500"
          >
            <input
              type="file"
              class="hidden"
              id="file-input"
              accept=".stl,.obj,.3mf,.amf,.ts"
              multiple
              (change)="onFileAdded($event)"
            />
            <label for="file-input" class="cursor-pointer">
              <p class="text-slate-300 py-10 md:p-20 text-sm md:text-base">
                Dateien hierher ziehen oder klicken, um eine Datei auszuwählen.
              </p>
            </label>
          </div>
        </div>

        <!-- Auflistung der ausgewählten Orders -->
        <div class="space-y-4" [formGroup]="form">
          <header
            class="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <p class="text-slate-200 font-medium text-sm md:text-base">
              Ausgewählte Dateien: <span>{{ orders.length }}</span>
            </p>
            <sg-lib-component-call-to-action-button
              matTooltip="{{ getTooltipMessage() }}"
              matTooltipPosition="above"
              buttonText="Sofortangebot erhalten"
              size="medium"
              rounded="large"
              class="lg:mt-4 "
              (mouseenter)="markAllFieldsAsTouched()"
              (click)="onSubmit()"
              [disabled]="form.invalid || orders.controls.length === 0"
            >
            </sg-lib-component-call-to-action-button>
          </header>

          <!-- Orders Liste -->
          <ul
            formArrayName="orders"
            class="flex flex-col gap-2 md:gap-4 justify-center items-start"
          >
            <!-- Order -->
            <li
              *ngFor="let order of orders.controls; let i = index"
              [formGroupName]="i"
              class="flex flex-col gap-2 md:gap-4 w-full p-2 md:p-4 bg-primary-400 border-2 border-primary-300 rounded-sm"
            >
              <header class="flex flex-col gap-2 p-2 text-slate-300">
                <div class="flex justify-between items-center">
                  <p class="text-sm md:text-lg">
                    {{ order.get('file')?.value?.name }}
                  </p>
                  <p class="text-sm md:text-lg">
                    {{ formatFileSize(order.get('file')?.value?.size) }}
                  </p>
                  <!-- Entfernen-Button -->
                  <button mat-icon-button color="warn" (click)="removeOrder(i)">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </header>

              <div class="flex flex-col gap-2 md:gap-4 text-sm md:text-base">
                <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                  <!-- Technologieauswahl -->
                  <mat-form-field appearance="fill" class="flex-1">
                    <mat-label>Technologie</mat-label>
                    <mat-select
                      formControlName="technology"
                      required
                      (selectionChange)="onTechnologyChange(i)"
                    >
                      <mat-option
                        *ngFor="let tech of choosableProcessTypes"
                        [value]="tech"
                        >{{ tech }}</mat-option
                      >
                    </mat-select>
                    <mat-error
                      *ngIf="order.get('technology')?.hasError('required')"
                      >Eingabe erforderlich.</mat-error
                    >
                  </mat-form-field>

                  <!-- Materialauswahl -->
                  <mat-form-field appearance="fill" class="flex-1">
                    <mat-label>Material</mat-label>
                    <mat-select
                      formControlName="material"
                      required
                      (selectionChange)="onMaterialChange(i)"
                    >
                      <mat-option
                        *ngFor="let material of choosableMaterials[i]"
                        [value]="material"
                        >{{ material }}</mat-option
                      >
                    </mat-select>
                    <mat-hint
                      *ngIf="order.get('material')?.disabled"
                      class="text-slate-300"
                      >Zuerst Technologie auswählen</mat-hint
                    >
                    <mat-error
                      *ngIf="order.get('material')?.hasError('required')"
                      >Eingabe erforderlich.</mat-error
                    >
                  </mat-form-field>

                  <!-- Farbenauswahl -->
                  <mat-form-field appearance="fill" class="flex-1">
                    <mat-label>Farbe</mat-label>
                    <mat-select formControlName="color" required>
                      <mat-option
                        *ngFor="let color of choosableColors[i]"
                        [value]="color"
                      >
                        <div class="flex items-center gap-2">
                          <span
                            class="w-4 h-4 rounded-full"
                            [style.background-color]="color.hex"
                          ></span>
                          {{ color.label }}
                        </div>
                      </mat-option>
                    </mat-select>

                    <!-- Dynamischer Hint -->
                    <mat-hint
                      *ngIf="!order.get('technology')?.value"
                      class="text-slate-300"
                    >
                      Zuerst Technologie auswählen
                    </mat-hint>
                    <mat-hint
                      *ngIf="
                        order.get('technology')?.value &&
                        !order.get('material')?.value
                      "
                      class="text-slate-300"
                    >
                      Zuerst Material auswhählen
                    </mat-hint>

                    <!-- Fehleranzeige -->
                    <mat-error *ngIf="order.get('color')?.hasError('required')">
                      Eingabe erforderlich.
                    </mat-error>
                  </mat-form-field>
                  <!-- Mengenauswahl -->
                  <mat-form-field appearance="fill" class="flex-1">
                    <mat-label>Menge</mat-label>
                    <input
                      matInput
                      type="number"
                      formControlName="amount"
                      required
                      min="1"
                    />
                    <mat-error *ngIf="order.get('amount')?.hasError('min')"
                      >Die Menge muss mindestens 1 sein.</mat-error
                    >
                    <mat-error *ngIf="order.get('amount')?.hasError('required')"
                      >Eingabe erforderlich.</mat-error
                    >
                  </mat-form-field>
                </div>

                <!-- Beschreibung -->
                <mat-form-field appearance="fill" class="w-full">
                  <mat-label>Anwendungsbeschreibung</mat-label>
                  <textarea
                    matInput
                    formControlName="description"
                    placeholder="Optional: Beschreiben Sie Ihren Verwendungszweck, damit wir ihnen die bestmögliche Beratung ermöglichen können."
                    rows="5"
                  ></textarea>
                </mat-form-field>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,

  styles: [
    `
      mat-form-field {
        width: 100%;
      }

      .hover\\:text-blue-500:hover {
        color: #3b82f6;
      }

      .hover\\:border-blue-500:hover {
        border-color: #3b82f6;
      }
    `,
  ],
})
export class DruckanfrageComponent {
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  ordersService = inject(OrdersService);
  storageService = inject(FirebaseStorageService);
  formatFileSize = formatFileSize;

  processTypes: Process[] = [];
  materials: Material[] = [];
  allChoosableColors: chooseableColors[] = [];

  // finishingProcessTypes: FinishingProcessType[] = [];

  choosableProcessTypes: string[] = [];
  choosableMaterials: string[][] = [];
  choosableColors: chooseableColors[][] = [];

  sonderAuswahlFürEingaben = 'Empfehlung erhalten';

  form: FormGroup = this.fb.group({
    orders: this.fb.array([]),
  });

  constructor() {
    this.loadDataFromStore();
    this.choosableProcessTypes = [
      this.sonderAuswahlFürEingaben,
      ...this.processTypes.map((type) => type.type.name),
    ];
  }

  onFileAdded(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput?.files;

    if (!files || files.length === 0) return;

    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB

    Array.from(files).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        this.showFileSizeError(file);
      } else {
        this.createOrderFromFile(file);
      }
    });

    // Reset des Input-Felds, um dasselbe File erneut hochladen zu können
    fileInput.value = '';
  }
  private createOrderFromFile(file: File): void {
    const order: FormGroup<OrderForm> = this.fb.group({
      file: new FormControl<File | null>(file),
      technology: new FormControl<string | null>(null),
      material: new FormControl<string | null>(null),
      color: new FormControl<string | null>(null),
      amount: new FormControl<number | null>(1),
      description: new FormControl<string | null>(null),
    });

    // Order hinzufügen
    this.orders.push(order);
    this.handleTechnologyControl(order);
    this.ScrollingAfterCreation();
  }
  private handleTechnologyControl(order: FormGroup<OrderForm>): void {
    const technologyControl = order.get('technology');
    const materialControl = order.get('material');
    const colorControl = order.get('color');

    // Initiale Deaktivierung der Controls
    materialControl?.disable();
    colorControl?.disable();

    // Materialien steuern, basierend auf der Technologie
    technologyControl?.valueChanges.subscribe((technology) => {
      if (technology) {
        materialControl?.enable();
        materialControl?.setValue(null); // Reset des Material-Controls
        colorControl?.disable(); // Farben-Selector deaktivieren
        colorControl?.setValue(null); // Reset des Farben-Controls
      } else {
        materialControl?.disable();
        materialControl?.setValue(null);
        colorControl?.disable();
        colorControl?.setValue(null);
      }
    });

    // Farben steuern, basierend auf dem Material
    materialControl?.valueChanges.subscribe((material) => {
      if (material) {
        colorControl?.enable();
        colorControl?.setValue(null); // Reset des Farben-Controls
      } else {
        colorControl?.disable();
        colorControl?.setValue(null); // Reset des Farben-Controls
      }
    });
  }
  private ScrollingAfterCreation(): void {
    const observer = new MutationObserver(() => {
      const orderElements = document.querySelectorAll(
        'ul[formArrayName="orders"] > li'
      );

      if (orderElements.length > 0) {
        const newOrderElement = orderElements[
          orderElements.length - 1
        ] as HTMLElement;

        if (newOrderElement) {
          newOrderElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          observer.disconnect(); // Beobachtung stoppen
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
  onTechnologyChange(index: number): void {
    const order = this.orders.at(index);
    const technologyControl = order.get('technology')!;

    const currentTechnologie = this.processTypes.find(
      (tech) => tech.type.name === technologyControl.value
    );

    if (!currentTechnologie) {
      console.error(
        'Keine passende Technologie gefunden:',
        technologyControl.value
      );
      return;
    }

    if (technologyControl.value != this.sonderAuswahlFürEingaben) {
      this.choosableMaterials[index] =
        currentTechnologie.informations.summary.suitableMaterials.map(
          (material) => {
            return material.name;
          }
        );
    } else {
      this.choosableMaterials[index] = [
        this.sonderAuswahlFürEingaben,
        ...Object.values(this.materials).map((material) => material.type.name),
      ];
    }
  }
  onMaterialChange(index: number): void {
    const order = this.orders.at(index);
    const materialControl = order.get('material')!;

    // Wenn "Empfehlung erhalten" ausgewählt ist, alle Farben anzeigen
    if (materialControl.value === this.sonderAuswahlFürEingaben) {
      this.choosableColors[index] = this.allChoosableColors;
      return;
    }

    // Suche das aktuelle Material basierend auf dem ausgewählten Wert
    const currentMaterial = Object.values(this.materials).find(
      (material) => material.type.name === materialControl.value
    );

    // Wenn ein Material gefunden wird, Farben darauf basierend setzen
    if (currentMaterial) {
      this.choosableColors[index] =
        currentMaterial.informations.summary.chooseableColors;
    } else {
      this.choosableColors[index] = [];
    }
  }

  //HELPER
  private loadDataFromStore() {
    this.store.select(selectProcessTypes).subscribe((data) => {
      this.processTypes = data || [];
    });

    this.store.select(selectMaterials).subscribe((data) => {
      this.materials = data || [];
    });

    this.store.select(selectAllChooseableColors).subscribe((data) => {
      console.log(data);
      this.allChoosableColors = data || [];
    });
  }

  private showFileSizeError(file: File): void {
    this.snackBar.open(
      `Die Datei "${file.name}" ist zu groß. Maximale erlaubte Größe ist 100 MB.`,
      'Schließen',
      {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      }
    );
  }
  markAllFieldsAsTouched(): void {
    this.form.markAllAsTouched();
  }
  get orders(): FormArray {
    return this.form.get('orders') as FormArray;
  }
  getTooltipMessage(): string {
    const orders = this.form.get('orders')?.value || [];
    if (orders.length === 0) {
      return 'Wählen Sie zuerst Dateien aus.';
    }
    if (this.form.invalid) {
      return 'Alle mit * markierten Felder jedes hochgeladenen Bauteils müssen ausgefüllt sein.';
    }
    return '';
  }

  async onSubmit() {
    if (this.form.invalid || this.orders.length === 0) {
      return;
    }

    const dialogRef = this.dialog.open(PersonalDataFormDialogComponent, {
      maxHeight: '95vh',
    });

    dialogRef.afterClosed().subscribe((personalData) => {
      if (personalData) {
        this.uploadOrders(personalData);
      } else {
        console.log('Dialog abgebrochen. Keine Personaldaten übermittelt.');
      }
    });
  }

  private uploadOrders(personalData: any): void {
    const orders = this.form.value.orders;
    const uploadTasks = orders.map((order: OrderForm) =>
      this.uploadOrderFile(order)
    );

    Promise.all(uploadTasks)
      .then((updatedOrders) => {
        const combinedData = {
          orders: updatedOrders,
          personalData,
          createdAt: new Date(),
        };
        this.saveOrder(combinedData);
      })
      .catch((error) => {
        console.error('Fehler beim Hochladen:', error);
        this.snackBar.open('Fehler beim Hochladen der Anfrage.', 'Schließen', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
      });
  }

  private uploadOrderFile(order: any): Promise<any> {
    const file: File = order.file;
    const filePath = `uploads/${file.name}-${Date.now()}`;

    return new Promise((resolve, reject) => {
      const subscription = this.storageService
        .uploadFile(filePath, file)
        .subscribe({
          next: (storagePath) => {
            resolve({
              ...order,
              file: storagePath.fullPath, // Datei wird durch die URL ersetzt
            });
          },
          error: (err) => {
            console.error('Fehler beim Hochladen:', err);
            reject(err);
          },
          complete: () => subscription.unsubscribe(),
        });
    });
  }

  private saveOrder(data: any): void {
    this.ordersService
      .add(data)
      .then(() => {
        this.snackBar.open('Anfrage erfolgreich hochgeladen.', 'Schließen', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });

        this.form.reset();
        this.orders.clear();
      })
      .catch((error) => {
        console.error('Fehler beim Speichern der Anfrage:', error);
        this.snackBar.open('Fehler beim Speichern der Anfrage.', 'Schließen', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
      });
  }
  removeOrder(index: number) {
    console.log(this.orders);

    this.orders.removeAt(index);
    console.log(this.orders);
    // PreKonfiguration auflösen wenn es das Element war was removed wurde
    // if (this.activeConfigIndex === index) {
    //   this.activeConfigIndex = null;
    // }
  }
}
