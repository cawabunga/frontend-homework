import { createContext } from 'react'

export interface IMenuContext {
  requestClose: () => void
}

export const MenuContext = createContext<IMenuContext>({
  requestClose: () => {},
})
