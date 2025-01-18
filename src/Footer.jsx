import React from 'react';
import facebookIcon from './assets/facebook-icon.png';  // Import Facebook icon
import linkedinIcon from './assets/linkedin-icon.png';  // Import LinkedIn icon
import youtubeIcon from './assets/youtube-icon.png';    // Import YouTube icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/ramu.aryal.16" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="linkedin.com/in/ram-aryal-3b78b1336" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@ramaryal9512" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
