import React, { useState, useEffect, useRef } from "react";
import About from "../About/About";
import "./Hero.css";

export default function Hero() {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Hello, I'm</span>
            <span className="title-highlight">Web Developer</span>
          </h1>

          <p className="hero-description">
            I create functional websites using modern technologies like
            <span className="tech-highlight"> HTML</span>,
            <span className="tech-highlight"> CSS</span>,
            <span className="tech-highlight"> JavaScript</span> &
            <span className="tech-highlight"> Bootstrap</span>.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary btn-lg hero-btn"
              onClick={scrollToProjects}
            >
              View My Work
              <span className="btn-icon">→</span>
            </button>

            <a
              href="#contact"
              className="btn btn-outline-light btn-lg hero-btn"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="window-content">
              <div className="code-line">
                <span className="code-comment">
                  // Creating web experiences using react
                </span>
              </div>
              <div className="code-line">
                <span className="code-keyword">function</span>
                <span className="code-function"> Portfolio</span>() {"{"}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="code-keyword">return</span>
                <span className="code-value"> innovation</span>;
              </div>
              <div className="code-line">{"});"}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`scroll-indicator ${
          scrollIndicatorVisible ? "visible" : "hidden"
        }`}
      >
        <div className="scroll-arrow" onClick={scrollToAbout}></div>
      </div>
    </header>
  );
}
