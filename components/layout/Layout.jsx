import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const animations = {
    hidden: { x: -40, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

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
      <motion.main
        initial="hidden"
        animate="show"
        variants={animations}
        transition={{ delay: 0, duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
