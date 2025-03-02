import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobPositions } from '../../../../models/basicModels/company-personal.model';
import { CompanyInformationsState } from './about-us.reducers';

// Feature Selector for company informations state
export const selectCompanyInformationsState =
  createFeatureSelector<CompanyInformationsState>('company-informations');

// Select company informations
export const selectCompanyInformations = createSelector(
  selectCompanyInformationsState,
  (state) => state.companyInformations
);

// Select job positions
export const selectJobPositions = createSelector(
  selectCompanyInformationsState,
  (state) => state.jobPositions
);

// Select managing directors
export const selectManagingDirectors = createSelector(
  selectCompanyInformations,
  (companyInformations) => companyInformations.managingDirectors
);

// Select contact person
export const selectContactPerson = createSelector(
  selectCompanyInformations,
  (companyInformations) => companyInformations.contactPerson
);

// Select job position by key
export const selectJobPositionByKey = (key: keyof JobPositions) =>
  createSelector(selectJobPositions, (jobPositions) => jobPositions[key]);
