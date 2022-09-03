import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationStyle.css";

const Navigation = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">RickandMorty</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" className="nav-link">
                Character
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/locations" className="nav-link">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
};

export default Navigation;
