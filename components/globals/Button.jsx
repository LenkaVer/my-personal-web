import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ href, title, onClick }) => {
  if (onClick) {
    return (
      <button type="button" className={styles.button} onClick={onClick}>
        {title}
      </button>
    );
  }

  return (
    <Link href={href} className={styles.button}>
      {title}
    </Link>
  );
};

export default Button;
