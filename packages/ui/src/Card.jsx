const baseClasses = 'bg-surface border border-border rounded-xl p-6 transition-all duration-250 hover:border-border-subtle hover:bg-surface-elevated';
const glowClasses = 'border-accent/15 hover:border-accent/30 hover:shadow-glow-sm';

function Card({ children, className = '', glow = false, ...rest }) {
  return (
    <div className={`${baseClasses} ${glow ? glowClasses : ''} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Card;
