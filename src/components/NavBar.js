import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
                Donating
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
                to="/map"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Map
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
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item dropdown-toggle" onClick={handleDropdown}>
                          <NavLink
                            exact
                            to="#"
                            activeClassName="active"
                            className="nav-links"
                          >
                            Dropdown
                          </NavLink>
                          {showDropdown && (
                            <ul className="dropdown-menu">
                              <li className="dropdown-item">
                                <NavLink
                                  exact
                                  to="/page1"
                                  activeClassName="active"
                                  className="nav-links"
                                  onClick={handleClick}
                                >
                                  Page 1
                                </NavLink>
                              </li>
                              <li className="dropdown-item">
                                <NavLink
                                  exact
                                  to="/page2"
                                  activeClassName="active"
                                  className="nav-links"
                                  onClick={handleClick}
                                >
                                  Page 2
                                </NavLink>
                              </li>
                            </ul>
                          )}
                        </li>
            <li className="nav-item">
                          <NavLink
                            exact
                            to="/services"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            Information
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
