import React from "react";
import ReactDOM from "react-dom";
import calc from "./calc";
import("./index.css");
console.log(calc(3, 13));

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello Webpack";
// h1.classList.add("redcolor");

// document.getElementById("root").appendChild(h1);

ReactDOM.render("Hello", document.getElementById("root"));
