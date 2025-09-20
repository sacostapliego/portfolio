import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="home-content">
      <h1 className="main-heading">STEVEN<br />ACOSTA-PLIEGO</h1>
      <p className="sub-heading">Self-taught Developer</p>

      <div className="info-boxes-container">
        <div className="info-box">
          <div className="box-content">
            <div className="logo-section">
              <div className="logo-placeholder">
                <img src="https://i.namu.wiki/i/8x1mjJ2UvYbdU_0NPGZtRsNDs90SZu668ij9ySjdmr0G5wXbNI1BzO4vVgfEPEPgMGgANc93UJWeCEjD_AdTJg.png" alt="Logo" />
              </div>
            </div>
            <div className="text-section">
              <div className="text-line">Georgia State University</div>
              <div className="text-line">Bachelor of Science in Computer Science</div>
              <div className="text-line">GPA: 3.78/4.0</div>
            </div>
          </div>
        </div>
        <div className="info-box">
          <div className="box-content">
            <div className="logo-section">
              <div className="logo-placeholder">
                <img src="https://i.namu.wiki/i/8x1mjJ2UvYbdU_0NPGZtRsNDs90SZu668ij9ySjdmr0G5wXbNI1BzO4vVgfEPEPgMGgANc93UJWeCEjD_AdTJg.png" alt="Logo" />
              </div>
            </div>
            <div className="text-section">
              <div className="text-line">Georgia State University</div>
              <div className="text-line">Second line of text</div>
              <div className="text-line">Third line of text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;