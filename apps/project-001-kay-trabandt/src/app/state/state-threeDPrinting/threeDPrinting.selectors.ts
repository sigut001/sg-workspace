import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContentState } from './threeDPrinting.reducer';
import { Material } from '../../models/production-content.model';

export const selectContentState =
  createFeatureSelector<ContentState>('app-content');

export const selectProcessTypes = createSelector(
  selectContentState,
  (state) => state.processTypes
);
export const selectMaterials = createSelector(
  selectContentState,
  (state) => state.materials
);

export const selectMaterialByName = (materialName: string) =>
  createSelector(
    selectMaterials,
    (materials: Material[]) =>
      materials.find((material) => material.type.name === materialName) || null
  );

export const selectMaterialByPath = (materialName: string) =>
  createSelector(
    selectMaterials,
    (materials: Material[]) =>
      materials.find((material) => material.type.path === materialName) || null
  );

export const selectAllChooseableColors = createSelector(
  selectContentState,
  (state) => state.allChooseableColors
);

// export const selectFinishingProcessTypes = createSelector(
//   selectContentState,
//   (state) => state.finshingProcessTypes
// );
