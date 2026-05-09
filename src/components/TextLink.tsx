import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './TextLink.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: 'lg' | 'sm'
  children: ReactNode
}

export default function TextLink({ size = 'sm', children, className, ...rest }: Props) {
  return (
    <a
      className={[styles.link, size === 'lg' ? styles.lg : styles.sm, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        <span>→</span>
        <span>→</span>
        <span>→</span>
      </span>
    </a>
  )
}
