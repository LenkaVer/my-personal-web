import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={[styles.content, 'container'].join(' ')}>
        <p className={styles.information}>
          Vytvořila &copy; Lenka Verzichová 2O24
        </p>
        <p className={styles.contact}>
          Kontakt:{' '}
          <a href='mailto:lenkaverzichova@gmail.com'>lenka@verzichova.cz</a>
        </p>
        <p className={styles.gdpr}>
          <Link href='/gdpr'>Ochrana osobních údajů</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
