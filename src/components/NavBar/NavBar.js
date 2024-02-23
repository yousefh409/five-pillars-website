import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className="bg-green-900 sticky top-0 z-50">
      <div className="flex center">
        <img className="navbarLogo" alt="" src={logo}></img>
        <ul className="text-center pt-6 lg:pt-12  lg:px-16 title-font tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white">
          <a
            href="/"
            style={{
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Janazas
          </a>
        </ul>

        <img className="navbarLogo" alt="" src={logo}></img>
      </div>

      <header className="header">
      <div className="header__content">
      <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >          <div className="flex justify-center items-center text-font text-white ">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/next-steps"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Next Steps
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/janaza"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Janaza
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/forms"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Forms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/visiting"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Visiting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/map"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/donations"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Donating
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/acknowledgement"
                  activeClassName="active"
                  onClick={() => {closeMenu(); handleClick();}}
                >
                  Acknowledgements
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
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
      </header>
    </div>
  );
}

export default NavBar;
