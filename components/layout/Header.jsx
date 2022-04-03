import styles from './Header.module.scss';
import Navigation from './Navigation';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className={styles.headerMain}>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
