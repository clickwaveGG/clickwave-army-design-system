// SectionHead — shared section header (kicker + big headline)
const SectionHead = ({ kicker, title, index, total }) => (
  <header className="section-head">
    <div className="section-head-row">
      <span className="type-label">// {kicker}</span>
      {index != null && total != null && (
        <span className="type-label section-count">{String(index).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
      )}
    </div>
    <h2 className="section-title">{title}</h2>
  </header>
);

window.SectionHead = SectionHead;
