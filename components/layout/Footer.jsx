import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <div className={[styles.content, 'container'].join(' ')}>
        <p className={styles.information}>
          Vytvořila &copy; Lenka Verzichová {fullYear}
        </p>
        <p className={styles.contact}>
          Kontakt:{' '}
          <a href='mailto:lenkaverzichova@gmail.com'>lenka@verzichova.cz</a>
        </p>
        <p className={styles.gdpr}>
          <Link href='/gdpr'>Ochrana osobních údajů</Link>
        </p>{' '}
        <p className={styles.gdpr}>
          <Link href='/obchodni-podminky'>Obchodní podmínky</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
