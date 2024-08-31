import React from "react";
import "../style/Proj.css";

const Proj = () => {
  return (
    <div className="projects-container">
      <h1 className="project-title">Projects</h1>
      <div className="project-card">
        <h2 className="card-title">Pluvia</h2>
        <p className="card-paragraph">
          Pluvia is a web application designed to address common challenges
          faced by users wanting to adopt cloud services
        </p>
        <h3>Technology Stack:</h3>
        <p className="card-paragraph">
          Frontend: React, Bootstrap, Figma, CSS, Typescript, Adobe Photoshop
        </p>
      </div>
    </div>
  );
};

export default Proj;
