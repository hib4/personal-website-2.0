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

  return (
    // @ts-expect-error — ref is HTMLDivElement; all target tags are HTMLElements
    <Tag
      ref={ref}
      className={[visible ? styles.visible : styles.hidden, className]
        .filter(Boolean)
        .join(' ')}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
