import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Web Development Skills</h1>
      <div className="skills-section">
        <div className="skills-column">
          <h2>Front End</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript (ES6+)</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Webpack & Babel</li>
          </ul>
        </div>
        <div className="skills-column">
          <h2>Back End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful API Design</li>
            <li>GraphQL</li>
            <li>MongoDB/Mongoose</li>
            <li>SQL (PostgreSQL & MySQL)</li>
            <li>Authentication & Authorization (JWT)</li>
          </ul>
        </div>
      </div>
      {/* Replace the button with an <a> tag for downloading the resume */}
      <a href="/resume/rouse23.docx" download="rouse23.docx" className="download-btn">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
