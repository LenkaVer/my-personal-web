import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ href, title }) => {
  return (
    <Link href={href} className={styles.button}>
      {title}
    </Link>
  );
};

export default Button;
