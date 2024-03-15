import React from 'react';
import { NavLink } from 'react-router-dom'; // Using react-router for navigation
import './Navigation.css'; // Your CSS file for styling

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about-me">About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
