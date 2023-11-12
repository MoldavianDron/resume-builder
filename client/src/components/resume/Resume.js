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
            <h3>SKILLS & COMPETENCIES</h3>
            <div className="break-line"></div>
            <ul className="skills">
              <li>React.js</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Typescript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Git</li>
              <li>Webpack/vite</li>
              <li>Docker</li>
            </ul>
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
              <li>Stand-up comedy(viewer)</li>
            </ul>
          </div>
        </aside>
        <section className="main-section">
          <div className="who-is-this-guy" style={{paddingTop: "30px"}}>
            <h3>WHO IS THIS GUY?</h3>
            <div className="break-line black"></div>
            <p style={{paddingTop: "10px"}}>
              React full-stack developer with 2 years of experience with a strong emphasis on React and Node.js for server-side development.
              I actively explore DevOps practices and have already acquired a basic understanding of the principles and methodologies in the field.
              My primary goal is to comprehend the entire software development life cycle.
              I bring a dedicated approach to expanding my skills, ensuring a holistic understanding of software engineering to deliver comprehensive and scalable solutions.
            </p>
          </div>
          <div className="experience" style={{paddingTop: "10px"}}>
            <h3>EXPERIENCE</h3>
            <div className="break-line black"></div>
            <h4>Software engineer (React + Express JS) <span style={{fontWeight: "normal"}}>| May 2022 - Present</span></h4>
            <p style={{fontSize: "14px"}}><u>Spartez Software Systems Sp. z o. o.</u> (holding: <u>Appfire Technologies, LLC</u>)</p>
            <p style={{marginTop: "10px", fontSize: "12px", fontWeight: "bold"}}>Products I contributed to: </p>
            <p><u>Whiteboards</u> - a collaborative online platform for agile and product teams.
              This product was created as a plugin for Atlassian ecosystem(Jira and Confluence) and as stand-alone SAAS platform.
            </p>
            <ul>
              <li>Collaborated as a key team member in the implementation of a redesigned sign-up flow for our SaaS product, contributing to a significant surge in sign-up conversion rates from 12% to 40%.</li>
              <li>Enhanced our product's billing system by introducing key features such as the ability to apply promotion codes to your plan and the implementation of a trial period for the pro version. These additions are important in facilitating user conversions from free to paid plans.</li>
              <li>Improved user experience (UX) by enhancing the behavior of lines, a core feature. This enhancement positively impacted existing active users, delivering a more intuitive and less confusing interaction.
              As lines are the second most frequently used and discovered functionality after sticky notes, this change also enhances the first impression of new users about the product.</li>
            </ul>
          </div>
          <div className="personal-projects" style={{paddingTop: "10px"}}>
            <h3>PERSONAL PROJECTS</h3>
            <div className="break-line black"></div>
            <p>Update this section with advanced things to prove middle qualification</p>
          </div>
          <div className="background" style={{paddingTop: "10px"}}>
            <h3>PREVIOUS BACKGROUND</h3>
            <div className="break-line black"></div>
            <h4>Experience:</h4>
            <h5 style={{marginTop: "5px"}}>Road designer<span style={{fontWeight: "normal"}}> | Mar 2019 - May 2022</span></h5>
            <p style={{fontSize: "12px"}}>TPF Sp. z o. o and Multiconsult Sp. z o. o</p>
            <h4>Education:</h4>
            <h5 style={{marginTop: "5px"}}>Warsaw university of technologies<span style={{fontWeight: "normal"}}> | Oct 2015 - Jul 2019</span></h5>
            <p style={{fontSize: "12px"}}>Faculty: civil engineering, specialization: road design</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Resume;