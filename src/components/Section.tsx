import type { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  children: ReactNode
  small?: boolean
  id?: string
  as?: 'section' | 'div'
}

export default function Section({ children, small = false, id, as: Tag = 'section' }: Props) {
  return (
    <Tag id={id} className={small ? styles.small : styles.default}>
      {children}
    </Tag>
  )
}
