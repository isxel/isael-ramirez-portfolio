import React from "react";
import "../style/About.css";
import aboutMe from "../assets/aboutMe.jpeg";
import isael from "../assets/isael.png";

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
    <section className="about-vertical-section" id="about">
      <div className="about-image-container">
        <img src={isael} alt="Isael Ramirez" className="about-image" />
      </div>

      <div className="about-text">
        <h1 className="about-heading">About Me</h1>
        <p className="about-paragraph">
          I’m Isael, a detail-oriented and creative professional with a
          background in Computer Science and hands-on experience in business
          operations, marketing, and technology.
        </p>
        <p className="about-paragraph">
          I enjoy blending problem-solving with design-driven thinking — whether
          it’s building tools that improve workflows, optimizing a brand’s
          digital presence through SEO and social media, or creating clean,
          user-focused web projects. My goal is to bring together business
          strategy and technology to deliver solutions that are both functional
          and impactful.
        </p>

        <div className="about-links">
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
        <h1 className="skills-title">Skillset</h1>

        <div className="skills-grid">
          <div className="skills-column">
            <h2>Frontend Development & UI/UX</h2>
            <p>
              I specialize in front-end development, crafting engaging user
              interfaces with modern web technologies. My focus is on creating
              seamless and responsive designs that enhance user experience.
            </p>
            <div className="skills-list">
              <div className="skill-item">React & JavaScript (ES6+)</div>
              <div className="skill-item">HTML5 / CSS3 (Responsive Design)</div>
              <div className="skill-item">
                UI/UX Design (Figma, Accessibility Principles)
              </div>
              <div className="skill-item">Component-Based Development</div>
              <div className="skill-item">Web Performance Optimization</div>
            </div>
          </div>

          <div className="skills-column">
            <h2>Backend & Data</h2>
            <p>
              While I lean toward frontend work, I also bring full-stack skills
              to support data and backend workflows. I’ve worked with databases,
              APIs, and authentication to deliver complete solutions.
            </p>
            <div className="skills-list">
              <div className="skill-item">Node.js & REST APIs (Postman)</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">MySQL</div>
              <div className="skill-item">Authentication & Data Handling</div>
              <div className="skill-item">API Integration & Error Handling</div>
            </div>
          </div>

          <div className="skills-column">
            <h2>Business Operations & Strategy</h2>
            <p>
              I bring hands-on experience supporting early-stage business growth
              through structured processes, CRM management, and quoting
              workflows. My focus is on ensuring accuracy, compliance, and
              efficiency across operations.
            </p>
            <div className="skills-list">
              <div className="skill-item">CRM: Salesforce & HubSpot</div>
              <div className="skill-item">Quote-to-Cash (QTC) Workflows</div>
              <div className="skill-item">Contract & Renewal Support</div>
              <div className="skill-item">
                Data Reporting (Excel/Google Sheets)
              </div>
              <div className="skill-item">
                Process Documentation & Improvement
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h2>Marketing & Growth</h2>
            <p>
              With a background in SEO optimization and digital content, I help
              brands improve visibility and credibility online. I’ve created
              campaigns and strategies that connect with audiences and
              strengthen brand identity.
            </p>
            <div className="skills-list">
              <div className="skill-item">
                SEO Optimization (on-page, schema/JSON-LD)
              </div>
              <div className="skill-item">
                Social Media Campaigns (Facebook, Instagram)
              </div>
              <div className="skill-item">Content Strategy & Blog Planning</div>
              <div className="skill-item">
                Campaign Analytics (Bing Webmaster Tools, GA)
              </div>
              <div className="skill-item">
                Client-Facing Marketing Collateral
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h2>Design & Creativity</h2>
            <p>
              My creative background in photography and digital design gives me
              a unique perspective on technology. I combine technical expertise
              with design skills to craft visuals that are both aesthetic and
              functional.
            </p>
            <div className="skills-list">
              <div className="skill-item">Adobe Photoshop</div>
              <div className="skill-item">Adobe Lightroom</div>
              <div className="skill-item">Canva (Brand Assets & Layouts)</div>
              <div className="skill-item">Visual Storytelling</div>
              <div className="skill-item">
                Creative Editing & Content Design
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h2>Tools & Collaboration</h2>
            <p>
              I use a variety of tools to manage projects, streamline
              collaboration, and improve workflows. From version control to
              project tracking, I integrate tools that keep teams aligned and
              efficient.
            </p>
            <div className="skills-list">
              <div className="skill-item">GitHub & Version Control</div>
              <div className="skill-item">Jira / Agile Collaboration</div>
              <div className="skill-item">Python (scripting & automation)</div>
              <div className="skill-item">DevTools for Debugging</div>
              <div className="skill-item">Workflow Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
