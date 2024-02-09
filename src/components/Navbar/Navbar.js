import React from 'react';
import './Navbar.css';
import websiteIcon from '../../assets/websiteLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
         <img src={websiteIcon} alt="Website Icon" className="navbar-icon" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/selectsub" className="navbar-link">Select Subject</a>
          </li>
          <li className="navbar-item">
            <a href="/login" className="navbar-link">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
