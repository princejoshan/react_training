import React, { useContext, useEffect } from "react";
// import { useNavigate,Link } from 'react-router-dom';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';
import "../styles/App1.css";
import "../styles/EmployeeList.css";
import "../styles/Theme.css";

// import { EmployeeContext } from '../context/EmployeeContextUseReduce'
import { EmployeeContext } from "../context/EmployeeContext";

import { useNavigate } from "react-router-dom";
import Header from "./Header";

function EmployeeDirectory({ setAuthenticated, userData }) {
  const navigate = useNavigate();
  const { deleteEmployee, filteredEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log(`EmployeeList renders ${filteredEmployees.length}`);
  });

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  const handleEdit = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div>
      <div>
        <Header setAuthenticated={setAuthenticated} userData={userData} />
      </div>
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
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                <button
                  className="editButton"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button className="addButton" onClick={() => navigate("/addEmployee")}>
          Add Employee
        </button>
      </div>
    </div>
  );
}

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
