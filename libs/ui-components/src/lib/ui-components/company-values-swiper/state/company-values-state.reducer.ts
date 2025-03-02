import { createReducer, on } from '@ngrx/store';
import { setCompanyValues } from './company-values-state.actions';
import { CompanyValue } from '../company-values-slider.model';

export interface CompanyValuesState {
  companyValues: CompanyValue[];
}
export const initialCompanyValuesState: CompanyValuesState = {
  companyValues: [],
};
export const sharedCompanyValuesReducer = createReducer(
  initialCompanyValuesState,

  on(setCompanyValues, (state, { companyValues }) => ({
    ...state,
    companyValues,
  }))
);
