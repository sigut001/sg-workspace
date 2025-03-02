import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CostumerReviewsState } from './costumer-reviews-state.reducer';

export const selectCostumerReviewsState =
  createFeatureSelector<CostumerReviewsState>('costumer-reviews');

export const selectCustomerReviews = createSelector(
  selectCostumerReviewsState,
  (state) => state.customerReviews
);
