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
        I'm <strong>Isael Ramirez</strong>, a recent{" "}
        <strong>Computer Science graduate</strong> with a strong focus on{" "}
        <strong>front-end development</strong> and a deep passion for creating
        visually stunning, <strong>user-friendly websites</strong>. My journey
        in tech has been fueled by a love for <strong>design</strong>, coding,
        and the powerful intersection between the two. I specialize in{" "}
        <strong>JavaScript</strong> and <strong>React</strong>, and I thrive on
        bringing creative ideas to life through code.
      </p>

      <p className="about-description">
        With a foundation in <strong>technical skills</strong> and an eye for
        detail honed through{" "}
        <strong>photography, Photoshop, and Lightroom</strong>, I bring a
        unique, artistic perspective to my web development projects. My work is
        driven by a desire to push the boundaries of web design, delivering{" "}
        <strong>engaging, high-quality user experiences</strong>.
      </p>

      <p className="about-description">
        As I continue to grow in my career, I'm excited to take on new
        challenges that allow me to{" "}
        <strong>blend creativity and technology</strong>, crafting solutions
        that not only meet but exceed user expectations. I'm eager to
        collaborate with others who share my enthusiasm for{" "}
        <strong>innovation and design</strong>, and I'm always open to exploring
        new opportunities. Let's connect and create something exceptional
        together!
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
