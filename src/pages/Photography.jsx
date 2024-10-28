import React from "react";
import "../style/Photography.css";
import PhotographyAbout from "../assets/PhotographyAbout.png";
import PhotographyCommission from "../assets/photography-commission.png";
import PhotographyCommission2 from "../assets/photography-commission2.png";
import PhotographyContact from "../assets/photography-contact.png";
import DriveIsxSite from "../assets/driveisxSite.png";

const Photography = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">DriveIsx</h1>
      <p className="project-description">
        driveisx is a dedicated photography portfolio and client engagement
        platform designed to showcase my passion for automotive photography.
      </p>
      <p className="project-secondary-description">
        This website serves as a central hub where I display a curated selection
        of my work, including commissioned projects and personal photoshoots
        from various car events.
      </p>
      <p className="project-secondary-description">
        A dedicated section about me offers a glimpse into my background and
        creative journey, helping visitors connect with the person behind the
        lens. For those interested in collaborating or learning more about my
        work, the site features an easy-to-use contact form and direct links to
        my Instagram, where I share even more of my automotive photography.
      </p>
      <p className="project-secondary-description">
        With over 100 followers on Instagram and growing interest in my work,
        this website provides an accessible way for everyone—whether or not they
        use social media—to explore my portfolio and get in touch.
      </p>
      <h2 className="project-subtitle">Tech Stack</h2>
      <p className="project-technologies">React</p>
      <p className="project-technologies">JavaScript</p>
      <p className="project-technologies">CSS</p>
      <p className="project-technologies">Adobe Photoshop</p>
      <p className="project-technologies">Adobe Lightroom</p>
      <a href="https://driveisx.me/" className="site-link">
        Visit Site
      </a>

      <div className="project-site-images">
        <img
          src={DriveIsxSite}
          alt="Photography portfolio"
          className="website-image"
        />
        <img
          src={PhotographyAbout}
          alt="Photography about section"
          className="website-image"
        />
        <img
          src={PhotographyCommission}
          alt="Photography commission section"
          className="website-image"
        />
        {/* <img
          src={PhotographyCommission2}
          alt="Photography commission section"
          className="website-image"
        /> */}
        <img
          src={PhotographyContact}
          alt="Photography contact section"
          className="website-image"
        />
      </div>
    </div>
  );
};

export default Photography;
