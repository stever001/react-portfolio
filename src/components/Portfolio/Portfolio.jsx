// /components/Portfolio/Portfolio.jsx
import React from 'react';
import './Portfolio.css'; // Ensure the path matches your file structure
import PortfolioGrid from '../PortfolioGrid/PortfolioGrid'; // Adjust the path as necessary

// Example portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  },
  {
    id: 2,
    title: 'Monacado',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  },
  {
    id: 3,
    title: 'Another cool page',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  },
  {
    id: 6,
    title: 'Weather App',
    description: 'Current weather and a 5-day forecast for any city in the USA.',
    imageUrl: '../../assets/steve-headshot.jpg', // Replace with actual image paths
  }

  // Add more portfolio items as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
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

export default Portfolio;
