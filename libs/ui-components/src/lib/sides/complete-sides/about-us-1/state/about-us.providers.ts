import { provideState } from '@ngrx/store';
import { sharedCompanyInformationsReducer } from './about-us.reducers';

export function provideCompanyInformationsState() {
  return provideState('company-informations', sharedCompanyInformationsReducer);
}
