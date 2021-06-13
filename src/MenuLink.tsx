import { MenuItem } from './menu/MenuItem'
import { classNames } from './lib/classNames'
import css from './MenuLink.module.scss'

type Props = {
  text: string
  icon: string
  onClick: () => void
  className?: string
}

const MenuLink = ({ icon, text, onClick, className }: Props) => {
  return (
    <MenuItem
      onClick={onClick}
      aria-label={text}
      className={classNames(css.menuLink, className)}
    >
      <i className={classNames('material-icons', css.icon)}>{icon}</i>

      <span className={css.label}>{text}</span>
    </MenuItem>
  )
}

MenuLink.defaultProps = {
  onClick: () => {},
}

export default MenuLink
