import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.module.css';

const validate = (fields) => {
  const errors = {};
  if (!fields.email) errors.email = 'Email is required';
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email)) errors.email = 'Enter a valid email address';
  if (!fields.password) errors.password = 'Password is required';
  else if (fields.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return errors;
};

const LoginForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    if (onSubmit) onSubmit(fields);
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.checkmark}>✓</span>
        <p>Welcome back!</p>
        <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setFields({ email: '', password: '' }); }}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Login form">
      <h2 className={styles.heading}>Sign In</h2>
      <Input label="Email" id="email" name="email" type="email" placeholder="you@example.com" value={fields.email} onChange={handleChange} error={errors.email} required fullWidth />
      <Input label="Password" id="password" name="password" type="password" placeholder="••••••••" value={fields.password} onChange={handleChange} error={errors.password} helperText="Minimum 6 characters" required fullWidth />
      <Button type="submit" fullWidth size="lg">Sign In</Button>
    </form>
  );
};

export default LoginForm;
