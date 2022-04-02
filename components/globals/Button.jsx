import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{title}</a>
    </Link>
  );
};

export default Button;
