import Card, { CardContent, CardImage, CardTitle } from '../components/Card'
import Container from '../components/Container'
import PixelDecor from '../components/PixelDecor.module.css'
import PixelCode from '../components/PixelCode'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import WriteIn from '../components/WriteIn'
import styles from './Projects.module.css'

type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  live: string
  color: string
  initial: string
  rotate: 'left' | 'right'
}

const PROJECTS: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of the project. What problem it solves and the most interesting thing about how it does that.',
    tags: ['TypeScript', 'React', 'Vite'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'var(--bavarian-blue-400)',
    initial: '01',
    rotate: 'left',
  },
  {
    title: 'Project Two',
    description:
      'Another short blurb. Replace with a real one-paragraph summary that highlights the impact or the technical twist.',
    tags: ['Python', 'Postgres', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'var(--bavarian-gold-400)',
    initial: '02',
    rotate: 'right',
  },
  {
    title: 'Project Three',
    description:
      'Third placeholder. Keep these to two short sentences so cards stay roughly the same height in the grid.',
    tags: ['Go', 'gRPC', 'k8s'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'var(--bavarian-red-400)',
    initial: '03',
    rotate: 'left',
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <div className={[PixelDecor.decor, PixelDecor.projectsDecor].join(' ')}>
        <PixelCode />
      </div>
      <Container>
        <div className={styles.header}>
          <h2 className={[styles.kicker, 't-headline-20'].join(' ')}>Projects</h2>
          <WriteIn className={[styles.title, 't-headline-48'].join(' ')}>
            Selected <strong>work</strong>.
          </WriteIn>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <CardImage rotate={p.rotate} color={p.color} label={p.initial} />
              <CardContent>
                <CardTitle>{p.title}</CardTitle>
                <p className={[styles.description, 't-body-20'].join(' ')}>{p.description}</p>
                <ul className={styles.tags}>
                  {p.tags.map((t) => (
                    <li key={t} className={styles.tag}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <TextLink href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </TextLink>
                  <TextLink href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </TextLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
