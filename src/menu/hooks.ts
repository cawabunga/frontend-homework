import { useContext } from 'react'
import { MenuContext } from './MenuContext'

export const useMenuItemDefaultHandler = () => {
  const { requestClose } = useContext(MenuContext)
  return requestClose
}
