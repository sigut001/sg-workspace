import { Component, inject, Type, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenSizeService } from '@sg-shared-librarys/services';
import { MobileHeader1Component } from '../mobile/mobile-header-1.component';
import { DesktopHeader1Component } from '../desktop/desktop-header-1.component';

@Component({
  selector: 'sg-lib-component-resp-header-1',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="headerComponent() as header">
      <ng-container *ngComponentOutlet="header"></ng-container>
    </ng-container>
  `,
})
export class RespHeader1Component {
  private isMobile = inject(ScreenSizeService).isMobile; // Signal aus dem ScreenSizeService

  // Verwende computed, um die Header-Komponente dynamisch zu bestimmen
  headerComponent = computed<
    Type<MobileHeader1Component | DesktopHeader1Component>
  >(() => {
    return this.isMobile() ? MobileHeader1Component : DesktopHeader1Component;
  });
}
