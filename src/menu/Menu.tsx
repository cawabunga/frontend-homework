import { ReactNode } from 'react'
import { MenuProvider } from './MenuProvider'
import css from './Menu.module.scss'

interface MenuProps {
  open: boolean
  requestClose: () => void
  children: ReactNode
}

export const Menu = ({ open, requestClose, children }: MenuProps) => {
  if (!open) {
    return null
  }

  return (
    <MenuProvider requestClose={requestClose}>
      <div role={'menu'} className={css.menu}>
        {children}
      </div>
    </MenuProvider>
  )
}
