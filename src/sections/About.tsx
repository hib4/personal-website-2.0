import Container from '../components/Container'
import PixelDecor from '../components/PixelDecor.module.css'
import PixelPerson from '../components/PixelPerson'
import Section from '../components/Section'
import SpotCard from '../components/SpotCard'
import WriteIn from '../components/WriteIn'
import styles from './About.module.css'

const SKILLS: { label: string; color: string; initial: string }[] = [
  { label: 'Systems', color: 'var(--bavarian-blue-400)', initial: 'SY' },
  { label: 'LLMs', color: 'var(--bavarian-blue-300)', initial: 'LL' },
  { label: 'Cloud', color: 'var(--bavarian-gold-400)', initial: 'CL' },
  { label: 'AI/ML', color: 'var(--bavarian-gold-300)', initial: 'AI' },
  { label: 'Distributed', color: 'var(--bavarian-red-400)', initial: 'DI' },
  { label: 'Performance', color: 'var(--bavarian-red-300)', initial: 'PE' },
]

export default function About() {
  return (
    <Section id="about">
      <div className={[PixelDecor.decor, PixelDecor.aboutDecor].join(' ')}>
        <PixelPerson />
      </div>
      <Container variant="inner">
        <div className={styles.header}>
          <h2 className={[styles.kicker, 't-headline-20'].join(' ')}>About</h2>
          <WriteIn className={[styles.title, 't-headline-48'].join(' ')}>
            The person behind <strong>the commits</strong>.
          </WriteIn>
          <p className={[styles.body, 't-body-20'].join(' ')}>
            Building cool stuff by day, chasing stars and quiet places by night.
          </p>
        </div>
        <div className={styles.grid}>
          {SKILLS.map((s) => (
            <div key={s.label} className={styles.gridItem}>
              <SpotCard label={s.label} color={s.color} initial={s.initial} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
