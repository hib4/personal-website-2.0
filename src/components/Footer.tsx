import styles from './Footer.module.css'
import PixelH from './PixelH'

const COLUMNS = [
  {
    title: 'Site',
    links: [
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#blog', label: 'Blog' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { href: 'https://github.com/hib4', label: 'GitHub' },
      { href: 'https://linkedin.com/in/hib4', label: 'LinkedIn' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: 'https://go.hib4.me/resume', label: 'Resume' },
      { href: '#', label: 'Uses' },
      { href: '#', label: 'Now' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.bg} aria-hidden="true" />
          <div className={styles.logoBlock}>
            <a href="#top" className={styles.logo} aria-label="Home">
              <PixelH size={36} />
            </a>
            <p>Hibatullah Fawwaz Hana.</p>
          </div>
          <div className={styles.content}>
            <nav className={styles.links} aria-label="Footer">
              {COLUMNS.map((col) => (
                <div key={col.title} className={styles.column}>
                  <h3 className={styles.title}>{col.title}</h3>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hibatullah Fawwaz Hana.</p>
      </div>
    </footer>
  )
}
