import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const initialEmployees = [
  { id: 1, name: 'Prince', position: 'Software Engineer' },
  { id: 2, name: 'Manoj', position: 'Developer' },
  { id: 3, name: 'Aishwarya', position: 'Designer' },
  { id: 4, name: 'Amrutha', position: 'Designer' }
];

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState('');

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };


  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee,deleteEmployee,filteredEmployees,searchTerm, setSearchTerm }}>
      {children}
    </EmployeeContext.Provider>
  );
};