import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sg-lib-component-warning-dialog',
  template: `
    <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h2 class="text-xl font-bold text-red-600">⚠️ Wichtiger Hinweis</h2>
      <p class="mt-4 text-gray-700">
        Diese Website befindet sich im <strong>Aufbau</strong> und dient
        ausschließlich zu <strong>Testzwecken</strong>.
      </p>
      <p class="mt-2 text-gray-700">
        Bitte <strong>keine echten Daten</strong> hochladen oder persönliche
        Informationen eingeben.
      </p>
      <div class="mt-6">
        <button
          class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          (click)="closeDialog()"
        >
          Verstanden
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class WarningDialogComponent {
  constructor(public dialogRef: MatDialogRef<WarningDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
