import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getCompanies } from './selectors'
import { setSelectedCompanyId } from './actions'

import CompanyLink from './CompanyLink'

type ReduxProps = {
  companies: Array<Company>
}

type DispatchProps = {
  setSelectedCompanyId: (companyId: Company['id']) => void
}

export const Companies = ({
  companies,
  setSelectedCompanyId,
}: ReduxProps & DispatchProps) => (
  <>
    <div>Your companies</div>

    {companies.map((company) => (
      <CompanyLink
        key={company.id}
        company={company}
        onPress={() => setSelectedCompanyId(company.id)}
      />
    ))}
  </>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  }),
  { setSelectedCompanyId }
)(Companies)
