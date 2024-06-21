import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ setAuthenticated,userData }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/');
  };
  return (
    <div>
      <h2>Welcome {userData.userName}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;