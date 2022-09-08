import React from "react";
import { addToDB, deleteFromDb } from "../../utilities/storage";
import "./Employee.css";

const Employee = (props) => {
  //   console.log(props);
  const { name, age, gender, email, company, _id } = props.employee;
  const employeeHandler = (id) => addToDB(id);
  const removeHandler = (id) => deleteFromDb(id);
  return (
    <div className="employeeDiv">
      <h3>Name: {name} </h3>
      <h4>Age: {age} </h4>
      <h4>Gender: {gender} </h4>
      <h4>Email: {email} </h4>
      <h4>Company: {company} </h4>
      <h4>Id: {_id} </h4>
      <button onClick={() => employeeHandler(_id)}>Add</button>
      <br />
      <button onClick={() => removeHandler(_id)}>Remove</button>
    </div>
  );
};

export default Employee;
