import './About.css'

const STATS = [
  { value: '500+', label: 'Properties Dealt' },
  { value: '20+',  label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+',  label: 'Prime Locations' },
]

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 className="section-title" id="about-heading">
          About <span>Us</span>
        </h2>
        <div className="section-divider" />

        <div className="about__layout">
          {/* Text Block */}
          <div className="about__text animate-fadeInUp">
            <p className="about__eyebrow">Local Excellence</p>
            <h3 className="about__sub">
              Elevating Real Estate in Sangli
            </h3>
            <p>
              At <strong>Sangli Real Estate</strong>, led by <strong>Swapnil Patil</strong>, we don't just close deals—we build lifelong relationships based on absolute trust, fierce local expertise, and unparalleled transparency.
            </p>
            <p>
              Whether you are searching for your forever home, expanding your commercial portfolio, or securing high-yield land, our bespoke property solutions ensure a seamless, stress-free experience from the first handshake to the final signature. 
            </p>
            <p>
              We specialize in curating the finest <strong>premium houses, luxury apartments, row houses, and high-value commercial plots</strong> tailored exclusively to your ambitions.
            </p>
          </div>

          <div className="about__visual animate-fadeInUp animate-delay-2">
            <div className="about__image-card">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Luxury Real Estate Interior" className="about__image" />
              <div className="about__image-content">
                <p className="about__image-label">Verified Deals</p>
                <h4>Expert local guidance for every transaction</h4>
              </div>
            </div>

            <div className="about__stats">
              {STATS.map(s => (
                <div key={s.label} className="stat-card">
                  <p className="stat-card__value">{s.value}</p>
                  <p className="stat-card__label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
