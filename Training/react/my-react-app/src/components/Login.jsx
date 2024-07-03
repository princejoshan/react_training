// import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/login.css';

// function Login({ setAuthenticated,userData,setUser }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log(`Login renders`);
//   },[username,password]);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'prince' && password === 'pass') {
//         setUser(() => ({userName:username}));
//         setAuthenticated(true);
//         navigate('/home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const navigateToRegistration = () => {
//     navigate("/Registration");
//     };

//   return (
//     <div className=''>
//     <div className='login-container'>
//     <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username: </label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//         <br>
//         </br>
//         <button type="submit" onClick={navigateToRegistration}>Create New Account</button>
//       </form>
//       </div>

//     </div>
//   );
// }

// export default Login;



import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, validateLogin, resetForm } from '../reducer/loginReducer';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Login({ setAuthenticated,userData,setUser }) {
  const dispatch = useDispatch();
  const { username, password, isLoggedIn, loginError } = useSelector((state) => state.login);
  const users = useSelector((state) => state.registration.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateLogin({ username, password, users }));
    // if (username === 'prince' && password === 'pass') {
    //     setUser(() => ({userName:username}));
    //     setAuthenticated(true);
    //     navigate('/home');
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  const navigateToRegistration = () => {
    navigate("/Registration");
    };

  return (
    <div className=''>
    <div className='login-container'>
    <h2>Login</h2>
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
        <button type="submit">Login</button>
        <br>
        </br>
        <button type="submit" onClick={navigateToRegistration}>Create New Account</button>
        {isLoggedIn && <p>Login successful!</p>}
      {loginError && <p>{loginError}</p>}

      </form>
      </div>

    </div>
  );
}

export default Login;