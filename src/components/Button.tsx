import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Common = {
  size?: 'lg' | 'sm'
  children: ReactNode
  className?: string
}

type AnchorProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string
    as?: 'a'
  }

type ButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    as: 'button'
    href?: never
  }

type Props = AnchorProps | ButtonProps

export default function Button(props: Props) {
  const { size = 'lg', children, className } = props
  const classes = [styles.button, size === 'lg' ? styles.lg : styles.sm, className]
    .filter(Boolean)
    .join(' ')

  if (props.as === 'button') {
    const { as: _as, size: _size, children: _children, className: _className, ...rest } = props
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    )
  }

  const { as: _as, size: _size, children: _children, className: _className, ...rest } = props
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}

export function ButtonGroup({
  children,
  align = 'flex-start',
}: {
  children: ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
}) {
  return (
    <div className={styles.group} style={{ justifyContent: align }}>
      {children}
    </div>
  )
}
