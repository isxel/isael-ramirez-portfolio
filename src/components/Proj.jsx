import React from "react";
import "../style/Proj.css";
import { Link } from "react-router-dom";
import PluviaHome from "../assets/pluviaHome.png";
import DriveIsxSite from "../assets/driveisxSite.png";
import LiftsetHero from "../assets/liftset-hero.png";
import wellrock from "../assets/wellrock-hero.png";
import sprout from "../assets/sproutDemo.png";
import wrhs from "../assets/wrhsHero.png";

const projects = [
  {
    title: "Wellrock Home Solutions",
    description: "Branding, SEO, and Digital Growth for a Remodeling Business",
    image: wrhs,
    link: "/wrhs",
  },
  {
    title: "Sprout",
    description: "Personal Finance Dashboard",
    image: sprout,
    link: "/sprout",
  },
  {
    title: "Pluvia",
    description: "Streamlining Cloud Development",
    image: PluviaHome,
    link: "/pluvia",
  },
  {
    title: "DriveIsx",
    description: "Freelance Automotive Photography",
    image: DriveIsxSite,
    link: "/photography",
  },
  {
    title: "Wellrock (In Progress)",
    description: "Reliable Tools for Stoneworkers",
    image: wellrock,
    link: "/wellrock",
  },
  {
    title: "Liftset (In Progress)",
    description: "Workout Strength Tracker",
    image: LiftsetHero,
    link: "/liftset",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1 className="skills-title">Experience Showcase</h1>
      </div>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <Link to={project.link}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} thumbnail`} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
