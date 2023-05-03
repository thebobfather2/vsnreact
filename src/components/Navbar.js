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

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/Login');
  };

  return (
    <div className="NavbarWrapper"> {/* add a wrapper div */}
    <div className='Navbar'>
      <nav>
        <div className='Navbar__mobile'>
          <button className='Navbar__toggle' onClick={toggleMenu}>
            <i className='fa fa-bars' />
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
           <Link className='MobileLinks' to='/Chatbot' onClick={closeMenu}>
             Chatbot
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

          <Link
            className='Links'
            style={{ color: '#ffffff' }}
            to='/Chatbot'
            // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          >
            Chatbot
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