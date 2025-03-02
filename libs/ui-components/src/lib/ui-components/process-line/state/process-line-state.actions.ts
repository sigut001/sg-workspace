import { createAction, props } from '@ngrx/store';
import { ProcessLineElement } from '../process-line-element.model';

export const setProcessLineElements = createAction(
  '[Meta] Set ProcessLineElements',
  props<{ processLineElements: ProcessLineElement[] }>()
);
