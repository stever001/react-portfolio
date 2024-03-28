import React from 'react';
import './PortfolioGrid.css';
import portfolioItems from '../../data/portfolioItems.json'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const PortfolioGrid = () => {
  return (
    <div className="portfolio-grid-container">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-item">
          <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
          <div className="portfolio-item-info">
            <h3>{item.title}</h3>
            <p>
              {item.description}
              {/* Assuming you add 'githubUrl' in your JSON data */}
              <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="github-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
