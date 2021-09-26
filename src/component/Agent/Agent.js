import React from "react";
import "./Agent.css";

const Agent = (props) => {
  const { img, name, age, designation, country, salary, batch } = props.agent;

  return (
    <div className="agent">
      <div>
        <img className="fixed-img" src={img} alt="" srcset="" />
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Designation: {designation}</p>
        <p>Country: {country} </p>
        <p>Batch: {batch}</p>
        <h5>
          Salary: <span style={{ fontSize: "30px" }}>$</span> {salary}{" "}
        </h5>
        <button
          onClick={() => props.handleAddToCart(props.agent)}
          className="btn-regular"
        >
          Hire
        </button>
      </div>
    </div>
  );
};

export default Agent;
