import React from 'react';
import { LuHouse } from "react-icons/lu";
import { BsSun } from 'react-icons/bs';
import { FaRegFolder } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import './Header.css';

const Header = () => {
  return (
    <header className="notch-header">
      <div className="notch-container">
        <button className="nav-button" aria-label="Home">
          <LuHouse size={20} />
          <span className="tooltip">Home</span>
        </button>
        
        <button className="nav-button" aria-label="Projects">
          <FaRegFolder size={20} />
          <span className="tooltip">Projects</span>
        </button>
        
        <button className="nav-button" aria-label="Skills">
          <FaCode size={20} />
          <span className="tooltip">Skills</span>
        </button>

        <button className="nav-button" aria-label="Resume">
          <IoDocumentTextOutline size={20} />
          <span className="tooltip">Resume</span>
        </button>
      </div>
    </header>
  );
};

export default Header;