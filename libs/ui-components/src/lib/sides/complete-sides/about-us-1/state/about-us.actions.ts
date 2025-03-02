import { createAction, props } from '@ngrx/store';
import {
  CompanyInformations,
  Employee,
  JobPositions,
} from '@sg-shared-librarys/models';

export const setCompanyInformations = createAction(
  '[Company] Set Company Informations',
  props<{ companyInformations: CompanyInformations }>()
);

export const updateCompanyInformation = createAction(
  '[Company] Update Company Information',
  props<{ key: keyof CompanyInformations; value: any }>()
);

export const setJobPositions = createAction(
  '[Company] Set Job Positions',
  props<{ jobPositions: JobPositions }>()
);

export const updateJobPosition = createAction(
  '[Company] Update Job Position',
  props<{ position: keyof JobPositions; employees: Employee[] }>()
);

export const refreshCompanyInformationsState = createAction(
  '[Company] Refresh State'
);
