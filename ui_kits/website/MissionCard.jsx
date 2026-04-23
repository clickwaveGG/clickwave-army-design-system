// MissionCard — "A Missão" hero card
const MissionCard = () => (
  <CardGlass className="mission-card">
    <span className="mission-dot" aria-hidden="true" />
    <h3 className="mission-title">A Missão</h3>

    <div className="mission-block">
      <span className="type-label mission-label">Objetivo Primário</span>
      <p className="mission-text">
        Aniquilar a invisibilidade da sua marca e estabelecer dominância absoluta no seu nicho.
      </p>
    </div>

    <div className="mission-block">
      <span className="type-label mission-label">Status da Operação</span>
      <p className="mission-text mission-text--em">Pronto para mobilização imediata.</p>
    </div>

    <div className="mission-foot">
      <span className="type-label">PROTOCOLO: CLICKWAVE-01</span>
    </div>
  </CardGlass>
);

window.MissionCard = MissionCard;
