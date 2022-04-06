import React from "react";
import Child from "./Child";
const Parent = ({ name, age }) => {
  let data = "Pooja Sankhala";
  function parentToChild(val) {
    return val;
  }
  return (
    <div>
      <h1>Props : Data passing Parent Component to Child Component....</h1>
      <Child name={data} sendData={parentToChild} />
    </div>
  );
};

export default Parent;
