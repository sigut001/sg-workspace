import { createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

// Wähle den Router State aus dem globalen Zustand
export const selectRouter = (state: { router: RouterReducerState<any> }) =>
  state.router;

// Wähle den aktuellen Router State (enthält die aktuelle URL, Params, etc.)
export const selectCurrentRoute = createSelector(
  selectRouter,
  (routerState) => routerState?.state
);

// Wähle die aktuellen URL-Parameter
export const selectRouteParams = createSelector(
  selectCurrentRoute,
  (state) => state?.params
);

// Wähle die aktuellen Query-Parameter
export const selectQueryParams = createSelector(
  selectCurrentRoute,
  (state) => state?.queryParams
);

// Wähle das Fragment der aktuellen Route
export const selectRouteFragment = createSelector(
  selectCurrentRoute,
  (state) => state?.fragment
);
