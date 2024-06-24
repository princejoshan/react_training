import React from 'react';
import { Link } from 'react-router-dom';
import '.css/SideNav'
import { useNavigate } from 'react-router-dom';

function SideNav() {
  return (
    <div className="side-nav">
      <h2>Navigation</h2>
      <ul>
        <li><Link to={navigate('/home')}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default SideNav;

