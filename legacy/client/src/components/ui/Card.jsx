import './Card.css';

function Card({ children, className = '', glow = false, ...rest }) {
  return (
    <div className={`card ${glow ? 'card--glow' : ''} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Card;
