import { createAction, props } from '@ngrx/store';
import { CustomerReview } from '../costumer-review.model';

export const setCustomerReviews = createAction(
  '[Meta] Set Costumer Reviews',
  props<{ customerReviews: CustomerReview[] }>()
);
