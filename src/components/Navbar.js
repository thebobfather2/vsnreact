import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import SignUpForm from './SignupForm';

function AuthNavbar({ currentPage, handlePageChange }) {
    console.log(currentPage);
    return (
        <div className='Navbar'>
        <nav>
                <Link className='Links' style={{ color: "#ffffff"}}
                    to="/"
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                >
                    Home
                </Link>

                <Link className='Links' style={{ color: "#ffffff" }}
                to="/Marketplace"
                // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    Marketplace
                </Link>

                <Link className='Links'style={{ color: "#ffffff" }}
                to="/VSIR"
                // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    VSIR
                </Link>
                <Link className='Links' style={{ color: "#ffffff" }}
                to="/Login"
                // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    Log In
                </Link>

                
        </nav>
        </div>
        
    )
}



export default AuthNavbar;