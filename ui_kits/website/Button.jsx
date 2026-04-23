// Button — primary CTA + ghost variants
const Button = ({ variant = 'primary', children, arrow, onClick, className = '' }) => {
  if (variant === 'primary') {
    return (
      <button className={`btn-primary ${className}`} onClick={onClick}>
        {children}
        {arrow && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        )}
      </button>
    );
  }
  return (
    <button className={`btn-ghost btn-ghost--${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

window.Button = Button;
