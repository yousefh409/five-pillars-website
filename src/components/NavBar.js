import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Five Pillars
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/next-steps"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Next Steps
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/janaza"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Janaza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/donations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dontating
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/visiting"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Visiting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/support"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Support Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
