import React, { useState, useEffect } from "react";
import image from "../assets/bla.jpg";
import image1 from "../assets/git.png";
import image2 from "../assets/bootstrap.png";
import image3 from "../assets/html.png";
import image4 from "../assets/java-script.png";
import image5 from "../assets/structure.png";
import image6 from "../assets/css-3.png";
import "./About.css";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div
            className={`about-text-container ${
              isVisible ? "slide-in-left" : ""
            }`}
          >
            <h3 className="about-greeting">Hello! I'm Yousef Badr</h3>
            <p className="about-text">
              I'm a passionate Frontend Developer with expertise in creating
              responsive, user-friendly web experiences. I specialize in turning
              ideas into beautifully crafted digital solutions using modern web
              technologies.
            </p>

            <div className="skills-container">
              <h4 className="skills-title">My Core Technologies</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon html">
                    {" "}
                    <img src={image3} alt="" />
                  </div>
                  <span className="skill-name">HTML5</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon css">
                    <img src={image6} alt="" />
                  </div>
                  <span className="skill-name">CSS3</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon js">
                    <img src={image4} alt="" />
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon bootstrap">
                    <img src={image2} alt="" />
                  </div>
                  <span className="skill-name">Bootstrap</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon react">
                    <img src={image5} alt="" />
                  </div>
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon git">
                    <img src={image1} alt="" />
                  </div>
                  <span className="skill-name">Git</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="cta-button primary">
                Let's Connect
              </a>
              <a href="#projects" className="cta-button secondary">
                View Projects
              </a>
            </div>
          </div>

          <div
            className={`about-image-container ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            <div className="profile-image">
              <div className="image-placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="profile-image">
                <div className="image-frame">
                  <img
                    src={image}
                    alt="Yousef Badr - Frontend Developer"
                    className="profile-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
