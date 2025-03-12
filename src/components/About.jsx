import React from "react";
import "../style/About.css";
import me from "../assets/me.png";
import {
  FaReact,
  FaGithub,
  FaFigma,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

// import aboutMe from "../assets/aboutMe.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">
        Aspiring Software Engineer with a passion for Code & Design
      </h1>

      <p className="about-description">
        I'm Isael Ramirez, a recent Computer Science graduate with a passion for
        software development, creative design, and user-focused solutions. I
        thrive at the intersection of technology and creativity, crafting
        intuitive and visually engaging applications that enhance user
        experiences.
      </p>

      <p className="about-description">
        With expertise in JavaScript, React, and front-end development, I
        specialize in bringing ideas to life through code. At the same time, my
        technical background and problem-solving mindset allow me to tackle
        broader software engineering challenges, from data visualization to
        scalable systems.
      </p>

      <p className="about-description">
        Beyond coding, my experience in photography, Photoshop, and Lightroom
        has sharpened my eye for detail, helping me approach software
        development with a unique, artistic perspective. I’m always looking for
        opportunities to blend design, functionality, and performance to create
        seamless digital experiences.
      </p>
      <p className="about-description">
        I’m excited to take on new challenges that push boundaries and drive
        innovation. Whether in front-end, full-stack development, or beyond, I’m
        eager to collaborate and build solutions that make an impact. Let’s
        connect and create something exceptional together!
      </p>
      <h1>Tech Stack</h1>
      <div className="logo-section">
        <FaReact className="about-logo" />
        <IoLogoJavascript className="about-logo" />
        <FaCss3Alt className="about-logo" />
        <FaGithub className="about-logo" /> <FaFigma className="about-logo" />
        <FaPython className="about-logo" />
        <SiAdobephotoshop className="about-logo" />
      </div>
      <div className="about-section">
        <div className="about-image">
          <img src={me} alt="self iamge" className="self-image"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
