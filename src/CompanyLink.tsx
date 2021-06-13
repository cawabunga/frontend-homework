import { Company } from './types'

type Props = {
  company: Company
  onClick: () => void
}

const CompanyLink = ({ company, onClick }: Props) => (
  <button type={'button'} onClick={onClick}>
    {company.name}
  </button>
)

export default CompanyLink
