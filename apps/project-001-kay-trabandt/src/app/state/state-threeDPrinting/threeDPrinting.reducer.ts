import { createReducer, on } from '@ngrx/store';

import {
  setAllChooseableColors,
  // setFinishingProcessTypes,
  setMaterials,
  setProcessTypes,
} from './threeDPrinting.actions';
import { chooseableColors } from '../../config-files/production.config';
import { Material, Process } from '../../models/production-content.model';

export interface ContentState {
  processTypes: Process[];
  materials: Material[];
  allChooseableColors: chooseableColors[];

  // finshingProcessTypes: FinishingProcessType[];
}

export const inititalContentnState: ContentState = {
  materials: [],
  processTypes: [],
  allChooseableColors: [],
  // finshingProcessTypes: [],
};

export const contentReducer = createReducer(
  inititalContentnState,
  on(setProcessTypes, (state, { processTypes }) => ({
    ...state,
    processTypes: processTypes,
  })),
  on(setMaterials, (state, { materials }) => ({
    ...state,
    materials: materials,
  })),
  on(setAllChooseableColors, (state, { colors }) => ({
    ...state,
    allChooseableColors: colors,
  }))
  // on(setFinishingProcessTypes, (state, { finishingProcessTypes }) => ({
  //   ...state,
  //   finshingProcessTypes: finishingProcessTypes,
  // })),
);
