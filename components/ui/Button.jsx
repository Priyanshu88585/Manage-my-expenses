const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold tracking-wide uppercase rounded-md border border-transparent cursor-pointer transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none disabled:before:hidden';

const variants = {
  primary: 'py-3 px-6 text-sm bg-gradient-to-br from-accent to-[#0099cc] text-background shadow-glow-sm hover:from-accent-hover hover:to-[#0088b3] hover:shadow-glow-accent hover:-translate-y-[1px] active:translate-y-0 active:shadow-glow-sm',
  secondary: 'py-3 px-6 text-sm bg-transparent text-accent border-accent hover:bg-accent-subtle hover:shadow-glow-sm hover:-translate-y-[1px] active:translate-y-0',
  danger: 'py-2 px-3 text-xs bg-transparent text-danger border-danger hover:bg-danger-subtle hover:shadow-[0_0_12px_rgba(255,77,77,0.2)] hover:-translate-y-[1px] active:translate-y-0',
};

function Button({ children, onClick, variant = 'primary', type = 'button', disabled = false, className = '', ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
