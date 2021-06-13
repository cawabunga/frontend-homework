import { Company } from './types'
import { classNames } from './lib/classNames'
import { MenuItem } from './menu/MenuItem'
import css from './CompanyLink.module.scss'

type Props = {
  company: Company
  isActive: boolean
  onClick: () => void
}

const CompanyLink = ({ company, onClick, isActive }: Props) => {
  return (
    <MenuItem
      onClick={onClick}
      aria-label={company.name}
      aria-current={isActive}
      className={classNames(css.menuItem, isActive ? css.active : null)}
    >
      <div className={css.label}>{company.name}</div>

      {isActive && (
        <span className={classNames('material-icons', css.icon)}>check</span>
      )}
    </MenuItem>
  )
}

export default CompanyLink
