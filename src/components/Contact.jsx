import './Contact.css'

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 className="section-title contact__title" id="contact-heading">
          Contact <span>Us</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Reach out today for verified property opportunities in Sangli.
        </p>

        <div className="contact__grid">

          {/* Card: Phone */}
          <div className="contact-card animate-fadeInUp">
            <div className="contact-card__icon">01</div>
            <h3 className="contact-card__label">Call Us</h3>
            <a href="tel:+918237776264" className="contact-card__value contact-card__value--link">
              +91 8237776264
            </a>
            <a href="tel:+918308450477" className="contact-card__value contact-card__value--link">
              +91 8308450477
            </a>
          </div>

          {/* Card: Email */}
          <div className="contact-card animate-fadeInUp animate-delay-1">
            <div className="contact-card__icon">02</div>
            <h3 className="contact-card__label">Email Us</h3>
            <a href="mailto:swapnilsushila6264@gmail.com" className="contact-card__value contact-card__value--link">
              swapnilsushila6264@gmail.com
            </a>
          </div>

          {/* Card: Location */}
          <div className="contact-card animate-fadeInUp animate-delay-2">
            <div className="contact-card__icon">03</div>
            <h3 className="contact-card__label">Location</h3>
            <p className="contact-card__value">Sangli, Maharashtra, India</p>
          </div>
        </div>

        {/* CTA Row */}
        <div className="contact__actions">
          <a href="tel:+918237776264" className="btn btn-primary contact__btn">
            Call +91 8237776264
          </a>

          <a href="mailto:swapnilsushila6264@gmail.com" className="btn btn-outline contact__btn contact__btn--dark">
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}
