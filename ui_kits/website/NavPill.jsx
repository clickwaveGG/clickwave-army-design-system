// NavPill — top sticky navigation
const NavPill = () => (
  <header className="nav-pill" aria-label="Principal">
    <a className="nav-brand" href="#top">
      <img src="../../assets/clickwave-mark.svg" width="24" height="24" alt="" />
      <span className="nav-word">Clickwave</span>
    </a>
    <nav className="nav-links" aria-label="Seções">
      <a href="#como-funciona">Como Funciona</a>
      <span className="nav-dot" aria-hidden="true">·</span>
      <a href="#servicos">Serviços</a>
      <span className="nav-dot" aria-hidden="true">·</span>
      <a href="#metodologia">Metodologia</a>
      <span className="nav-dot" aria-hidden="true">·</span>
      <a href="#sobre">Sobre nós</a>
    </nav>
    <a href="#login" className="nav-login">
      Login
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </a>
  </header>
);

window.NavPill = NavPill;
