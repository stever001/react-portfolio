// /components/PortfolioGrid/PortfolioGrid.jsx
import React from 'react';
import './PortfolioGrid.css';
import portfolioItems from '../../data/portfolioItems.json'; // Adjust the path as necessary

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid-container">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-item">
          <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
          <div className="portfolio-item-info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;

