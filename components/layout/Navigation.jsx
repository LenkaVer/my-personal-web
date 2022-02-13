import Link from 'next/link';
import styles from './Navigation.module.scss';
import { useState } from 'react';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigationListClasses = [styles['navigation__list']];
  if (showMenu) {
    navigationListClasses.push(styles['--show']);
  }

  return (
    <nav className={[styles.navigation, 'container'].join(' ')}>
      <Link href="/">
        <a className={styles['navigation__link-logo']}>
          <img src={'/logo/logo-3.svg'} alt="logo" />
        </a>
      </Link>
      <ul className={navigationListClasses.join(' ')}>
        <button
          className={styles['navigation__cross-icon']}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <img src={'/icons/cross.svg'} alt="zavřít menu" />
        </button>
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
      <button
        className={styles['navigation__menu-icon']}
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <img src={'/icons/menu.svg'} alt="otevřít menu" />
      </button>
    </nav>
  );
};

export default Navigation;
