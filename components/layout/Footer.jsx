import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={[styles.footer, 'container'].join(' ')}>
        <p className={styles.footer_information}>
          Vytvořila &copy; Lenka Verzichová 2O22
        </p>
        <p className={styles.footer_contact}>
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
