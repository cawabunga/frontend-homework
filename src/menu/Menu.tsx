import { ReactNode, useCallback, useState } from 'react'
import { useOutsideClickHandler } from '../lib/useOutsideClickHandler'
import { MenuProvider } from './MenuProvider'
import css from './Menu.module.scss'

export interface MenuProps {
  open: boolean
  requestClose: () => void
  children: ReactNode
}

export const Menu = ({ open, requestClose, children }: MenuProps) => {
  const [targetEl, setTargetEl] = useState<HTMLDivElement | null>(null)

  const handleOutsideClick = useCallback(
    (event: Event) => {
      event.stopPropagation()
      requestClose()
    },
    [requestClose]
  )

  useOutsideClickHandler(targetEl, handleOutsideClick, true)

  if (!open) {
    return null
  }

  return (
    <MenuProvider requestClose={requestClose}>
      <div role={'menu'} className={css.menu} ref={setTargetEl}>
        {children}
      </div>
    </MenuProvider>
  )
}
