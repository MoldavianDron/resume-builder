import React from "react";
import './Resume.css';

const result = {
  image_url: "1699571411312.jpeg",
  fullName: "Andrei Zaporojan"
}

const Resume = () => {
  return (
    <>
      <main className="container container-right-corner">
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
        </aside>
      </main>
    </>
  )
}

export default Resume;