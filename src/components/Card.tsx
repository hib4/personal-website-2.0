import type { ReactNode } from 'react'
import styles from './Card.module.css'

type Props = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: Props) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.card}>{children}</div>
    </div>
  )
}

export function CardImage({
  rotate = 'right',
  color = 'var(--bavarian-blue-400)',
  label,
}: {
  rotate?: 'left' | 'right'
  color?: string
  label?: string
}) {
  return (
    <div
      className={[styles.image, rotate === 'left' ? styles.rotateLeft : styles.rotateRight].join(
        ' ',
      )}
      aria-hidden="true"
    >
      <div className={styles.imagePlaceholder} style={{ background: color }}>
        {label}
      </div>
    </div>
  )
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className={styles.content}>{children}</div>
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className={[styles.title, 't-headline-32'].join(' ')}>{children}</h3>
}
