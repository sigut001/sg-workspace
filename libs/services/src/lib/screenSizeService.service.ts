import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private isMobileSignal = signal(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobileSignal.set(result.matches);
      });
  }

  get isMobile() {
    return this.isMobileSignal.asReadonly();
  }
}
