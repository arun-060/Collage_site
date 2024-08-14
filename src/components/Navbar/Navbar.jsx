import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://www.git-india.edu.in/git/images/logo.gif" alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#">Campus life</a></li>
                <li><a href="#">Academics</a></li>
                <li><a href="#">E-learning</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    
  )
}

export default Navbar