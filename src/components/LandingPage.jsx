import React from "react";
import "../style/LandingPage.css";

const landingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Isael Ramirez</h1>
      <p className="landing-subtitle">Aspring Front-End Developer</p>
      <button
        className="landing-button"
        onClick={() =>
          document
            .getElementById("aboutMe")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore More
      </button>
    </div>
  );
};

export default landingPage;
