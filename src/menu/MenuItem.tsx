import { ReactElement, ReactNode, useCallback } from 'react'
import { useMenuItemDefaultHandler } from './hooks'

export interface MenuItemRenderProps {
  onClick: () => void
  children?: ReactNode
}

export const MenuItem = ({
  children,
  onClick,
  render,
}: {
  children?: ReactNode
  onClick: () => void
  render: (props: MenuItemRenderProps) => ReactElement
}) => {
  const defaultHandler = useMenuItemDefaultHandler()

  const handleClick = useCallback(() => {
    defaultHandler()
    onClick()
  }, [defaultHandler, onClick])

  return render({ onClick: handleClick, children })
}

MenuItem.defaultProps = {
  onClick: () => {},
  render: (props: MenuItemRenderProps) => (
    <button type={'button'} role={'menuitem'} {...props} />
  ),
}
