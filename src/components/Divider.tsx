import styles from './Divider.module.css'

type Props = {
  type?: 'dashed' | 'doubledashed'
}

export default function Divider({ type = 'dashed' }: Props) {
  return (
    <div
      className={type === 'doubledashed' ? styles.doubledashed : styles.dashed}
      role="separator"
    />
  )
}
