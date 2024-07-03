import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import EmployeeDirectory from "./EmployeeList";
import { EmployeeProvider } from "../context/EmployeeContext";
// import { EmployeeProvider } from '../context/EmployeeContextUseReduce';
import {useSelector } from 'react-redux';

import EmployeeForm from "./EmployeeForm";
import "../styles/Theme.css";
import Registration from "./Registration";

function MainLayout() {
  // const [isLoggedIn, setAuthenticated] = useState(false);
  const [userData, setUser] = useState({ userName: "", pwd: "" });
  const {isLoggedIn } = useSelector((state) => state.login);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <EmployeeProvider>
                <EmployeeDirectory
                  // setAuthenticated={setAuthenticated}
                  userData={userData}
                />
              </EmployeeProvider>
            ) : (
              <Login
                // setAuthenticated={setAuthenticated}
                userData={userData}
                setUser={setUser}
              />
            )
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <EmployeeProvider>
                <EmployeeDirectory
                  // setAuthenticated={setAuthenticated}
                  userData={userData}
                />
              </EmployeeProvider>
            ) 
            : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/addEmployee"
          element={
            <EmployeeProvider>
              <EmployeeForm />
            </EmployeeProvider>
          }
        />
        <Route
          path="/editEmployee/:id"
          element={
            <EmployeeProvider>
              <EmployeeForm />
            </EmployeeProvider>
          }
        />
         <Route
          path="Registration"
          element={
            <EmployeeProvider>
              <Registration />
            </EmployeeProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default MainLayout;
