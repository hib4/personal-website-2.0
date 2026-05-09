import Container from '../components/Container'
import PixelDecor from '../components/PixelDecor.module.css'
import PixelPencil from '../components/PixelPencil'
import Section from '../components/Section'
import WriteIn from '../components/WriteIn'
import styles from './Blog.module.css'

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
