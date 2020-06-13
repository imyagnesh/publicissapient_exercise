import PropTypes from 'prop-types';

import Meta from './meta';
// import Loading from './Loading';
import Header from './Header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Loading /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
