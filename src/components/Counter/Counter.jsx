import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Counter.module.css';

const Counter = ({ initialValue = 0, step = 1, min = null, max = null, label = 'Counter' }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => {
    const next = prev + step;
    return max !== null ? Math.min(next, max) : next;
  });

  const decrement = () => setCount(prev => {
    const next = prev - step;
    return min !== null ? Math.max(next, min) : next;
  });

  const reset = () => setCount(initialValue);

  return (
    <div className={styles.counter} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <div className={styles.controls}>
        <Button variant="secondary" size="md" onClick={decrement} disabled={min !== null && count <= min} aria-label="Decrement">-</Button>
        <span className={styles.value} aria-live="polite" role="status">{count}</span>
        <Button variant="primary" size="md" onClick={increment} disabled={max !== null && count >= max} aria-label="Increment">+</Button>
      </div>
      <button className={styles.reset} onClick={reset} aria-label="Reset counter">Reset</button>
    </div>
  );
};

export default Counter;
