import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  employees: [
    { id: 1, name: 'Prince', position: 'Software Engineer' },
    { id: 2, name: 'Manoj', position: 'Developer' },
    { id: 3, name: 'Aishwarya', position: 'Designer' },
    { id: 4, name: 'Amrutha', position: 'Designer' }
  ],
  searchTerm: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id ? action.payload : emp
        )
      };
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(emp => emp.id !== action.payload)
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEmployee = newEmployee => {
    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });
  };

  const updateEmployee = updatedEmployee => {
    dispatch({ type: 'UPDATE_EMPLOYEE', payload: updatedEmployee });
  };

  const deleteEmployee = id => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  const setSearchTerm = searchTerm => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm });
  };

  const filteredEmployees = state.employees.filter(employee =>
    employee.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <EmployeeContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        filteredEmployees,
        searchTerm: state.searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};