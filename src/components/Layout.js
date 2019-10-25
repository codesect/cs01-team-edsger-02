import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '1rem' }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
