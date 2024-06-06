import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-green-900 py-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-auto">
          <div className="text-left mb-4 pl-8 sm:mb-0 sm:px-4 ">
            <h2 className="text-white text-xl title-font mb-3">Quick Links</h2>
            <NavLink
              to="/"
              className="text-white text-font hover:text-green-400 block mb-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white text-font hover:text-green-400 block mb-2"
            >
              Contact
            </NavLink>
            <NavLink
              to="/acknowledgement"
              className="text-white text-font hover:text-green-400 block mb-2"
            >
              Acknowledgements
            </NavLink>
          </div>
          <div className="text-left mb-4 pl-8 sm:mb-0 sm:px-4">
            <h2 className="text-white text-xl title-font mb-2">Contact Info</h2>
            <p className="text-white text-font hover:text-green-400 block mb-2">
              info@janazas.org
            </p>
          </div>
          
          <div className="text-left  pl-8 mt-auto">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-400">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 text-yellow-300">
          &copy; {new Date().getFullYear()} Five Pillars Cemetery. Made with ❤ in this Dunya, for the Akhirah 🤲🏻.
        </div>
      </div>
    </div>
  );
};

export default Footer;
