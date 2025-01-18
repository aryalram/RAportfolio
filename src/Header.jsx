import React from 'react';
import profilePic from './assets/myprofilepic.jpg'; // Import image here

const Header = () => {
  return (
    <header className="header">
      <div className="hero-section">
        <div className="profile-pic">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="hero-text">
          <h1>Ram Prasad Aryal</h1>
          <p className="subtitle">Proactive and versatile professional in IT, teaching, and production.</p>
          <p className="contact-info">
            16 Nottingham Drive, Hamilton | Phone: 027 462 4658 | Email: ramuaryal1987@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
