// import React from 'react';
// import './Navigation.css'; // Importing Navigation-specific styles

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li><a href="/contact">Contact</a></li>
//         <li><a href="/about-me">About Me</a></li>
//         <li><a href="/portfolio">Portfolio</a></li>
//         <li><a href="/resume">Resume</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'; // Ensure the path is correct

function Navigation() {
  const location = useLocation(); // Gets the current location object
  const currentPath = location.pathname; // Extracts the pathname from the location object

  // Define your navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about-me", label: "About Me" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

  // Filter out the link to the current page, and ensure "Home" is included
  const filteredLinks = navLinks.filter(link => link.path !== currentPath);

  // If we're not on the Home page, ensure the length is 4 by removing the extra link
  if (currentPath !== "/" && filteredLinks.length > 4) {
    filteredLinks.pop(); // Removes the last link if we're not on Home and have more than 4 links
  }

  return (
    <nav>
      <ul>
        {filteredLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} style={{ color: 'white', textDecoration: 'none' }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
