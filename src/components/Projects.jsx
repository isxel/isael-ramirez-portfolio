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
          <h3>Pluvia</h3>
          <p>
            Pluvia is a web application designed to address common challenges
            faced by users wanting to adopt cloud services
          </p>
        </div>
        <div className="project-card">
          <h3>Photography Portfolio</h3>
          <p>
            A website built to showcase personal photography work and
            commissioned projects, including a contact feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
