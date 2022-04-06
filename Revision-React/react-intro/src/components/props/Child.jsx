import React from "react";

const Child = ({ name, sendData }) => {
  const val = {
    user: "John doe",
    email: "john@gmail.com",
    age: 29,
  };
  const chekingData = () => {
    return "Data coming from Parent";
  };
  return (
    <div>
      <p>
        Name : <i> {name}</i>
      </p>
      <b>data getting from parent component</b>
      <p>
        User : <em>{sendData(val.user)}</em>
      </p>
      <p>
        email : <em>{sendData(val.email)}</em>
      </p>
      <p>
        Data : <em>{sendData(chekingData())}</em>
      </p>
    </div>
  );
};

export default Child;
