import React from "react";
import meImage from "../assets/me.jpg";
import "../style/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container" id="aboutMe">
      <div className="about-image">
        <img src={meImage} alt="Isael Ramirez" />
      </div>
      <div className="about-text">
        <h1 className="about-headings">About Me</h1>
        <p className="about-subtitle">
          Hello! My name is Isael Ramirez, and I’m an aspiring front-end
          developer with a passion for creating visually stunning and
          user-friendly websites. I recently graduated with a degree in Computer
          Science, where I honed my skills in JavaScript, React, and design
          principles. I’m particularly enthusiastic about combining my technical
          skills with my creative side. Whether it’s crafting a sleek portfolio
          or bringing an engaging web application to life, I thrive on turning
          ideas into reality. When I’m not coding, you can find me exploring my
          love for photography, capturing moments that inspire my design work. I
          also enjoy diving into Photoshop and Lightroom, where I apply my eye
          for detail to create visually compelling images. These skills often
          complement my web development projects, allowing me to bring a unique,
          artistic touch to my work. Looking ahead, I’m excited to continue
          growing as a front-end developer, with the goal of working on projects
          that push the boundaries of web design. I’m always open to new
          challenges and opportunities to collaborate with others who share my
          passion for innovation and creativity. Feel free to reach out—I’d love
          to connect!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
