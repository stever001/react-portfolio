//components/Header/Header.jsx
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Header.css'; // Importing Header-specific styles

function Header() {
  return (
    <header>
      <h1>Steve Rouse</h1>
      <Navigation />
    </header>
  );
}

export default Header;


