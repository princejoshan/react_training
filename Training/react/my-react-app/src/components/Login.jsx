import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login({ setAuthenticated,userData,setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Login renders`);
  },[username,password]);


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
  );
}

export default Login;