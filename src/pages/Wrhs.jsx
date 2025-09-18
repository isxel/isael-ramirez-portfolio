import React from "react";
import wrhsLogo from "../assets/wellrockHSGreyLogo.jpg";
import wrhsLogoBreakdown from "../assets/wrhsLogoBreakdown.jpg";
const Wrhs = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Wellrock Home Solutions</h1>
      <h2 className="project-subtitle">Context</h2>
      <ul className="experience-list">
        <li>
          <b>Goal:</b> Build credibility, capture leads, and codify pricing/ops
          for early-stage growth.
        </li>
        <li>
          <b>Role:</b> Marketing & Operations Coordinator (solo contributor,
          cross-functional with family team)
        </li>
        <li>
          <b>Timeline:</b> Mar 2024 – Present
        </li>
        <li>
          <b>Scope:</b> Brand identity & social presence Website (Wix) + SEO
          (on-page + JSON-LD) Content/blog strategy + analytics setup Quote
          generator (Google Sheets) Light PR/outreach & customer testimonials
        </li>
      </ul>

      <h2 className="project-subtitle">Brand & Visual Identity</h2>
      <h3 className="project-secondary-title">What I did</h3>
      <ul className="experience-list">
        <li>
          Designed logo, color palette, and typography for a trustworthy,
          local-service feel.
        </li>
        <li>
          Built a lightweight brand kit for consistent use across site, quotes,
          and social.
        </li>
      </ul>
      <div className="project-image-container">
        <img src={wrhsLogo} alt="wrhs logo" className="page-image"></img>
        <img
          src={wrhsLogoBreakdown}
          alt="wrhs logo breakdown"
          className="page-image"
        ></img>
      </div>
    </div>
  );
};

export default Wrhs;
