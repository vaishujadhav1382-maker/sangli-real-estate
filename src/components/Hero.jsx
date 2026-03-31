import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero__overlay" />

      <div className="hero__content container">
        <div className="hero__grid">
          <div className="hero__left">
            <p className="hero__badge animate-fadeInUp">Your Trusted Partner</p>

            <h1 className="hero__title animate-fadeInUp animate-delay-1">
              Find Your Dream
              <span> Home in Sangli</span>
            </h1>

            <p className="hero__subtitle animate-fadeInUp animate-delay-2">
              Simple, transparent, and direct real estate services. We help you buy, sell, and rent with complete confidence.
            </p>

            <div className="hero__cta-group animate-fadeInUp animate-delay-3">
              <a href="tel:+918237776264" className="btn btn-primary hero__btn-call">
                Call Now
              </a>
              <a href="#services" className="btn btn-outline">
                Explore Services
              </a>
            </div>


          </div>

          <aside className="hero__panel animate-fadeInUp animate-delay-2">
            <div className="hero__trust-strip">
              <div>
                <strong>Re-envisioning</strong>
                <span>real estate in Sangli</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>Properties Dealt</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </aside>
        </div>
      </div>


    </section>
  )
}
