import React from "react";
import "../App.css";
const Navbar = ({ highToLow, payment_methods, hTol }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">HuNgEr GaMe</p>
        <div>
          <button
            className="btn btn-outline-success"
            onClick={() => highToLow("a")}
          >
            1 star
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => highToLow("b")}
          >
            2 star
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => highToLow("c")}
          >
            3 star
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => highToLow("d")}
          >
            4 star
          </button>
        </div>
        <div className="payment-btn">
          <button
            className="btn btn-outline-success"
            onClick={() => payment_methods("x")}
          >
            Cash
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => payment_methods("y")}
          >
            Card
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => payment_methods("z")}
          >
            UPI
          </button>
        </div>
        <div className="high-low">
          <button className="btn btn-outline-success" onClick={() => hTol("h")}>
            High
          </button>
          <button className="btn btn-outline-success" onClick={() => hTol("l")}>
            low
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
