import { Company } from './types'

type Props = {
  company: Company
  onPress: () => void
}

const CompanyLink = ({ company, onPress }: Props) => (
  <button type={'button'} onClick={onPress}>
    {company.name}
  </button>
)

export default CompanyLink
