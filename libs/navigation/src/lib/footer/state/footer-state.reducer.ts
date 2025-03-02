import { createReducer, on } from '@ngrx/store';
import { setCredits } from './footer-state.actions';
import { Credit } from '@sg-shared-librarys/models';

//CreditSTATE

export interface CreditState {
  credits: Credit[];
}
export const initialCreditState: CreditState = {
  credits: [],
};
export const sharedCreditReducer = createReducer(
  initialCreditState,

  on(setCredits, (state, { credits }) => ({
    ...state,
    credits,
  }))
);
