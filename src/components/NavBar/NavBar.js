import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="bg-green-900 sticky top-0 z-50">
      <div className="flex center">
        <img className="navbarLogo" alt="" src={logo}></img>
        <ul className="text-center pt-6 lg:pt-12 pb-8 lg:pb-3 px-8 lg:px-16 title-font tracking-wide text-xl sm:text-2xl md: text-3xl lg:text-5xl text-white">
          <a
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Five Pillars Cemetery
          </a>
        </ul>

        <img className="navbarLogo" alt="" src={logo}></img>
      </div>

      <div className="">
        <nav>
          <div className="flex justify-center items-center text-font text-white ">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
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
                  onClick={handleClick}
                >
                  Janaza
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/forms"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Forms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/visiting"
                  activeClassName="active"
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
                  onClick={handleClick}
                >
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/donations"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Donating
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown-toggle" onClick={handleDropdown}>
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
                          </li> */}
              {/* <li className="nav-item">
                            <NavLink
                              exact
                              to="/services"
                              activeClassName="active"
                              className="nav-links"
                              onClick={handleClick}
                            >
                              Information
                            </NavLink>
                          </li> */}
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i
                className={
                  click
                    ? 'fas fa-times text-xl md:text-2xl pr-1'
                    : 'fas fa-bars text-xl md:text-2xl pr-1'
                }
              ></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
