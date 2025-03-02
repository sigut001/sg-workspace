import { createAction, props } from '@ngrx/store';
import { CompanyValue } from '../company-values-slider.model';

export const setCompanyValues = createAction(
  '[Company-Values] Set Company Values',
  props<{ companyValues: CompanyValue[] }>()
);
