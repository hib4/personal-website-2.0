import Container from '../components/Container'
import PixelDecor from '../components/PixelDecor.module.css'
import PixelEnvelope from '../components/PixelEnvelope'
import Section from '../components/Section'
import WriteIn from '../components/WriteIn'
import styles from './Contact.module.css'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/hib4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.04c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hib4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5C0 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.27h4.55V22H.22V8.27Zm7.43 0h4.36v1.88h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V22h-4.55v-6.27c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.32V22H7.65V8.27Z" />
      </svg>
    ),
  },
  // {
  //   label: 'Twitter / X',
  //   href: 'https://twitter.com',
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
  //       <path d="M18.244 2H21l-6.52 7.45L22 22h-6.83l-4.78-6.26L4.8 22H2l7-8L2 2h7l4.31 5.71L18.244 2Zm-2.4 18h1.7L7.27 4H5.5l10.34 16Z" />
  //     </svg>
  //   ),
  // },
  {
    label: 'Email',
    href: 'mailto:hibatullahfawwazhana@gmail.com',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width="22"
        height="22"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <Section id="contact">
      <div className={[PixelDecor.decor, PixelDecor.contactDecor].join(' ')}>
        <PixelEnvelope />
      </div>
      <Container variant="slim">
        <div className={styles.header}>
          <h2 className={[styles.kicker, 't-headline-20'].join(' ')}>Contact</h2>
          <WriteIn className={[styles.title, 't-headline-48'].join(' ')}>
            Let's <strong>connect</strong>.
          </WriteIn>
          <p className={[styles.body, 't-body-20'].join(' ')}>
            Find me on the platforms below — or send a direct email.
          </p>
        </div>

        <ul className={styles.socials} role="list">
          {SOCIALS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.pill}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
              >
                <span className={styles.pillIcon}>{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
