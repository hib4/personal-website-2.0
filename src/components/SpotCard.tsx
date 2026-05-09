import styles from './SpotCard.module.css'

type Props = {
  label: string
  color?: string
  initial?: string
}

export default function SpotCard({ label, color = 'var(--bavarian-blue-400)', initial }: Props) {
  const symbol = initial ?? label.slice(0, 2).toUpperCase()
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ background: color }} aria-hidden="true">
        <span>{symbol}</span>
      </div>
      <h4 className={[styles.title, 't-headline-20'].join(' ')}>{label}</h4>
    </div>
  )
}
