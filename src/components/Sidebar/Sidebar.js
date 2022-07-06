import React, { useState } from "react";
import "./Sidebar.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAuthority, setIsAuthority] = useState(false);
  return (
    <div className="sidebar p-2 mb-3">
      <div>
        <Link to="/" className="navbar-link">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="links-container">
        <Link className="navbar-link" k to="/">
          Home
        </Link>
        <Link className="navbar-link" k to="/authority">
          Victim List
        </Link>
        <Link className="navbar-link" k to="/authority">
          Authority
        </Link>
        {!isAuthority && (
          <Link className="navbar-link" k to="/login">
            Login
          </Link>
        )}
        {isAuthority && <button className="logout">Logout</button>}
      </div>
    </div>
  );
};

export default Sidebar;
