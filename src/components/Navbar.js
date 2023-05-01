import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function AuthNavbar({ isAuthenticated, currentPage, handlePageChange }) {
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/Login');
  };

  return (
    <div className='Navbar'>
    <button className='MenuIcon' onClick={() => setShowMenu(!showMenu)}>
        <i className="fas fa-bars" style={{ color: '#ffffff' }}></i>
    </button>
    <nav className={showMenu ? 'MobileNav' : ''}>
      <Link
        className='Links'
        style={{ color: '#ffffff' }}
        to='/'
        onClick={() => setShowMenu(false)}
      >
        Home
      </Link>

      <Link
        className='Links'
        style={{ color: '#ffffff' }}
        to='/Marketplace'
        onClick={() => setShowMenu(false)}
      >
        Marketplace
      </Link>

      <Link
        className='Links'
        style={{ color: '#ffffff' }}
        to='/VSIR'
        onClick={() => setShowMenu(false)}
      >
        VSIR
      </Link>
      {accessToken ? (
        <>
          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/Profile'
            onClick={() => setShowMenu(false)}
          >
            Profile
          </Link>
          
          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link className='Links' style={{ color: '#ffffff' }} to='/Login' onClick={() => setShowMenu(false)}>
          Log In
        </Link>
      )}
    </nav>
  </div>
);
}

export default AuthNavbar;
