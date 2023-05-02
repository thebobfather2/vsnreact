import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function AuthNavbar({ isAuthenticated, currentPage, handlePageChange }) {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const menuButtonClass = showMenu ? 'Navbar__toggle open' : 'Navbar__toggle';

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/Login');
  };

  return (
    <div className="NavbarWrapper">
    <div className='Navbar'>
      <nav>
        <div className='Navbar__mobile'>
          <button className={menuButtonClass} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          {showMenu && (
            <div className='Navbar__mobile-menu'>
              <Link className='MobileLinks' to='/' onClick={closeMenu}>
                Home
              </Link>
              <Link className='MobileLinks' to='/Marketplace' onClick={closeMenu}>
                Marketplace
              </Link>
              <Link className='MobileLinks' to='/VSIR' onClick={closeMenu}>
                VSIR
              </Link>
              {accessToken ? (
                <>
                  <Link className='MobileLinks' to='/Profile' onClick={closeMenu}>
                    Profile
                  </Link>
                  <div className='logout'>
                    <button onClick={logout}>Logout</button>
                  </div>
                </>
              ) : (
                <Link className='MobileLinks' to='/Login' onClick={closeMenu}>
                  Log In
                </Link>
              )}
            </div>
          )}
        </div>
        <div className='Navbar__desktop'>
          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/'
          >
            Home
          </Link>

          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/Marketplace'
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

              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link className='Links' style={{ color: '#ffffff' }} to='/Login'>
              Log In
            </Link>
          )}
        </div>
      </nav>
    </div>
    </div>
  );
}

export default AuthNavbar;