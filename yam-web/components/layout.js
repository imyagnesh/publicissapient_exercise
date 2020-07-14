import PropTypes from 'prop-types';

import Meta from './meta';
// import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, footerStyle }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer footerStyle={footerStyle} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
