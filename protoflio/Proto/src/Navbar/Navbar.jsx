import React, { useState, useEffect, useCallback } from "react";
import "../Navbar/Navbar.css";
import { LINKEDIN_URL } from "../Constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = document.querySelectorAll("section[id]");
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <a
            className="navbar-brand"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="brand-text">YB</span>
          </a>

          <button
            className={`navbar-toggler ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-content ${isMobileMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "skills" ? "active" : ""
                  }`}
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "projects" ? "active" : ""
                  }`}
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="navbar-actions">
              <a
                className="btn-linkedin"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
