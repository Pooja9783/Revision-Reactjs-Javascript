import React from "react";
import "./App.css";
import Displaydata from "./components/DisplayData";
import Parent from "./components/props/Parent";
const App = () => {
  return (
    <div className="App">
      <Displaydata />
      <hr />
      <Parent />
      <hr />
    </div>
  );
};

export default App;
