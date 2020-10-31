import React from 'react';
import { Link } from 'gatsby';

import Logo from '../../content/assets/logo.svg';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#333',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <img src={Logo} alt="" style={{ height: '60px' }} />
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              fontSize: '1.25rem',
              justifyContent: 'flex-end',
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ margin: '0 0.5rem' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li style={{ margin: '0 0.5rem' }}>
              <Link
                to="/shop"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Shop
              </Link>
            </li>
            <li style={{ margin: '0 0.5rem' }}>
              <Link
                to="/blog"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
