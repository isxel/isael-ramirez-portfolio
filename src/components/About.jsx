import react from "react";
import "../style/About.css";
import me from "../assets/me.png";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">
        Aspiring Front-End Developer with a passion for Creative Design and
        User-Centric Experiences
      </h1>

      <p className="about-description">
        I'm Isael Ramirez, a recent Computer Science graduate with a strong
        focus on front-end development and a deep passion for creating visually
        stunning, user-friendly websites. My journey in tech has been fueled by
        a love for design, coding, and the powerful intersection between the
        two. I specialize in JavaScript and React, and I thrive on bringing
        creative ideas to life through code.
      </p>
      <p className="about-description">
        With a foundation in technical skills and an eye for detail honed
        through photography, Photoshop, and Lightroom, I bring a unique,
        artistic perspective to my web development projects. My work is driven
        by a desire to push the boundaries of web design, delivering engaging,
        high-quality user experiences.
      </p>
      <p className="about-description">
        As I continue to grow in my career, I'm excited to take on new
        challenges that allow me to blend creativity and technology, crafting
        solutions that not only meet but exceed user expectations. I'm eager to
        collaborate with others who share my enthusiasm for innovation and
        design, and I'm always open to exploring new opportunities. Let's
        connect and create something exceptional together!
      </p>
      <div className="about-section">
        <div className="about-image">
          <img src={me} alt="self iamge" className="self-image"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
