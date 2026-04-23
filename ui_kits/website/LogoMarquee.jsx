// LogoMarquee — infinite scrolling client logo strip
const CLIENTS = [
  'Acquaville', 'D2 Blocos', 'Dr. Maicon Bandeira', 'Vitallis', 'Joile Barreto',
  'Real Calçados', 'RE/MAX', 'CS Club', 'Sertão Fire', 'Vivi Closet',
];

const LogoMarquee = () => {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <div className="logo-marquee" aria-label="Clientes">
      <div className="logo-track">
        {list.map((c, i) => (
          <span key={i} className="logo-item">{c}</span>
        ))}
      </div>
    </div>
  );
};

window.LogoMarquee = LogoMarquee;
