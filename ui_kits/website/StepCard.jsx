// StepCard — methodology step (PASSO 01..04)
const StepCard = ({ number, title, body, last }) => (
  <div className="step-wrap">
    <div className="step-card">
      <span className="step-number">PASSO {number}</span>
      <h3 className="step-title">{title}</h3>
      <p className="step-body">{body}</p>
    </div>
    {!last && <div className="step-connector" aria-hidden="true" />}
  </div>
);

window.StepCard = StepCard;
