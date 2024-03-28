import React from 'react';
import './AboutMe.css';
import aboutMeData from '../../data/aboutme.json'; // Adjust the path as necessary

function AboutMe() {
  return (
    <div className="about-container">
      <div className="left-side">
        <h1>{aboutMeData.intro}</h1>
        <img src="/assets/steve-headshot.jpg" alt="Steve" className="steve-image" />
      </div>
      <div className="right-side">
        {aboutMeData.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
