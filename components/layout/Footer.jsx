import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={[styles.content, 'container'].join(' ')}>
        <p className={styles.information}>
          Vytvořila &copy; Lenka Verzichová 2O22
        </p>
        <p className={styles.contact}>
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
