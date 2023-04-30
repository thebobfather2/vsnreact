import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function AuthNavbar({ isAuthenticated, currentPage, handlePageChange }) {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/Login');
  };

  return (
    <div className='Navbar'>
      <nav>
        <Link
          className='Links'
          style={{ color: '#ffffff' }}
          to='/'
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        >
          Home
        </Link>

        <Link
          className='Links'
          style={{ color: '#ffffff' }}
          to='/Marketplace'
          // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        >
          Marketplace
        </Link>

        <Link
          className='Links'
          style={{ color: '#ffffff' }}
          to='/VSIR'
          // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        >
          VSIR
        </Link>
        {accessToken ? (
          <>
            <Link
              className='Links'
              style={{ color: '#ffffff' }}
              to='/Profile'
            >
              Profile
            </Link>
            
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className='Links' style={{ color: '#ffffff' }} to='/Login'>
            Log In
          </Link>
        )}
      </nav>
    </div>
  );
}

export default AuthNavbar;
