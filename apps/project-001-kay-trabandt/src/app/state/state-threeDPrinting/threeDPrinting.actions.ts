import { createAction, props } from '@ngrx/store';
import { chooseableColors } from '../../config-files/production.config';
import { Material, Process } from '../../models/production-content.model';

// 3D-Printing

export const setProcessTypes = createAction(
  '[App-3dPrinting] Set ProcessTypes',
  props<{ processTypes: Process[] }>()
);

export const setMaterials = createAction(
  '[App-3dPrinting] Set Materials',
  props<{ materials: Material[] }>()
);

export const setAllChooseableColors = createAction(
  '[App-3dPrinting] Set Colors',
  props<{ colors: chooseableColors[] }>()
);

// export const setFinishingProcessTypes = createAction(
//   '[App-3dPrinting] Set FinishingProcessTypes',
//   props<{ finishingProcessTypes: FinishingProcessType[] }>()
// );
