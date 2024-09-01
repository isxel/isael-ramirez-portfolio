import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Proj from "./components/Proj";
import About from "./components/About";
import Footer from "./components/Footer";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Proj />
      <Footer />
    </div>
  );
}

export default App;
