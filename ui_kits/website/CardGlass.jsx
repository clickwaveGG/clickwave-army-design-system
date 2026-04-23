// CardGlass — canonical backdrop-blur card
const CardGlass = ({ featured, children, className = '', ...rest }) => (
  <article className={`card-glass ${featured ? 'card-glass--featured' : ''} ${className}`} {...rest}>
    {children}
  </article>
);

window.CardGlass = CardGlass;
