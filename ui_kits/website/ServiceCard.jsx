// ServiceCard — service tile with accent-colored ghost CTA
const ServiceCard = ({ number, title, body, variant = 'purple', featured }) => (
  <article className={`service-card ${featured ? 'service-card--featured' : ''} service-card--${variant}`}>
    {featured ? (
      <span className="service-star type-label">★ Recomendado</span>
    ) : (
      <span className={`type-label service-num service-num--${variant}`}>// SERVIÇO {number}</span>
    )}
    <h3 className="service-title">{title}</h3>
    <p className="service-body">{body}</p>
    <button className={`btn-ghost btn-ghost--${variant} service-cta`}>Ver Arsenal →</button>
  </article>
);

window.ServiceCard = ServiceCard;
