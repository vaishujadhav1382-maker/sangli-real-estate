import './FeaturedProperties.css'

const PROPERTIES = [
  {
    image: '/images/prop1.jpg',
    badge: 'Premium Villa',
    title: 'Family Home',
    meta: 'North Sangli | Sale',
    desc: 'Large premium home perfect for families.',
  },
  {
    image: '/images/prop2.jpg',
    badge: 'City Apartment',
    title: 'Modern Apartment',
    meta: 'Central Sangli | Buy or Rent',
    desc: 'Modern apartments in the heart of the city.',
  },
  {
    image: '/images/prop3.jpg',
    badge: 'Land and Plot',
    title: 'Prime Land',
    meta: 'Sangli Outskirts | Growth Zone',
    desc: 'Great land plots for building or investment.',
  },
]

export default function FeaturedProperties() {
  return (
    <section className="featured section" id="featured" aria-labelledby="featured-heading">
      <div className="container">
        <p className="featured__eyebrow">Top Deals</p>
        <h2 className="section-title" id="featured-heading">
          Featured <span>Properties</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle featured__subtitle">
          Discover the best homes and land available in Sangli today.
        </p>

        <div className="featured__grid">
          {PROPERTIES.map((property, index) => (
            <article key={property.title} className="featured-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="featured-card__media">
                <img src={property.image} alt={property.title} />
                <span className="featured-card__badge">{property.badge}</span>
              </div>
              <div className="featured-card__body">
                <p className="featured-card__meta">{property.meta}</p>
                <h3 className="featured-card__title">{property.title}</h3>
                <p className="featured-card__desc">{property.desc}</p>
                <div className="featured-card__actions">
                  <a href="#contact" className="btn btn-primary featured-card__btn">Schedule a Call</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}