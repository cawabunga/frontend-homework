import MenuLink from './MenuLink'
import Companies from './Companies'
import { MenuItem } from './menu/MenuItem'
import { Menu } from './menu/Menu'

type Props = {
  open: boolean
  requestClose: () => void
}

const DropdownMenu = ({ open, requestClose }: Props) => {
  if (!open) {
    return null
  }

  return (
    <Menu open={open} requestClose={requestClose}>
      <Companies />

      <div>
        <MenuItem>
          <MenuLink text="Get the mobile app" icon="phone_iphone" />
        </MenuItem>
        <MenuItem>
          <MenuLink text="Community" icon="people" />
        </MenuItem>
        <MenuItem>
          <MenuLink text="Knowledge base" icon="book" />
        </MenuItem>
      </div>

      <div>
        <MenuItem>
          <MenuLink text="Settings" icon="settings" />
        </MenuItem>

        <MenuItem>
          <MenuLink text="Log out" icon="exit_to_app" />
        </MenuItem>
      </div>
    </Menu>
  )
}

export default DropdownMenu
