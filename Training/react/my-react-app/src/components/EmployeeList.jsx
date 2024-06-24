import React, { useContext } from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
import '../styles/App1.css';
import '../styles/EmployeeList.css';
import '../styles/Theme.css';

import { EmployeeContext } from '../context/EmployeeContext'
import { ThemeContext } from '../context/ThemeContext'

import { useNavigate } from 'react-router-dom';
import Header from './Header';

function EmployeeDirectory ({ setAuthenticated,userData })  {
  const navigate = useNavigate();
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const { theme } = useContext(ThemeContext);


  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  const handleEdit = (id) => {
        navigate(`/editEmployee/${id}`);
  };

  // return (
  //   <div>
  //     <h2>Employee List</h2>
  //     {employees.map(employee => (
  //       <div key={employee.id}>
  //         <p>{employee.name} - {employee.position}</p>
  //       </div>
  //     ))}
  //     <div>
  //     <button type="submit">Add</button>
  //     </div>
  //   </div>
  // );
  // const handleEdit = (employee) => {
  //   navigate(`/edit/${employee.id}`);
  // };

  return (
    <div className={`theme ${theme}`}>
      <div><Header setAuthenticated = {setAuthenticated} userData={userData}/></div>     
      <h4>Employee List</h4>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
               <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                <button className='editButton' onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className='deleteButton' onClick={() => handleDelete(employee.id)}>Delete</button>

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='button-container'>
      <button className='addButton' onClick={() => navigate('/addEmployee') }>Add Employee</button>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <h2>Employee List</h2>
  //     <button onClick={handleAdd}>Add Employee</button>
  //     <ul>
  //       {employees.map(employee => (
  //         <li key={employee.id}>
  //           {employee.name} - {employee.position}
  //           <button onClick={() => handleEdit(employee)}>Edit</button>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default EmployeeDirectory;

// function HomePage({ setAuthenticated,userData }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setAuthenticated(false);
//     navigate('/');
//   };
//   return (
//     <div className="app-container">
//     <div className="side-nav">
//     <h2>Welcome {userData.userName}</h2>
//     <ul>
//         <li><Link to="/blogs">blogss</Link></li>
//         <li><Link to="/blogs">blogs</Link></li>
//         <li><Link to="/blogs">Employeess</Link></li>
//       </ul>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//     <div>
//     </div>
//     </div>
//   );
// }

// export default HomePage;
