// Badge — status chips, mono markers
const Badge = ({ variant = 'mono', children }) => (
  <span className={`badge badge--${variant}`}>
    {variant === 'active' && <span className="badge-dot" aria-hidden="true" />}
    {children}
  </span>
);

window.Badge = Badge;
