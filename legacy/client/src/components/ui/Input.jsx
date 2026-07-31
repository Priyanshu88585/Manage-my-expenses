import './Input.css';

function Input({ label, id, error, className = '', ...rest }) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-group__label">
          {label}
        </label>
      )}
      <input
        id={id}
        className="input-group__input"
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="input-group__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
