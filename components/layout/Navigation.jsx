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
      <Link href='/' className={styles.linkLogo}>
        <img src={'/logo/logo-3.svg'} alt='logo' />
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
              <img src={'/icons/menu.svg'} alt='otevřít menu' />
            }
            customCrossIcon={
              <img src={'/icons/cross.svg'} loading='lazy' alt='zavřít menu' />
            }
          >
            <li className={styles.listItem}>
              <Link
                href='/o-watsu'
                className={
                  router.pathname.includes('/o-watsu')
                    ? styles.linkActive
                    : null
                }
                onClick={closeMenu}
              >
                O Watsu
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                href='/rezervace'
                className={
                  router.pathname.includes('/rezervace')
                    ? styles.linkActive
                    : null
                }
                onClick={closeMenu}
              >
                Rezervovat termín
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                href='/kontakt'
                className={
                  router.pathname.includes('/kontakt')
                    ? styles.linkActive
                    : null
                }
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </li>
          </Menu>
        ) : (
          <>
            <li className={styles.listItem}>
              <Link
                href='/o-watsu'
                className={
                  router.pathname.includes('/o-watsu')
                    ? styles.linkActive
                    : null
                }
              >
                O Watsu
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                href='/rezervace'
                className={
                  router.pathname.includes('/rezervace')
                    ? styles.linkActive
                    : null
                }
              >
                Rezervovat termín
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                href='/kontakt'
                className={
                  router.pathname.includes('/kontakt')
                    ? styles.linkActive
                    : null
                }
              >
                Kontakt
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
