// Hero — full-bleed photographic hero
const Hero = () => (
  <section className="hero" id="top">
    <picture className="hero-bg">
      <img src="../../assets/hero-soldier.jpg" alt="" />
    </picture>
    <div className="hero-ov1" aria-hidden="true" />
    <div className="hero-ov2" aria-hidden="true" />

    <div className="hero-inner">
      <NavPill />

      <div className="hero-body">
        <span className="type-label hero-label">// PROTOCOLO CLICKWAVE-01</span>
        <h1 className="hero-h1">
          Marketing é <em>guerra.</em>
        </h1>
        <p className="hero-sub">
          // E NÓS SOMOS A SUA LINHA DE FRENTE. ESTRATÉGIA IMPLACÁVEL, CLAREZA DE MARCA E EXECUÇÃO TÁTICA PARA DOMINAR O SEU MERCADO.
        </p>
        <Button variant="primary" arrow>COMEÇAR AGORA!</Button>
      </div>

      <div className="hero-cards">
        <MissionCard />
        <ArsenalCard />
      </div>
    </div>
  </section>
);

window.Hero = Hero;
