import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CompanyValuesState } from './company-values-state.reducer';

export const selectCompanyValuesState =
  createFeatureSelector<CompanyValuesState>('company-values');

export const selectCompanyValues = createSelector(
  selectCompanyValuesState,
  (state) => state.companyValues
);
