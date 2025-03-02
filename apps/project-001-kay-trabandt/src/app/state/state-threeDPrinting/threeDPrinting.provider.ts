import { provideState } from '@ngrx/store';
import { contentReducer } from './threeDPrinting.reducer';

export function provideAppContentState() {
  return provideState('app-content', contentReducer);
}
