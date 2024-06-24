import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import EmployeeDirectory from './EmployeeList';
import { EmployeeProvider } from '../context/EmployeeContext';
import EmployeeForm from './EmployeeForm';

function App() {
  const [isLoggedIn, setAuthenticated] = useState(false);
  const [userData, setUser] = useState({userName:'',pwd:''});
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
  };

  const clearCurrentEmployee = () => {
    setCurrentEmployee(null);
  };


  useEffect(() => {
    console.log('App Component rendered');  
  });

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isLoggedIn ?  <EmployeeProvider>
            <EmployeeDirectory setAuthenticated= {setAuthenticated} userData={userData}/>
         </EmployeeProvider> : <Login setAuthenticated = {setAuthenticated} userData={userData} setUser={setUser} />} 
        />
        <Route 
          path="/home" 
          element={isLoggedIn ? <EmployeeProvider>
            <EmployeeDirectory setAuthenticated= {setAuthenticated} userData={userData}/>
         </EmployeeProvider>  : <Navigate to="/" />} 
        />
        <Route 
          path="/addEmployee" 
          element={<EmployeeProvider>
                <EmployeeForm
                />
         </EmployeeProvider>} 
        />
        <Route 
          path="/editEmployee/:id" 
          element={<EmployeeProvider>
                <EmployeeForm
                />
         </EmployeeProvider>} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
