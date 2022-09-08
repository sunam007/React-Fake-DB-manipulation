import React, { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("./employees.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="employeesDiv">
      <h2>Book Hub Employee List</h2>
      {employees.map((employee) => (
        <Employee key={employee._id} employee={employee}></Employee>
      ))}
    </div>
  );
};

export default Employees;
