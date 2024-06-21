import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import HomePage from './Home';

function App() {
  const [isLoggedIn, setAuthenticated] = useState(false);
  const [userData, setUser] = useState({userName:'',pwd:''});

  useEffect(() => {
    console.log('App Component rendered');  
  });

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setAuthenticated = {setAuthenticated} userData={userData} setUser={setUser} />} 
        />
        <Route 
          path="/home" 
          element={isLoggedIn ? <HomePage setAuthenticated= {setAuthenticated} userData={userData}/> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
