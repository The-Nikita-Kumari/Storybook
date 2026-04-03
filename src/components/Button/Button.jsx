import styles from './Button.module.css';

const Button = ({
  children, variant = 'primary', size = 'md',
  disabled = false, onClick, type = 'button',
  fullWidth = false, 'aria-label': ariaLabel,
}) => {
  const cls = [
    styles.button, styles[variant], styles[size],
    fullWidth ? styles.fullWidth : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type} className={cls} disabled={disabled}
      onClick={onClick} aria-label={ariaLabel}
      data-variant={variant} data-size={size}
      data-fullwidth={fullWidth ? 'true' : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
