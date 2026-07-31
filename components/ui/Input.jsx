function Input({ label, id, error, className = '', ...rest }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-secondary tracking-wide uppercase">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-surface border rounded-md py-3 px-4 text-text-primary text-base transition-all duration-150 w-full placeholder:text-text-muted hover:border-border-subtle focus:outline-none focus:ring-3 ${
          error
            ? 'border-danger focus:border-danger focus:ring-danger-subtle'
            : 'border-border focus:border-accent focus:ring-accent-subtle'
        }`}
        style={rest.type === 'date' ? { colorScheme: 'dark' } : {}}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="text-xs text-danger mt-1" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
