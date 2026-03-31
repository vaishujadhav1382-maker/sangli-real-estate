import { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'Featured', href: '#featured' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">

        {/* Brand */}
        <div className="header__brand">
          <img src="/images/logo.png" alt="Sangli Real Estate Logo" className="header__logo-img" />
          <div>
            <p className="header__business">Sangli Real Estate</p>
            <p className="header__owner">Swapnil Sushila Anandrao Patil | Sangli, Maharashtra</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="header__nav-link">{l.label}</a>
          ))}
          <a href="tel:+918237776264" className="btn btn-primary header__cta">
            Call Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__drawer${menuOpen ? ' header__drawer--open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.label} href={l.href} className="drawer__link" onClick={closeMenu}>{l.label}</a>
        ))}
        <a href="tel:+918237776264" className="btn btn-primary drawer__cta" onClick={closeMenu}>
          Call Now
        </a>
        <p className="drawer__contact">
          <a href="tel:+918237776264">8237776264</a> &nbsp;|&nbsp;
          <a href="tel:+918308450477">8308450477</a>
        </p>
      </div>
    </header>
  )
}
