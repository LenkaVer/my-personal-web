import Link from 'next/link';
import styles from './Navigation.module.scss';
import { slide as Menu } from 'react-burger-menu';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 769) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 769) {
        setMobileMenu(true);
      } else {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <nav className={[styles.navigation, 'container'].join(' ')}>
      <Link href="/">
        <a className={styles.linkLogo}>
          <img src={'/logo/logo-3.svg'} alt="logo" />
        </a>
      </Link>
      <ul className={styles.list}>
        {' '}
        {/*  className={navigationListClasses.join(' ')}*/}
        {mobileMenu ? (
          <Menu
            right
            width={250}
            onStateChange={handleStateChange}
            isOpen={menuOpen}
            customBurgerIcon={<img src={'icons/menu.svg'} alt="otevřít menu" />}
            customCrossIcon={<img src={'icons/cross.svg'} alt="zavřít menu" />}
          >
            <li className={styles.listItem}>
              <Link href="/o-watsu">
                <a onClick={closeMenu}>O Watsu</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/rezervace">
                <a onClick={closeMenu}>Rezervovat termín</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/kontakt">
                <a onClick={closeMenu}>Kontakt</a>
              </Link>
            </li>
          </Menu>
        ) : (
          <>
            <li className={styles.listItem}>
              <Link href="/o-watsu">
                <a>O Watsu</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/rezervace">
                <a>Rezervovat termín</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
