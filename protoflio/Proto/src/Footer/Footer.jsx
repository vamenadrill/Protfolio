import React, { useState, useEffect } from "react";
import "./Footer.css";
import { EMAIL, LINKEDIN_URL } from "../Constants";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const position = footer.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={`footer ${isVisible ? "fade-in" : ""}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Yousef Badr</h3>
            <p className="footer-description">
              Frontend Developer creating beautiful, functional web experiences
              with modern technologies.
            </p>
            <div className="footer-social">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                onMouseEnter={() => setIsHovered("linkedin")}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg
                  className={`li ${isHovered === "linkedin" ? "hovered" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="social-link"
                aria-label="Email"
                onMouseEnter={() => setIsHovered("email")}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg
                  className={isHovered === "email" ? "hovered" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection("#hero", e)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection("#about", e)}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection("#projects", e)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection("#contact", e)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Technologies</h4>
            <ul className="footer-links">
              <li>HTML5 & CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Get In Touch</h4>
            <div className="footer-contact">
              <p>Have a project in mind or want to collaborate?</p>
              <a
                href="#contact"
                className="footer-cta"
                onClick={(e) => scrollToSection("#contact", e)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            &copy; {currentYear} Yousef Badr. Built with{" "}
            <span className="heart">❤️</span> using React & Bootstrap
          </p>
          <button
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="footer-background">
        <div className="footer-shape shape-1"></div>
        <div className="footer-shape shape-2"></div>
      </div>
    </footer>
  );
}
