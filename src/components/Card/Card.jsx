import styles from './Card.module.css';

const Card = ({ title, description, badge, badgeVariant = 'default', footer, children, onClick, hoverable = false }) => {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag
      className={[styles.card, hoverable ? styles.hoverable : '', onClick ? styles.clickable : ''].filter(Boolean).join(' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {badge && <span className={[styles.badge, styles[`badge_${badgeVariant}`]].join(' ')}>{badge}</span>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </Tag>
  );
};

export default Card;
