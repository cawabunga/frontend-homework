import MenuLink from './MenuLink'
import Companies from './Companies'
import { Menu } from './menu/Menu'
import { MenuDivider } from './menu/MenuDivider'
import { ExitMenuLink } from './ExitMenuLink'
import { MenuList } from './menu/MenuList'

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

      <MenuDivider />

      <MenuList spacing={1}>
        <MenuLink text="Get the mobile app" icon="phone_iphone" />
        <MenuLink text="Community" icon="people" />
        <MenuLink text="Knowledge base" icon="book" />
      </MenuList>

      <MenuDivider />

      <MenuList spacing={1}>
        <MenuLink text="Settings" icon="settings" />
        <ExitMenuLink />
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
