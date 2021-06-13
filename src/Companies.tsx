import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies, getSelectedCompanyId } from './selectors'
import { setSelectedCompanyId } from './actions'

import CompanyLink from './CompanyLink'
import { MenuList } from './menu/MenuList'
import css from './Companies.module.scss'

type ReduxProps = {
  companies: Array<Company>
  selectedCompanyId: Company['id'] | null
}

type DispatchProps = {
  setSelectedCompanyId: (companyId: Company['id']) => void
}

export const Companies = ({
  companies,
  selectedCompanyId,
  setSelectedCompanyId,
}: ReduxProps & DispatchProps) => (
  <>
    <div className={css.heading} aria-owns={'companies'}>
      Your companies
    </div>

    <MenuList spacing={0} id={'companies'}>
      {companies.map((company) => (
        <CompanyLink
          key={company.id}
          company={company}
          onClick={() => setSelectedCompanyId(company.id)}
          isActive={company.id === selectedCompanyId}
        />
      ))}
    </MenuList>
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId }
)(Companies)
