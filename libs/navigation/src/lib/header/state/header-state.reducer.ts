import { createReducer, on } from '@ngrx/store';
import { NavItem } from '../header.model';
import {
  setActiveDropdown,
  toggleMobileMenu,
  setNavItems,
  setLogoPath,
  refreshState,
} from './header-state.actions';

export interface HeaderState {
  navItems: NavItem[];
  activeDropdown: NavItem | null;
  isMobileMenuOpen: boolean;
  isDropdownActive: boolean;
  logoPath: string;
}
export const inititalHeaderState: HeaderState = {
  activeDropdown: null,
  isMobileMenuOpen: false,
  isDropdownActive: false,
  navItems: [],
  logoPath: '',
};
export const sharedHeaderReducer = createReducer(
  inititalHeaderState,
  on(setActiveDropdown, (state, { activeDropdown }) => ({
    ...state,
    activeDropdown,
  })),
  on(toggleMobileMenu, (state) => ({
    ...state,
    isMobileMenuOpen: !state.isMobileMenuOpen,
  })),
  on(setNavItems, (state, { navItems }) => ({
    ...state,
    navItems,
  })),
  on(setLogoPath, (state, { logoPath }) => ({
    ...state,
    logoPath,
  })),
  on(refreshState, (state) => ({
    ...state,
  }))
);
