// ArsenalCard — "O Arsenal" hero card with ATIVO status rows
const ARSENAL_ROWS = [
  'Inteligência de Dados',
  'Design de Impacto',
  'Tráfego de Elite',
  'Copywriting Bélico',
];

const ArsenalCard = () => (
  <CardGlass className="arsenal-card">
    <h3 className="arsenal-title">O Arsenal</h3>
    <ul className="arsenal-list">
      {ARSENAL_ROWS.map((label) => (
        <li key={label} className="arsenal-row">
          <span className="arsenal-label">{label}</span>
          <Badge variant="active">ATIVO</Badge>
        </li>
      ))}
    </ul>
    <div className="arsenal-foot">
      <span className="type-label">CAPACIDADE: 100%</span>
      <span className="type-label arsenal-ver">V.2.5</span>
    </div>
  </CardGlass>
);

window.ArsenalCard = ArsenalCard;
