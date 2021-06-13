import { ReactNode, useCallback } from 'react'
import { useMenuItemDefaultHandler } from './hooks'

export const MenuItem = ({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) => {
  const defaultHandler = useMenuItemDefaultHandler()

  const handleClick = useCallback(() => {
    defaultHandler()
    onClick()
  }, [defaultHandler, onClick])

  return (
    <button type={'button'} onClick={handleClick}>
      {children}
    </button>
  )
}

MenuItem.defaultProps = {
  onClick: () => {},
}
