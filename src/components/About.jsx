import React from "react";
import "../style/About.css";
import me from "../assets/me.png";
import aboutMe from "../assets/aboutMe.jpeg";
import {
  FaReact,
  FaGithub,
  FaFigma,
  FaCss3Alt,
  FaPython,
  FaLinkedin,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

// import aboutMe from "../assets/aboutMe.png";

const techStack = [
  { icon: <FaReact />, name: "React" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <GrMysql />, name: "MySQL" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiAdobelightroom />, name: "Lightroom" },
];

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-left">
          <img src={aboutMe} alt="Isael Ramirez" className="self-image"></img>
        </div>
        <div className="about-right">
          <h1 className="about-title">
            Hi! I'm Isael, an aspiring Software Engineer with a passion for Code
            & Design
          </h1>
          <p className="about-description">
            For my entire life, I’ve been drawn to both technology and design.
            Whether it was experimenting with visuals, messing around with code,
            or creating unique digital experiences, I always found myself
            fascinated to the intersection of creativity and technology.
          </p>
          <p className="about-description">
            With a background in Computer Science, I specialize in front-end
            development and UI/UX design, where I get to bring ideas to life
            through intuitive and engaging user interfaces.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/isael-ramirez-a4bb32309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/isxel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a href="mailto:isaelramirez8@gmail.com">
            <MdOutlineEmail /> Email
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h1 className="skills-title">Technical Skills</h1>

        <div className="skills-grid">
          {/* Frontend Development */}
          <div className="skills-column">
            <h2>Frontend Development</h2>
            <p>
              I specialize in front-end development, crafting engaging user
              interfaces with modern web technologies. My focus is on creating
              seamless and responsive designs that enhance user experience.
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <FaReact /> React
              </div>
              <div className="skill-item">
                <IoLogoJavascript /> JavaScript
              </div>
              <div className="skill-item">
                <FaCss3Alt /> CSS & Styling
              </div>
              <div className="skill-item">
                <FaFigma /> UI/UX Design
              </div>
            </div>
          </div>

          {/* MERN Full-Stack Development */}
          <div className="skills-column">
            <h2>MERN Full-Stack Development</h2>
            <p>
              While I lean towards front-end development, I also work with the
              MERN stack to build full-stack applications, integrating
              databases, authentication, and APIs.
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <FaNodeJs /> Node.js
              </div>
              <div className="skill-item">
                <SiMongodb /> MongoDB
              </div>
              <div className="skill-item">
                <GrMysql /> MySQL
              </div>
            </div>
          </div>

          {/* Design & Creativity */}
          <div className="skills-column">
            <h2>Design & Creativity</h2>
            <p>
              My background in photography and digital design helps me approach
              software development with an artistic eye. I use industry-standard
              tools to enhance visual aesthetics.
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <SiAdobephotoshop /> Adobe Photoshop
              </div>
              <div className="skill-item">
                <SiAdobelightroom /> Adobe Lightroom
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="skills-column">
            <h2>Tools & Technologies</h2>
            <p>
              I use various tools to improve development workflow, version
              control, and scripting to automate tasks efficiently.
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <FaGithub /> GitHub
              </div>
              <div className="skill-item">
                <FaPython /> Python
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
