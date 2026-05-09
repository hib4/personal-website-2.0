import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './AnimateIn.module.css'

type Props = {
  children: ReactNode
  delay?: number
  as?: keyof HTMLElementTagNameMap
  className?: string
}

export default function AnimateIn({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
}: Props) {
  const [ref, visible] = useInView()

  const cls = [visible ? styles.visible : styles.hidden, className]
    .filter(Boolean)
    .join(' ')

  return (
    // @ts-expect-error — ref is HTMLDivElement; all target tags are HTMLElements
    <Tag
      // @ts-expect-error
      ref={ref}
      className={cls}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
