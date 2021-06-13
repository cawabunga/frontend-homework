import MenuLink from './MenuLink'
import css from './ExitMenuLink.module.scss'

export const ExitMenuLink = () => {
  return <MenuLink text="Log out" icon="exit_to_app" className={css.color} />
}
