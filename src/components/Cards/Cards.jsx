import React, { useState } from 'react';
import './Cards.css';

const cardDetails = [
    { id: 'c1', title: 'Winter', description: 'Winter has so much to offer', icon: '1' },
    { id: 'c2', title: 'Digital Technology', description: 'Gets better every day - stay tuned', icon: '2' },
    { id: 'c3', title: 'Globalization', description: 'Help people all over the world', icon: '3' },
    { id: 'c4', title: 'New technologies', description: 'Space tech becomes more advanced', icon: '4' },
    { id: 'c5', title: 'New technologies', description: 'Space tech becomes more advanced', icon: '5' },
    { id: 'c6', title: 'New technologies', description: 'Space tech becomes more advanced', icon: '6' },
  ];
  
  const Cards = () => {
    const [selectedCard, setSelectedCard] = useState('c1');
  
    return (
      <div className="wrapper">
        <div className="container">
          {cardDetails.map((card) => (
            <React.Fragment key={card.id}>
              <input
                type="radio"
                name="slide"
                id={card.id}
                checked={selectedCard === card.id}
                onChange={() => setSelectedCard(card.id)}
              />
              <label htmlFor={card.id} className="card">
                <div className="row">
                  <div className="icon">{card.icon}</div>
                  <div className="description">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cards;
  
