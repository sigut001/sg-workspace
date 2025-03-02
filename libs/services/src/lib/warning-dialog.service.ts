import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarningDialogComponent } from './warningComponent.component';

@Injectable({
  providedIn: 'root',
})
export class WarningDialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(WarningDialogComponent, {
      width: '400px',
      disableClose: true,
    });
  }
}
