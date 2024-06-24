import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { ThemeContext } from '../context/ThemeContext'

function Login({ setAuthenticated,userData,setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'prince' && password === 'pass') {
        setUser(() => ({userName:username}));
        setAuthenticated(true);
        navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='login-container'>
    <div className={`login-form ${theme}`}>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;