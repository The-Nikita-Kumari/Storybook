import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input(
  { label, id, name, type = 'text', placeholder, value, onChange, onBlur,
    error, helperText, disabled = false, required = false, fullWidth = false }, ref
) {
  const inputId = id || name;
  return (
    <div className={[styles.wrapper, fullWidth ? styles.fullWidth : ''].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}{required && <span className={styles.required} aria-hidden="true"> *</span>}
        </label>
      )}
      <input
        ref={ref} id={inputId} name={name} type={type}
        placeholder={placeholder} value={value}
        onChange={onChange} onBlur={onBlur}
        disabled={disabled} required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={[styles.input, error ? styles.inputError : ''].filter(Boolean).join(' ')}
      />
      {error && <span id={`${inputId}-error`} className={styles.errorMsg} role="alert">{error}</span>}
      {!error && helperText && <span id={`${inputId}-helper`} className={styles.helperText}>{helperText}</span>}
    </div>
  );
});

export default Input;
