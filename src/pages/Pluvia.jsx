import React from "react";
import "../style/Pluvia.css";
import PluviaHome from "../assets/pluviaHome.png";
import PluviaFeatures from "../assets/pluviaFeatures.png";
import PluviaFaq from "../assets/pluviaFaq.png";
import PluviaServiceSelection from "../assets/pluviaServiceSelection.png";
import PluviaChat from "../assets/pluviaChat.png";
import PluviaLogin from "../assets/pluviaLogin.png";
import PluviaStylesheet from "../assets/pluvia-stylesheet.png";

const Pluvia = () => {
  return (
    <div className="pluvia-container">
      <h1 className="pluvia-title">Pluvia</h1>
      <p className="pluvia-description">
        Pluvia is a web application aimed at simplifying the cloud development
        process by offering users a streamlined way to navigate and manage the
        complexity of cloud services. Developed as part of my senior project in
        undergrad, I was responsible for the front-end development, ensuring
        that the platform is both functional and visually appealing. Using React
        and TypeScript, I built an intuitive interface that empowers developers,
        from beginners to experts, to better manage cloud infrastructure with
        ease.
      </p>
      <p className="pluvia-secondary-description">
        Cloud services like AWS offer hundreds of options, but the sheer number
        of services available can become overwhelming. This is where Pluvia
        steps in. Our web application not only provides clarity to this complex
        ecosystem but also includes a system visualizer feature, allowing users
        to select and visualize various services, making cloud architecture
        easier to comprehend. Additionally, we integrated a responsive chatbot
        feature, built with Ollama - CodeLlama, to assist users in real-time. I
        designed the chatbot interface and the service selection feature,
        ensuring seamless interactivity.
      </p>
      <p className="pluvia-secondary-description">
        To maintain a consistent visual identity across the platform, I designed
        a style sheet and style tile. These elements ensured a cohesive look and
        feel, emphasizing user accessibility with a carefully selected,
        easy-to-read color palette. Engaging visuals were a priority, as I
        sought to enhance the user experience through appealing design while
        also maintaining functionality. I was also responsible for logo design
        and creating a user story, guiding the entire user experience from start
        to finish.
      </p>
      <p className="pluvia-secondary-description">
        For prototyping and speeding up development, I utilized Figma to create
        wireframes and Bootstrap for responsive, mobile-friendly design.
        Pluvia’s user interface remained accessible and visually engaging across
        all devices, ensuring a professional and polished experience.
      </p>
      <p className="pluvia-secondary-description">
        The name Pluvia, meaning "rain" in Latin, symbolizes the connection to
        cloud computing and development. With Pluvia, users can avoid overpaying
        for cloud services by using a platform that simplifies decision-making,
        helping them understand and utilize cloud resources efficiently.
      </p>
      <h2 className="pluvia-subtitle">Tech Stack</h2>
      <p className="pluvia-technologies">React</p>
      <p className="pluvia-technologies">TypeScript</p>
      <p className="pluvia-technologies">CSS</p>
      <p className="pluvia-technologies">Bootstrap</p>
      <p className="pluvia-technologies">Figma</p>

      <div className="pluvia-site-images">
        <img
          src={PluviaHome}
          alt="Pluvia home page"
          className="pluvia-website-image"
        />
        <img
          src={PluviaFeatures}
          alt="Pluvia features"
          className="pluvia-website-image"
        />
        <img
          src={PluviaFaq}
          alt="Pluvia FAQ and News"
          className="pluvia-website-image"
        />
        <img
          src={PluviaServiceSelection}
          alt="Pluvia service selection"
          className="pluvia-website-image"
        />
        <img
          src={PluviaChat}
          alt="Pluvia chatbot"
          className="pluvia-website-image"
        />
        <img
          src={PluviaLogin}
          alt="Pluvia-login"
          className="pluvia-website-image"
        />
        <img
          src={PluviaStylesheet}
          alt="Pluvia stylesheet"
          className="pluvia-website-image"
        />
      </div>
    </div>
  );
};

export default Pluvia;
