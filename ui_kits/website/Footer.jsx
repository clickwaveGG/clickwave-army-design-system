// Footer — contact + social + legal
const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-col">
        <div className="footer-brand">
          <img src="../../assets/clickwave-mark.svg" width="28" height="28" alt="" />
          <span className="footer-word">Clickwave</span>
        </div>
        <p className="footer-tag">Marketing é guerra.</p>
      </div>

      <div className="footer-col">
        <span className="type-label footer-head">Operações</span>
        <a href="#servicos">Serviços</a>
        <a href="#metodologia">Metodologia</a>
        <a href="#sobre">Sobre nós</a>
      </div>

      <div className="footer-col">
        <span className="type-label footer-head">Contato</span>
        <a href="mailto:contato@clickwavearmy.com">contato@clickwavearmy.com</a>
        <a href="https://wa.me/5500000000000">WhatsApp</a>
        <a href="https://instagram.com/clickwavearmy">Instagram</a>
      </div>

      <div className="footer-col footer-col--right">
        <span className="type-label footer-head">Protocolo</span>
        <span className="type-label">V.2.5</span>
        <span className="type-label">CLICKWAVE-01</span>
      </div>
    </div>

    <div className="footer-bar">
      <span className="type-label">© 2026 ClickWave. Marketing é guerra.</span>
      <span className="type-label">Fortaleza · Brasil</span>
    </div>
  </footer>
);

window.Footer = Footer;
