import { provideState } from '@ngrx/store';
import { sharedCompanyValuesReducer } from './company-values-state.reducer';

export function provideCompanyValuesState() {
  return provideState('company-values', sharedCompanyValuesReducer);
}
