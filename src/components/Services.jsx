import './Services.css'

const SERVICES = [
  { code: '01', title: 'House Buying and Selling', desc: 'Trusted support for buying and selling independent houses and villas in prime Sangli locations.' },
  { code: '02', title: 'Apartments and Flats',     desc: '1 BHK, 2 BHK, and 3 BHK apartments for both purchase and rental requirements.' },
  { code: '03', title: 'Row Houses',               desc: 'Quality row house options with practical layouts and investment-friendly pricing.' },
  { code: '04', title: 'Land and Fields',          desc: 'Residential plots, commercial land parcels, and agricultural fields for long-term growth.' },
  { code: '05', title: 'Rental Services',          desc: 'Reliable tenant and landlord matchmaking for residential and commercial rentals.' },
  { code: '06', title: 'Deal Consultation',        desc: 'Local market guidance, documentation support, and closing assistance from start to finish.' },
]

export default function Services() {
  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <h2 className="section-title" id="services-heading">
          Premium Property <span>Services</span>
        </h2>
        <div className="section-divider" />

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="service-card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-card__icon">{s.code}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <a href="#contact" className="service-card__link">Get Deal Consultation</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
