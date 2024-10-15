import React from "react";
import "../style/Liftset.css";
import DriveIsxSite from "../assets/driveisxSite.png";
import LiftsetHero from "../assets/liftset-hero.png";

const Liftset = () => {
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

      <h2 className="photography-subtitle">Tech Stack</h2>
      <p className="photography-technologies">React</p>
      <p className="photography-technologies">JavaScript</p>
      <p className="photography-technologies">CSS</p>
      <p className="photography-technologies">Adobe Photoshop</p>
      <p className="photography-technologies">Adobe Lightroom</p>

      <div className="photography-site-images">
        <img
          src={LiftsetHero}
          alt="Photography portfolio"
          className="website-image"
        />
      </div>
    </div>
  );
};

export default Liftset;
