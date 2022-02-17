import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer-wrapper']}>
      <div className={[styles.footer__content, 'container'].join(' ')}>
        <p className={styles.footer__information}>
          Vytvořila &copy; Lenka Verzichová 2O22
        </p>
        <p className={styles.footer__contact}>
          Kontakt:{' '}
          <a href="mailto:lenkaverzichova@gmail.com">
            lenkaverzichova@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
