import { HTMLAttributes, ReactElement, ReactNode } from 'react'
import { classNames } from '../lib/classNames'
import { useMenuItem } from './hooks'
import css from './Menu.module.scss'

type CommonProps = HTMLAttributes<Element>

export interface MenuItemRenderProps extends CommonProps {
  onClick: () => void
  children?: ReactNode
}

export interface MenuItemProps extends CommonProps {
  children?: ReactNode
  onClick: () => void
  render: (props: MenuItemRenderProps) => ReactElement
}

export const MenuItem = ({ onClick, render, ...props }: MenuItemProps) => {
  const menuItemProps = useMenuItem({ onClick })
  return render({ ...props, ...menuItemProps })
}

MenuItem.defaultProps = {
  onClick: () => {},
  render: ({ children, ...props }: MenuItemRenderProps) => {
    return (
      <button
        type={'button'}
        role={'menuitem'}
        {...props}
        className={classNames(css.menu__item, props.className)}
      >
        {children}
      </button>
    )
  },
}
