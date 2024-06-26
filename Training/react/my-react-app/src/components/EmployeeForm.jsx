import React, { useState, useContext, useEffect } from "react";
// import { EmployeeContext } from '../context/EmployeeContextUseReduce';
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/login.css";
import "../styles/Theme.css";

const EmployeeForm = () => {
  const { employees, addEmployee, updateEmployee } =
    useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ id: "", name: "", position: "" });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("Employee form rendered");
    if (id) {
      const emp = employees.find((emp) => emp.id === parseInt(id));
      if (emp) setEmployee(emp);
    } else {
      setEmployee({ name: "", position: "" });
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.id) {
      updateEmployee(employee);
    } else {
      const randomNumber = Math.floor(Math.random() * 100000) + 1;
      addEmployee({ ...employee, id: randomNumber });
    }
    setEmployee({ id: "", name: "", position: "" });
    alert("Employee added successfully");
    setTimeout(() => {
      navigate("/"); // Navigate back to employee list after hiding popup
    }, 100);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
        <div>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Designation </label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
