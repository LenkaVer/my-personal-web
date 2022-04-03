import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="pageWrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
