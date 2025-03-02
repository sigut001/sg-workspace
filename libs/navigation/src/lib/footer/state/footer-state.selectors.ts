import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CreditState } from './footer-state.reducer';

export const selectCreditState = createFeatureSelector<CreditState>('credit');

export const selectCredits = createSelector(
  selectCreditState,
  (state) => state.credits
);
