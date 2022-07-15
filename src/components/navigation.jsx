import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="app">
      <nav className="pokenav" style={{ background: "black" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
