import { createReducer, on } from '@ngrx/store';
import { CompanyInformations, JobPositions } from '@sg-shared-librarys/models';
import {
  refreshCompanyInformationsState,
  setCompanyInformations,
  setJobPositions,
  updateCompanyInformation,
  updateJobPosition,
} from './about-us.actions';

// COMPANYINFORMATIONSSTATE
export interface CompanyInformationsState {
  companyInformations: CompanyInformations;
  jobPositions: JobPositions;
}

export const initialCompanyInformationsState: CompanyInformationsState = {
  companyInformations: {
    companyName: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    website: '',
    vatId: '',
    taxNumber: '',
    commercialRegister: '',
    managingDirectors: [],
    contactPerson: '',
    disclaimer: '',
    copyrightNotice: '',
    socialMediaLinks: {},
  },
  jobPositions: {
    Geschäftsführer: [],
    Logistiker: [],
    Prokurist: [],
    Entwickler: [],
    Designer: [],
  },
};

export const sharedCompanyInformationsReducer = createReducer(
  initialCompanyInformationsState,
  on(setCompanyInformations, (state, { companyInformations }) => ({
    ...state,
    companyInformations,
  })),
  on(setJobPositions, (state, { jobPositions }) => ({
    ...state,
    jobPositions,
  })),
  on(updateCompanyInformation, (state, { key, value }) => ({
    ...state,
    companyInformations: {
      ...state.companyInformations,
      [key]: value,
    },
  })),
  on(updateJobPosition, (state, { position, employees }) => ({
    ...state,
    jobPositions: {
      ...state.jobPositions,
      [position]: employees,
    },
  })),
  on(refreshCompanyInformationsState, (state) => ({
    ...state,
  }))
);
