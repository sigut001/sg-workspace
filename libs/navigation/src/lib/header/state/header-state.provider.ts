import { provideState } from '@ngrx/store';
import { sharedHeaderReducer } from './header-state.reducer';

export function provideHeaderState() {
  return provideState('header', sharedHeaderReducer);
}
