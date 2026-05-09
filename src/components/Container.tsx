import type { ReactNode } from 'react'
import styles from './Container.module.css'

type Props = {
  children: ReactNode
  variant?: 'default' | 'inner' | 'slim'
  className?: string
}

export default function Container({ children, variant = 'default', className }: Props) {
  const variantClass =
    variant === 'slim'
      ? styles.slim
      : variant === 'inner'
        ? styles.inner
        : styles.default
  return (
    <div className={[styles.container, variantClass, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
