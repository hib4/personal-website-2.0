import { useEffect, useState } from 'react'
import Button from './Button'
import PixelH from './PixelH'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo} aria-label="Home">
          <PixelH size={36} />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className={styles.cta}>
            Hire me
          </Button>
          <button
            type="button"
            className={[styles.toggle, 'menu_toggle'].join(' ')}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            data-open={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            Menu
          </button>
        </nav>
      </div>

      <div
        className={styles.mobileWrapper}
        aria-selected={isOpen}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileContainer}>
          <div className={styles.mobileTop}>
            <a href="#top" className={styles.logo} aria-label="Home" onClick={() => setIsOpen(false)}>
              <PixelH size={36} />
            </a>
            <button
              type="button"
              className={styles.toggle}
              aria-label="Close menu"
              data-open={true}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
          <div className={styles.mobileNav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" size="lg" className={styles.mobileCta}>
              Hire me
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
