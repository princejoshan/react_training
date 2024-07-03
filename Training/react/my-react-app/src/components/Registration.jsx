import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
  setUsername,
  setPassword,
  setConfirmPassword,
  registerUser,
} from "../reducer/registrationReducer";
import "../styles/login.css";

function Registration() {
  const dispatch = useDispatch();
  const { username, password, confirmPassword } = useSelector(
    (state) => state.registration
  );

  useEffect(() => {
    console.log(`Login renders`);
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration Submitted", {
      username,
      password,
      confirmPassword,
    });
    dispatch(registerUser());
  };

  return (
    <div className="login-container">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Registration;
