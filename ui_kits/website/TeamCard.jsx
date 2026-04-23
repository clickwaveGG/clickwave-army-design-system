// TeamCard — soldier portrait with rank + name
const TeamCard = ({ name, rank, duty, initials }) => (
  <article className="team-card">
    <div className="team-photo" aria-hidden="true">
      <div className="team-initials">{initials}</div>
      <div className="team-reticle" />
    </div>
    <div className="team-meta">
      <span className="type-label team-rank">{rank}</span>
      <h3 className="team-name">{name}</h3>
      <p className="team-duty">{duty}</p>
    </div>
  </article>
);

window.TeamCard = TeamCard;
