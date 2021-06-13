import MenuLink from './MenuLink'
import Companies from './Companies'
import { Menu, MenuProps } from './menu/Menu'
import { MenuDivider } from './menu/MenuDivider'
import { ExitMenuLink } from './ExitMenuLink'
import { MenuList } from './menu/MenuList'

interface DropdownMenuProps extends Omit<MenuProps, 'children'> {}

export const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <Menu {...props}>
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
