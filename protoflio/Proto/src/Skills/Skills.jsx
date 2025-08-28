import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import gitImage from "../assets/git.png";
import bootstrapImage from "../assets/bootstrap.png";
import htmlImage from "../assets/html.png";
import jsImage from "../assets/java-script.png";
import responsiveImage from "../assets/responsive.png";
import cssImage from "../assets/css-3.png";
import reactImage from "../assets/structure.png";
import designImage from "../assets/design.png";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: "HTML", level: 90, icon: "html", image: htmlImage },
    { name: "CSS", level: 85, icon: "css", image: cssImage },
    { name: "JavaScript", level: 80, icon: "js", image: jsImage },
    { name: "Bootstrap", level: 85, icon: "bootstrap", image: bootstrapImage },
    { name: "React", level: 75, icon: "react", image: reactImage },
    {
      name: "Responsive Design",
      level: 90,
      icon: "responsive",
      image: responsiveImage,
    },
    { name: "UI/UX Design", level: 70, icon: "design", image: designImage },
    { name: "Git", level: 75, icon: "git", image: gitImage },
  ];

  useEffect(() => {
    const currentRef = skillsRef.current;
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
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? "fade-in" : ""}`}>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to create amazing
            web experiences
          </p>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item ${isVisible ? "slide-in" : ""}`}
              style={isVisible ? { animationDelay: `${index * 0.1}s` } : {}}
              data-skill={skill.icon}
            >
              <div className="skill-icon">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="visually-hidden">{skill.name} icon</span>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`skills-cta ${isVisible ? "fade-in-delay" : ""}`}>
          <p>Interested in seeing these skills in action?</p>
          <a href="#projects" className="cta-button">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
