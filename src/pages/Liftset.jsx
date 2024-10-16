import React from "react";
import "../style/Liftset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DriveIsxSite from "../assets/driveisxSite.png";
import LiftsetHero from "../assets/liftset-hero.png";
import LiftsetUserflow from "../assets/liftset-userflow.png";
import LiftsetWireframeLandingpage from "../assets/liftset-wireframe-landingpage.png";
import LiftsetWireframeLogin from "../assets/liftset-wireframe-login.png";
import LiftsetWireframeDashboard from "../assets/liftset-wireframe-dashboard.png";
import LiftsetStiletile from "../assets/liftset-styletile.png";
import LiftsetWireframeEditworkout from "../assets/liftset-wireframe-editworkout.png";
import LiftsetUiLogin from "../assets/liftset-ui-login.png";
import LiftsetUiSignup from "../assets/liftset-ui-signup.png";
import LiftsetUiDashboard from "../assets/liftset-ui-dashboard.png";
import LiftsetUiDashextend from "../assets/liftset-ui-dashextended.png";

const Liftset = () => {
  const carouselSettings = {
    dots: true, // Enable dots below the carousel
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable arrows for navigation
  };
  return (
    <div className="photography-container">
      <h1 className="photography-title">Liftset</h1>
      <p className="photography-description">
        Liftset is a workout strength tracker designed to help users monitor
        their progress and achieve their fitness goals.
      </p>
      <p className="photography-secondary-description">
        This website features a user-friendly interface where users can log
        their workouts, track their strength gains, and view their workouts over
        time. The app focuses on allowing users to create weekly workout splits
        by selecting muscle groups for each day and recording detailed workout
        logs, including sets, reps, and weights. With a focus on personal
        growth, Liftset provides tools to encourage users to stay motivated and
        achieve their fitness goals.
      </p>
      <p className="photography-secondary-description">
        Throughout my personal fitness journey, I found myself tracking my
        progress through my notes app or on pencil and paper. This often led to
        disorganization and a lack of motivation. I wanted to create a platform
        that would help users like me stay organized and motivated to achieve
        their fitness goals.
      </p>
      <h2 className="photography-subtitle">User Flow</h2>
      <p className="photography-secondary-description">
        Users are initially prompted a landing page where there are some call to
        actions to encourage sign up. Additionally, there is information showing
        what our web application offers and how we can benefit the user. Users
        can create an account, log in, and view their dashboard, which displays
        their weekly workout split. Users can create a new workout log by
        selecting the muscle group they want to train on each day of the week.
        Users can then add exercises to their workout log, including sets, reps,
        and weights. Users can view their workout logs over time and track their
        strength gains.
      </p>
      <div className="photography-site-images">
        <img src={LiftsetUserflow} alt="User Flow" className="website-image" />
      </div>
      <h2 className="photography-subtitle">Wireframe</h2>
      <p className="photography-secondary-description">
        The wireframe for Liftset is designed to provide a clear and intuitive
        user experience. The wireframe features a clean and modern design that
        focuses on functionality and ease of use. The wireframe includes a
        landing page, sign-up and login pages, a dashboard, and workout log
        pages. The wireframe also includes a mobile version to ensure that users
        can access Liftset on any device.
      </p>
      <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img
            src={LiftsetWireframeLandingpage}
            alt="Wireframe Landing Page"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={LiftsetWireframeLogin}
            alt="Wireframe Login Page"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={LiftsetWireframeDashboard}
            alt="Wireframe Dashboard"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src={LiftsetWireframeEditworkout}
            alt="Wireframe Edit Workout"
            className="carousel-image"
          />
        </div>
      </Slider>
      <h2 className="photography-subtitle">Style Tile</h2>
      <p className="photography-secondary-description">
        The style tile for Liftset features a clean and modern design with a
        focus on usability and functionality. The style tile includes a color
        palette, typography, and UI elements that create a cohesive and visually
        appealing user experience. The style tile also includes a mobile version
        to ensure that users can access Liftset on any device.
      </p>
      <div className="photography-site-images">
        <img src={LiftsetStiletile} alt="styletile" className="website-image" />
      </div>
      <h2 className="photography-subtitle">UI Design</h2>
      <div className="photography-site-images">
        <img src={LiftsetHero} alt="UI Hero" className="website-image" />
      </div>
      {/* <Slider {...carouselSettings} className="wireframe-carousel">
        <div>
          <img
            src={LiftsetHero}
            alt="Photography portfolio"
            className="website-image"
          />
        </div>
        <div>
          <img
            src={LiftsetUiLogin}
            alt="liftset login"
            className="website-image"
          />
        </div>
        <div>
          <img
            src={LiftsetUiSignup}
            alt="liftset signup"
            className="website-image"
          />
        </div>
        <div>
          <img
            src={LiftsetUiDashboard}
            alt="liftset dashboard"
            className="website-image"
          />
        </div>
        <div>
          <img
            src={LiftsetUiDashextend}
            alt="liftset dashboard extended"
            className="website-image"
          />
        </div>
      </Slider> */}
    </div>
  );
};

export default Liftset;
