import { provideState } from '@ngrx/store';
import { sharedCostumerReviewsReducer } from './costumer-reviews-state.reducer';

export function provideCostumerReviewsState() {
  return provideState('costumer-reviews', sharedCostumerReviewsReducer);
}
