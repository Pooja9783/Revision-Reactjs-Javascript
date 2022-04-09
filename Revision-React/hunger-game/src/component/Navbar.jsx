import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">HuNgEr GaMe</p>
        <div>
          <button className="btn btn-outline-success">1 star</button>
          <button className="btn btn-outline-success">2 star</button>
          <button className="btn btn-outline-success">3 star</button>
          <button className="btn btn-outline-success">4 star</button>
        </div>
        <div className="payment-btn">
          <button className="btn btn-outline-success">Cash</button>
          <button className="btn btn-outline-success">Card</button>
          <button className="btn btn-outline-success">UPI</button>
        </div>
        <div className="high-low">
          <button className="btn btn-outline-success">High</button>
          <button className="btn btn-outline-success">low</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
