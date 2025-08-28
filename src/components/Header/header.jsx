import React from "react";

import { Link } from "react-router-dom";
import "./header.css";
import Button from "../Button/Button";

function Head({ SignIn }) {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>
          <img src="./Assets/image/h1.png" alt="" />
        </h1>
      </div>

      <div className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </div>

      <div className="nav-btn">
        <Button SignIn="SignIn" />
      </div>
    </header>
  );
}

export default Head;
