import React from "react";
import { useInView } from "react-intersection-observer";
import "../style/Projects.css";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`projects-container ${inView ? "fade-in" : ""}`}
      id="projects"
    >
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
