const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 relative overflow-hidden rounded-full font-sans tracking-tight disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none';

const variants = {
  primary: 'py-3.5 px-8 text-[15px] bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]',
  secondary: 'py-3.5 px-8 text-[15px] bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/30 active:scale-[0.98]',
  danger: 'py-2 px-4 text-[13px] bg-transparent text-red-400 border border-red-500/30 hover:bg-red-500/10 hover:border-red-500/50 active:scale-[0.98]',
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
