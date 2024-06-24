import React, { useState, useContext, useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Theme.css';

import { ThemeContext } from '../context/ThemeContext'

const Header = ({ setAuthenticated,userData }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    const handleLogout = () => {
      // Function to handle logout
      setAuthenticated(false);
    };
  
    return (
      <header className={`theme ${theme}`}>
        <div className="header-content">
          <div className="logo"><h2>Welcome {userData.userName}</h2></div>
          <div className="header-controls">
          <button onClick={toggleTheme} className="theme-toggle">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;