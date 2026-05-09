import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './Input.module.css'

type LabelProps = {
  htmlFor?: string
  children: React.ReactNode
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  )
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} {...props} />
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={[styles.input, styles.textarea].join(' ')} {...props} />
}
