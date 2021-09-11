import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  let mystyle = { textDecoration: "none", color: "white" };
  return (
    <div className="Nav">
      <Link style={mystyle} to="/">
        <h1 className="header-nav">Logo</h1>
      </Link>
      <ul className="nav-links">
        <Link style={mystyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={mystyle} to="/create">
          <li>Create</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
