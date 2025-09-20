import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import './Card.css';

const Card = () => {
  return (
    <div className="user-card">
      <div className="user-card-content">
        <div className="profile-image">
          <img 
            src="https://cdna.artstation.com/p/assets/images/images/075/039/706/large/retratosanime-514.jpg?1713581850" 
            alt="Profile" 
            className="profile-img"
          />
        </div>
        <div className="user-info">
          <h2 className="user-name">Steven Acosta-Pliego</h2>
          <p className="user-description">
            A Software Engineer who has developed countless innovative solutions.
          </p>
          <div className="social-links">
            <a href="https://github.com/sacostapliego" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/sacostapliego" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;