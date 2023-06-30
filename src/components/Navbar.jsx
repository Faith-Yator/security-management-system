import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBook, FaCogs, FaToolbox } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FiX, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Logo"
          />
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? <FiX /> : <i className="fa-solid fa-bars"></i>}
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen && (
            <div className="close-icon">
              <FiX />
            </div>
          )}

          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <FaBook />
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <AiFillHome />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourServices" className="nav-link">
              <FaToolbox />
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourSolutions" className="nav-link">
              <FaCogs />
              Our Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs" className="nav-link">
              <BsFillPersonFill />
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              <RiContactsFill />
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
             <button>SignIn</button> 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              <FiLogOut />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
