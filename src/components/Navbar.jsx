import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
        <img src ='https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' />
        </a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
            
          </li>
          
          <li className="nav-item">
           <Link to='/OurServices' className="nav-link">OurServices</Link>
          </li>
          <li className="nav-item">
            <Link to='/OurSolutions' className="nav-link">OurSolutions</Link>
          </li>
          <li className="nav-item">
            <Link to='/AboutUs' className="nav-link">AboutUs</Link>
            
          </li>
          <li className="nav-item">
             <Link to='/contacts'className="nav-link">Contacts</Link>
           
          </li>
          <li className="nav-item">
             <button><Link to='/SignIn'className="nav-link">SignIn</Link></button>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
