import React from 'react';
import Navbar from './Navbar';
import "./style.css"

function Header ({handlePageChange, currentPage}) {
    return (
        <header style={{display: "flex", alignItems: "center", color: "#ffffff", backgroundColor: "#000000"}}>
            <h1 className='Header' style={{ textAlign: "right", textShadow: "2px, 2px, #F3E47D", color: "#ffffff" }}>
                <img src="./img/vsnlogo.png" style={{ width: '70px', marginLeft: "40px", marginRight: "40px" }} />
            </h1>
            <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}
export default Header;