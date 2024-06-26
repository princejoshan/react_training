import React, { createContext, useState ,useEffect} from 'react';

// Create a context with 'light' as the default value
export const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light" : "dark";
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};