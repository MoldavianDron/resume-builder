import React from "react";
import './Resume.css';

const result = {
  image_url: "1699571411312.jpeg",
  fullName: "Andrei Zaporojan"
}

const Resume = () => {
  return (
    <>
      <main className="resume-container">
        <aside className="sidebar">
          <div className="resume-image-container">
            <img
              src="photo.jpeg"
              alt={result.fullName}
              className="resume-image"
            />
          </div>
          <p className="full-name">
            ANDREI <span>ZAPOROJAN</span>
          </p>
          <div className="social">
            <div className="social-item">
              <img
                src="phone.svg"
                alt="phone"
                className="social-icon"
              />
              <span>+48 111 111 111</span>
            </div>
            <div className="social-item">
              <img
                src="email.svg"
                alt="mail"
                className="social-icon"
              />
              <span>moldaviandron@gmail.com</span>
            </div>
            <div className="social-item">
              <img
                src="location.svg"
                alt="location"
                className="social-icon"
              />
              <span>Warsaw, Poland</span>
            </div>
            <div className="social-item">
              <img
                src="github.svg"
                alt="github"
                className="social-icon"
              />
              <a href="https://github.com/MoldavianDron" target="_blank" rel="noopener noreferrer">View my GitHub profile</a>
            </div>
            <div className="social-item">
              <img
                src="linkedin.svg"
                alt="linkedin"
                className="social-icon"
              />
              <a href="https://www.linkedin.com/in/andrzej-zaporozan-50b64617b" target="_blank" rel="noopener noreferrer">View my LinkedIn profile</a>
            </div>
          </div>
          <div className="personal-qualities-section">
            <h3>LANGUAGES</h3>
            <div className="break-line"></div>
            <ul>
              <li>English - B2</li>
              <li>Polish - B2/C1</li>
              <li>Russian - C1</li>
            </ul>
          </div>
          <div className="personal-qualities-section">
            <h3>HOBBIES</h3>
            <div className="break-line"></div>
            <ul>
              <li>Tennis</li>
              <li>Chess</li>
              <li>Stand-up comedy</li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  )
}

export default Resume;