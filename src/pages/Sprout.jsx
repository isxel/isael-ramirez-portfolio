import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UserFlow from "../assets/user-flow-sprout.png";
import Persona from "../assets/persona-sprout.png";
import PainPoints from "../assets/painpoints-sprout.png";
import Hero from "../assets/sprout-hero.png";
import Features from "../assets/sprout-features.png";
import Footer from "../assets/sprout-footer.png";
import Dashboard from "../assets/sprout-dashboard.png";
import Login from "../assets/sprout-login.png";
import Signup from "../assets/sprout-signup.png";
import HeroWF from "../assets/sprout-hero-wf.png";
import DashboardWF from "../assets/sprout-dashboard-wf.png";
import LoginWF from "../assets/sprout-login-wf.png";
import SignupWF from "../assets/sprout-signup-wf.png";
import HeroUI from "../assets/sprout-hero-ui.png";
import FeaturesUI from "../assets/sprout-features-ui.png";
import FooterUI from "../assets/sprout-footer-ui.png";
import DashboardUI from "../assets/sprout-dashboard-ui.png";
import LoginUI from "../assets/sprout-login-ui.png";
import SignupUI from "../assets/sprout-signup-ui.png";
import StyleSheet from "../assets/sprout-stylesheet.png";

const Sprout = () => {
  const carouselSettings = {
    dots: true, // Enable dots below the carousel
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable arrows for navigation
  };
  return (
    <div className="project-container">
      <h1 className="project-title">Sprout</h1>
      <p className="project-description">
        This project is a comprehensive web application designed to help users
        track and visualize their monthly income, spending, and savings. It
        features dynamic graphs and widgets that display financial trends,
        empowering users to make informed decisions about their finances.
      </p>
      <p className="project-secondary-description">
        The development process began with designing intuitive UI/UX components
        to ensure a seamless and visually appealing user experience. Using Figma
        for design mockups, I focused on creating a layout that was
        user-friendly, responsive, and easy to navigate. Once the designs were
        finalized, I transitioned into front-end development, implementing the
        application using React.js, JavaScript, and Vite. Key features include:
        Interactive Data Visualization: Line charts display trends in income and
        spending over time, providing users with clear insights into their
        financial patterns. Customizable Data Input: Users can edit or add their
        financial data, ensuring the dashboard reflects their unique financial
        situation.
      </p>
      <p className="project-secondary-description">
        This project highlights my ability to conceptualize and develop UI/UX
        components, translate them into functional front-end solutions, and
        integrate data-driven features. It showcases my skills in React.js,
        component-based architecture, responsive design, and handling dynamic
        data visualization.
      </p>
      <h2 className="project-subtitle">Sprout User Experience</h2>
      <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img src={UserFlow} alt="User Flow" className="carousel-image" />
        </div>
        <div>
          <img src={Persona} alt="Persona" className="carousel-image" />
        </div>
        <div>
          <img src={PainPoints} alt="Pain Points" className="carousel-image" />
        </div>
      </Slider>

      <h2 className="project-subtitle">Wireframe</h2>
      <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img src={HeroWF} alt="Hero Wireframe" className="carousel-image" />
        </div>
        <div>
          <img
            src={DashboardWF}
            alt="Dashboard Wireframe"
            className="carousel-image"
          />
        </div>
        <div>
          <img src={LoginWF} alt="Login Wireframe" className="carousel-image" />
        </div>
        <div>
          <img
            src={SignupWF}
            alt="SignUp Wireframe"
            className="carousel-image"
          />
        </div>
      </Slider>

      <h2 className="project-subtitle">Sprout User Interface</h2>
      <p className="project-secondary-description">Developed utilizing Figma</p>
      <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img src={HeroUI} alt="Hero UI" className="carousel-image" />
        </div>
        <div>
          <img src={FeaturesUI} alt="Features UI" className="carousel-image" />
        </div>
        <div>
          <img src={FooterUI} alt="Footer UI" className="carousel-image" />
        </div>
        <div>
          <img
            src={DashboardUI}
            alt="Dashboard UI"
            className="carousel-image"
          />
        </div>
        <div>
          <img src={LoginUI} alt="Login UI" className="carousel-image" />
        </div>
        <div>
          <img src={SignupUI} alt="SignUp UI" className="carousel-image" />
        </div>
        <div>
          <img src={StyleSheet} alt="StyleSheet" className="carousel-image" />
        </div>
      </Slider>

      <h2 className="project-subtitle">Implemented Front End</h2>
      <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img src={Hero} alt="Hero" className="carousel-image" />
        </div>
        <div>
          <img src={Features} alt="Features" className="carousel-image" />
        </div>
        <div>
          <img src={Footer} alt="Footer" className="carousel-image" />
        </div>
        <div>
          <img src={Dashboard} alt="Dashboard" className="carousel-image" />
        </div>
        <div>
          <img src={Login} alt="Login" className="carousel-image" />
        </div>
        <div>
          <img src={Signup} alt="SignUp" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Sprout;
