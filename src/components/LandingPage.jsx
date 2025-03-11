import React from "react";
import "../style/LandingPage.css";

const landingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Isael Ramirez</h1>
      <p className="landing-subtitle">Aspiring Software Engineer</p>
      <button
        className="landing-button"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore More
      </button>
    </div>
  );
};

export default landingPage;
