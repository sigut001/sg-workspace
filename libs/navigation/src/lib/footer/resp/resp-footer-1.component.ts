import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopFooter1Component } from '../desktop/desktop-footer-1.component';
import { MobileFooter1Component } from '../mobile/mobile-footer-1.component';

@Component({
  selector: 'sg-lib-component-resp-footer-1',
  standalone: true,
  imports: [CommonModule, DesktopFooter1Component, MobileFooter1Component],
  template: `
    <sg-lib-component-mobile-footer-1
      class="flex md:hidden"
    ></sg-lib-component-mobile-footer-1>
    <sg-lib-component-desktop-footer-1
      class="hidden md:flex"
    ></sg-lib-component-desktop-footer-1>
  `,
})
export class RespFooter1Component {}
