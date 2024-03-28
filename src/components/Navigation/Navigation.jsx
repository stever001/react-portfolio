import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'; // Ensure the path is correct

function Navigation() {
  const location = useLocation(); // Gets the current location object
  const currentPath = location.pathname; // Extracts the pathname from the location object

  // Define your navigation links
  const navLinks = [
    { path: "/", label: "About Me" },
    { path: "/contact", label: "Contact" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className={currentPath === link.path ? 'active' : ''}>
            <Link to={link.path} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

