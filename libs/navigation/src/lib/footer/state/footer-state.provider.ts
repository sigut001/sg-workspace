import { provideState } from '@ngrx/store';
import { sharedCreditReducer } from './footer-state.reducer';

export function provideCreditState() {
  return provideState('credit', sharedCreditReducer);
}
