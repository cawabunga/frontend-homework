import { ReactNode } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({
  requestClose,
  children,
}: {
  requestClose: () => void
  children: ReactNode
}) => {
  return (
    <MenuContext.Provider value={{ requestClose }}>
      {children}
    </MenuContext.Provider>
  )
}
