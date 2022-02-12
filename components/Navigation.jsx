import Link from 'next/link';
import styles from './../styles/Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <nav className={[styles.navigation, 'container'].join(' ')}>
        <Link href="/" passHref>
          <h1>
            <a className={styles['navigation__link-logo']}>
              <img src={'/logo/logo-3.svg'} alt="logo" />
            </a>
          </h1>
        </Link>
        <ul className={styles['navigation__list']}>
          <li className={styles['navigation__list-item']}>
            <Link href="/">
              <a>O Watsu</a>
            </Link>
          </li>
          <li className={styles['navigation__list-item']}>
            <Link href="/">
              <a>Rezervovat termín</a>
            </Link>
          </li>
          <li className={styles['navigation__list-item']}>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
