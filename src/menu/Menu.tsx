import { ReactNode } from 'react'
import { MenuProvider } from './MenuProvider'

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
      <div role={'menu'}>{children}</div>
    </MenuProvider>
  )
}
