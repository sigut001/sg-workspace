import { provideState } from '@ngrx/store';
import { sharedProcessLineReducer } from './process-line-state.reducer';

export function provideProcessLineState() {
  return provideState('process-line', sharedProcessLineReducer);
}
