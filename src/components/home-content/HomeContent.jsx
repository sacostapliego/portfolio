import './styles/HomeContent.css'
import './styles/HomeHeading.css'
import './styles/InfoBoxes.css'
import { IoMdSchool } from "react-icons/io";
import { GiStarsStack } from "react-icons/gi";


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
        <div className="info-box one icon">
        <span className="watermark-icon" aria-hidden="true"><IoMdSchool /></span>
          <div className="box-content">
            <div className="logo-section">
              <div className="logo-placeholder">
                <img src="/gsu2.png" alt="Logo" />
              </div>
            </div>
            <div className="text-section">
              <div className="text-line">GEORGIA STATE UNIVERSITY</div>
              <div className="text-line">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</div>
              <div className="text-line">GPA: 3.78/4.0; HONORS</div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="info-box two icon">
        <span className="watermark-icon" aria-hidden="true"><GiStarsStack /></span>
          <div className="box-content">
            <div className="logo-section">
              <div className="logo-placeholder">
                <img src="/president.png" alt="Logo" />
              </div>
            </div>
            <div className="text-section">
              <div className="text-line">PRESIDENT'S LIST</div>
              <div className="text-line">GEORGIA STATE UNIVERSITY'S PRESIDENT LIST</div>
              <div className="text-line"> SUMMER 2025, SUMMER 2023, SPRING 2023, FALL 2022</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeContent;