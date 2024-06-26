import React, {useContext,useEffect } from 'react';
import '../styles/Header.css';
import '../styles/Theme.css';

import { ThemeContext } from '../context/ThemeContext'
// import { EmployeeContext } from '../context/EmployeeContextUseReduce';
import { EmployeeContext } from '../context/EmployeeContext';

const Header = ({ setAuthenticated,userData }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { searchTerm, setSearchTerm } = useContext(EmployeeContext);

    useEffect(() => {
      console.log(`Header renders`);
    });
  
    const handleLogout = () => {
      setAuthenticated(false);
    };


    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
    
    return (
      // <header className={`theme ${theme}`}>
        <div className="header-content">
          <div className="logo"><h2>Welcome {userData.userName}</h2></div>
          <div className="header-controls">
          <div>
      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul> */}
    </div> 
          <button onClick={toggleTheme} className="theme-toggle">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
          </div>
        </div>
      // </header>
    );
  };
  
  export default Header;