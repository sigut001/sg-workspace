import { createAction, props } from '@ngrx/store';
import { Credit } from '@sg-shared-librarys/models';

export const setCredits = createAction(
  '[Credit] Set Credits',
  props<{ credits: Credit[] }>()
);
