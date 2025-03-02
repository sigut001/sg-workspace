import { createReducer, on } from '@ngrx/store';
import { ProcessLineElement } from '../process-line-element.model';
import { setProcessLineElements } from './process-line-state.actions';

export interface ProcessLineState {
  processLineElements: ProcessLineElement[];
}
export const initialProcessLineState: ProcessLineState = {
  processLineElements: [],
};
export const sharedProcessLineReducer = createReducer(
  initialProcessLineState,

  on(setProcessLineElements, (state, { processLineElements }) => ({
    ...state,
    processLineElements,
  }))
);
