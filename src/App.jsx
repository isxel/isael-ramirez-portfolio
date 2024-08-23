import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
