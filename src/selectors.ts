import { ReduxState, Company } from './types'

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible

export const isCompanySelected = (state: ReduxState, props: { company: Company }) => 
  state.selectedCompanyId === props.company.id

export const getCompanies = (state: ReduxState) =>
  state.companies

export const getSelectedCompany = (state: ReduxState): Company | undefined => {
    return state.selectedCompanyId == null ? undefined : state.companies.find((company) => company.id === state.selectedCompanyId);
};