import { createReducer, on } from '@ngrx/store';
import { CustomerReview } from '../costumer-review.model';
import { setCustomerReviews } from './costumer-reviews-state.actions';
export interface CostumerReviewsState {
  customerReviews: CustomerReview[];
}
export const initialCostumerReviewsState: CostumerReviewsState = {
  customerReviews: [],
};
export const sharedCostumerReviewsReducer = createReducer(
  initialCostumerReviewsState,
  on(setCustomerReviews, (state, { customerReviews }) => ({
    ...state,
    customerReviews,
  }))
);
