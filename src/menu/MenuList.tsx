import { ReactNode, Children, HTMLAttributes } from 'react'
import { classNames } from '../lib/classNames'
import css from './MenuList.module.scss'

export interface MenuListProps extends HTMLAttributes<HTMLDivElement> {
  spacing: 0 | 1
  children: ReactNode[]
}

const mapping = {
  0: css.spacing0,
  1: css.spacing1,
}

export const MenuList = ({ children, spacing, ...props }: MenuListProps) => {
  return (
    <div
      {...props}
      className={classNames(css.menuList, props.className)}
      role={'group'}
    >
      {Children.map(children, (item) => (
        <div className={mapping[spacing]}>{item}</div>
      ))}
    </div>
  )
}
