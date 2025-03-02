import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProcessLineState } from './process-line-state.reducer';

export const selectProcessLineState =
  createFeatureSelector<ProcessLineState>('process-line');

export const selectProcessLineElements = createSelector(
  selectProcessLineState,
  (state) => state.processLineElements
);
