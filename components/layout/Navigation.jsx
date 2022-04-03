import Link from 'next/link';
import styles from './Navigation.module.scss';
import Menu from 'react-burger-menu/lib/menus/slide';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navigation = ({ menuOpen, setMenuOpen }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
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
            disableAutoFocus
            right
            width={250}
            onStateChange={handleStateChange}
            isOpen={menuOpen}
            customBurgerIcon={
              <img src={'/icons/menu.svg'} alt="otevřít menu" />
            }
            customCrossIcon={<img src={'/icons/cross.svg'} alt="zavřít menu" />}
          >
            <li className={styles.listItem}>
              <Link href="/o-watsu">
                <a
                  className={
                    router.pathname.includes('/o-watsu')
                      ? styles.linkActive
                      : null
                  }
                  onClick={closeMenu}
                >
                  O Watsu
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/rezervace">
                <a
                  className={
                    router.pathname.includes('/rezervace')
                      ? styles.linkActive
                      : null
                  }
                  onClick={closeMenu}
                >
                  Rezervovat termín
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/kontakt">
                <a
                  className={
                    router.pathname.includes('/kontakt')
                      ? styles.linkActive
                      : null
                  }
                  onClick={closeMenu}
                >
                  Kontakt
                </a>
              </Link>
            </li>
          </Menu>
        ) : (
          <>
            <li className={styles.listItem}>
              <Link href="/o-watsu">
                <a
                  className={
                    router.pathname.includes('/o-watsu')
                      ? styles.linkActive
                      : null
                  }
                >
                  O Watsu
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/rezervace">
                <a
                  className={
                    router.pathname.includes('/rezervace')
                      ? styles.linkActive
                      : null
                  }
                >
                  Rezervovat termín
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/kontakt">
                <a
                  className={
                    router.pathname.includes('/kontakt')
                      ? styles.linkActive
                      : null
                  }
                >
                  Kontakt
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
