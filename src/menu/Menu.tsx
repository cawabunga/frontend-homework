import { ReactNode, useCallback, useRef } from 'react'
import { useOutsideClickHandler } from '../lib/useOutsideClickHandler'
import { MenuProvider } from './MenuProvider'
import css from './Menu.module.scss'

interface MenuProps {
  open: boolean
  requestClose: () => void
  children: ReactNode
}

export const Menu = ({ open, requestClose, children }: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleOutsideClick = useCallback(
    (event: Event) => {
      event.stopPropagation()
      requestClose()
    },
    [requestClose]
  )

  useOutsideClickHandler(ref, handleOutsideClick, true)

  if (!open) {
    return null
  }

  return (
    <MenuProvider requestClose={requestClose}>
      <div role={'menu'} className={css.menu} ref={ref}>
        {children}
      </div>
    </MenuProvider>
  )
}
