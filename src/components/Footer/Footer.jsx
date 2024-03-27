import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-container">
      <h4>© 2024 Steve Rouse. All rights reserved.</h4>
      <div className="footer-icons">
        
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer" className="icon-stack-overflow">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

