import styles from './Header.module.scss';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={styles['header-main']}>
      <Navigation />
    </header>
  );
};

export default Header;
