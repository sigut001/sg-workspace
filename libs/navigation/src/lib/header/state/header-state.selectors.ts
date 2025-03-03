import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { HeaderState } from './header-state.reducer';

//#region Header

// Feature Selector for Header state
export const selectHeaderState = createFeatureSelector<HeaderState>('header');

// Select active dropdown
export const selectActiveDropdown = createSelector(
  selectHeaderState,
  (state) => state.activeDropdown
);

// Select Header items
export const selectNavItems = createSelector(
  selectHeaderState,
  (state) => state.navItems
);

// Prüfen, ob ein NavItem aktiv ist
export const isActiveNavItem = (navItemPath: string) =>
  createSelector(selectCurrentUrl, (currentUrl) =>
    currentUrl ? currentUrl.includes(navItemPath) : false
  );

// Select logo path
export const selectLogoPath = createSelector(
  selectHeaderState,
  (state) => state.logoPath
);

// Select dropdown active state
export const selectIsDropdownActive = createSelector(
  selectActiveDropdown,
  (actualDropdown) => (actualDropdown ? true : false)
);

// Select dropdown active state
export const selectIsMobileMenuOpen = createSelector(
  selectHeaderState,
  (state) => state.isMobileMenuOpen
);
//#endregion

//#region Router
// Feature Selector für den Router State
export const selectRouter = createFeatureSelector<RouterReducerState>('router');
// Router-URL direkt abfragen
export const selectCurrentUrl = createSelector(
  selectRouter,
  (routerState) => routerState?.state?.url
);
//#endregion
