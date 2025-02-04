import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Left: Brand and Links */}
        <div className="flex items-center space-x-8">
          {/* Brand */}
          <div className="text-xl font-semibold text-white">
            <Link to="/">Drew Home</Link>
          </div>
          {/* Links */}
          <ul className="flex space-x-4 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:text-white transition">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
