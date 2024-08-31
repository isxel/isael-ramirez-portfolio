import React from "react";
import { useInView } from "react-intersection-observer";
import "../style/Projects.css";
import driveisxSite from "../assets/driveisx-site.png";

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
          <h3>Technology Stack:</h3>
          <p>
            Frontend: React, Bootstrap, Figma, CSS, Typescript, Adobe Photoshop
          </p>
        </div>
        <div className="project-card">
          <h3>Photography Portfolio</h3>
          <p>
            A minimalist web portfolio designed to showcase my photography,
            focusing on an intuitive user experience and responsive design.
            Built using React and CSS.
          </p>
          <h3>Design and Visuals</h3>
          <p>
            Utilized **Adobe Lightroom** for photo editing, achieving a cohesive
            look across all images.
          </p>
          <p>
            Focused on optimizing images to balance quality and performance,
            crucial for a seamless user experience.
          </p>
          <h3>Techonology Stack:</h3>
          <p>Frontend: React, JavaScript, CSS, JavaScript</p>
          <p>Design: Adobe Photoshop, Adobe Lightroom</p>
          <div className="site-images">
            <img src={driveisxSite} alt="Photography portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
