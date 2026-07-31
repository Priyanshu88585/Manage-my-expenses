import './Button.css';

function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false, className = '', ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
