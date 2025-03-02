import { createAction, props } from '@ngrx/store';
import { NavItem } from '../header.model';

// NAVIGATION
export const setActiveDropdown = createAction(
  '[Navigation] Set Active Dropdown',
  props<{ activeDropdown: NavItem | null }>()
);
export const toggleMobileMenu = createAction('[Navigation] toggle Mobile Menu');
export const setNavItems = createAction(
  '[Navigation] Set Nav Items',
  props<{ navItems: NavItem[] }>()
);
export const setLogoPath = createAction(
  '[Navigation] Set Logo Path',
  props<{ logoPath: string }>()
);
export const refreshState = createAction('[App] Refresh State');
