import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <img src="/images/logo.png" alt="Sangli Real Estate Logo" className="footer__logo-img" />
            <div>
              <p className="footer__name">Sangli Real Estate</p>
              <p className="footer__tagline">SWAPNIL SUSHILA ANANDRAO PATIL | SANGLI, MAHARASHTRA</p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="footer__links" aria-label="Footer navigation">
            <h4 className="footer__heading">Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#featured">Featured</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <a href="tel:+918237776264">+91 8237776264</a>
            <a href="tel:+918308450477">+91 8308450477</a>
            <a href="mailto:swapnilsushila6264@gmail.com">swapnilsushila6264@gmail.com</a>
            <p>Sangli, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Sangli Real Estate &mdash; Swapnil Sushila Anandrao Patil. All rights reserved.
          </p>
          <p className="footer__seo-note">
            Property Dealer Sangli | Buy House Sangli | Rent Flats Sangli | Land for Sale Sangli
          </p>
        </div>
      </div>
    </footer>
  )
}
