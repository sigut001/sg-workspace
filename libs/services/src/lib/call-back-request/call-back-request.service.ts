import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CallBackRequestDialogComponent } from './call-back-request-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CallBackRequestService {
  constructor(private dialog: MatDialog) {}

  openDialog(data?: any): MatDialogRef<CallBackRequestDialogComponent> {
    return this.dialog.open(CallBackRequestDialogComponent, {
      width: '500px',
      maxHeight: '90vh', // Damit das Modal nicht zu groß wird
      data: data || {},
    });
  }
}
