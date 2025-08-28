import React, { useState, useEffect, useRef } from "react";
import pic from "../assets/Pic1.png";
import pic1 from "../assets/e-coomerce.png";
import pic2 from "../assets/res.png";
import "./Projects.css";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce",
      desc: "A responsive e-commerce website with modern UI, showcasing products with an elegant design.",
      tags: ["React", "CSS", "Bootstrap"],
      live: "https://symphonious-pasca-7aced6.netlify.app/",
      repo: "https://github.com/vamenadrill/E-commerce.git",
      image: pic1,
      type: "image",
    },
    {
      title: "Construction Services",
      desc: "This website is designed to showcase a professional and modern image of Construction Services company.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://delightful-smakager-005950.netlify.app/",
      repo: "https://github.com/vamenadrill/MediaTask.git",
      image: pic,
      type: "image",
    },
    {
      title: "Recipe Finder",
      desc: "Web app to search recipes using API, featuring filtering options and detailed cooking instructions for food enthusiasts.",
      tags: ["HTML", "JavaScript", "CSS"],
      live: "https://vamenadrill.github.io/Recipe/",
      repo: "https://github.com/vamenadrill/Recipe.git",
      image: pic2,
      type: "image",
    },
  ];

  useEffect(() => {
    const currentRef = projectsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills and
            creativity
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? "slide-in" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                {project.type === "emoji" ? (
                  <div className="project-emoji">{project.image}</div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-demo"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`projects-cta ${isVisible ? "fade-in-delay" : ""}`}>
          <p>Want to see more of my work?</p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="projects-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
}
