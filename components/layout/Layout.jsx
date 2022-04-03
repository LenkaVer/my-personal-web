import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="pageWrapper"
      onClick={(e) => {
        if (menuOpen === true && e.target.id !== 'react-burger-cross-btn') {
          setMenuOpen(false);
        }
      }}
    >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
