import MenuLink from './MenuLink'
import Companies from './Companies'

type Props = {
  open: boolean
}

const DropdownMenu = ({ open }: Props) => {
  if (!open) {
    return null
  }

  return (
    <div>
      <Companies />

      <div>
        <MenuLink text="Get the mobile app" icon="phone_iphone" />
        <MenuLink text="Community" icon="people" />
        <MenuLink text="Knowledge base" icon="book" />
      </div>

      <div>
        <MenuLink text="Settings" icon="settings" />
        <MenuLink text="Log out" icon="exit_to_app" />
      </div>
    </div>
  )
}

export default DropdownMenu
