import Container from '../components/Container'
import PixelDecor from '../components/PixelDecor.module.css'
import PixelPencil from '../components/PixelPencil'
import Section from '../components/Section'
import TextLink from '../components/TextLink'
import WriteIn from '../components/WriteIn'
import styles from './Blog.module.css'

type Post = {
  title: string
  date: string
  excerpt: string
  href: string
}

const POSTS: Post[] = [
  {
    title: 'Notes on building a design system',
    date: '2026-04-12',
    excerpt:
      'Lessons from porting a Next.js + styled-components design language to plain CSS variables across two stacks.',
    href: '#',
  },
  {
    title: 'A small case for monospace UIs',
    date: '2026-03-01',
    excerpt:
      'Why I keep coming back to JetBrains Mono for editorial-feeling product surfaces — and where it falls down.',
    href: '#',
  },
  {
    title: 'Ship the gradient border',
    date: '2026-01-22',
    excerpt:
      'A short walkthrough of the mask-composite trick for crisp gradient borders that keep their corner radii.',
    href: '#',
  },
]

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

export default function Blog() {
  return (
    <Section id="blog">
      <div className={[PixelDecor.decor, PixelDecor.blogDecor].join(' ')}>
        <PixelPencil />
      </div>
      <Container variant="inner">
        <div className={styles.header}>
          <h2 className={[styles.kicker, 't-headline-20'].join(' ')}>Blog</h2>
          <WriteIn className={[styles.title, 't-headline-48'].join(' ')}>
            Still <strong>cooking</strong>.
          </WriteIn>
        </div>
      </Container>
    </Section>
  )
}
