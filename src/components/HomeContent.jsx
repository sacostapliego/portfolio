import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
  return (
    <div className="home-content">
      <h1 className="main-heading">STEVEN<br />ACOSTA-PLIEGO</h1>
      <p className="sub-heading">
        Hi, my name is Steven. I am a self-taught developer, 
        and currently pursuing a Bachelor's degree in Computer Science at Georgia State University.
      </p>

      <div className="info-boxes-container">
        {/* Box 1 */}
        <div className="info-box one">
          <div className="box-content">
            <div className="logo-section">
              <div className="logo-placeholder">
                <img src="/gsu2.png" alt="Logo" />
              </div>
            </div>
            <div className="text-section">
              <div className="text-line">Georgia State University</div>
              <div className="text-line">Bachelor of Science in Computer Science</div>
              <div className="text-line">GPA: 3.78/4.0; Honors</div>
            </div>
          </div>
        </div>

        {/* Box 2 */}

      </div>
    </div>
  );
};

export default HomeContent;