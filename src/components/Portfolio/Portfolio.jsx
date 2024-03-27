// /components/Portfolio/Portfolio.jsx
import React from 'react';
import './Portfolio.css'; // Ensure the path matches your file structure
import PortfolioGrid from '../PortfolioGrid/PortfolioGrid'; // Adjust the path as necessary

const Portfolio = () => {
  return (
    <div className="portfolio-page-container">
      {/* Any additional content or components you want to include on the portfolio page can go here */}
      <PortfolioGrid />
      {/* You can add more content or components after the grid as well */}
    </div>
  );
};

export default Portfolio;
