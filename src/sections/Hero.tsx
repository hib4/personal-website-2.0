import Button, { ButtonGroup } from '../components/Button'
import Container from '../components/Container'
import PixelBackground from '../components/PixelBackground'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div id="top" className={styles.hero}>
      <div className={styles.pixelBg}>
        <PixelBackground />
      </div>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={[styles.title, 't-headline-88'].join(' ')}>
              Hey, I'm <strong>Hiba</strong>.<br />I build cool stuff.
            </h1>
            <p className={[styles.subtitle, 't-body-24'].join(' ')}>
              Software engineer focused on <strong>AI</strong>, <strong>design
              systems</strong>, and whatever feels <strong>ship-worthy</strong> this sprint.
            </p>
            <ButtonGroup>
              <Button href="" size="lg">
                Resume
              </Button>
              <Button href="#projects" size="lg">
                See What I've Built
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </div>
  )
}
