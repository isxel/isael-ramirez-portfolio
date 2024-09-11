import { useState } from "react";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Proj from "./components/Proj";
import About from "./components/About";
import Footer from "./components/Footer";
import Pluvia from "./pages/Pluvia";
import Photography from "./pages/Photography";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import "./style/App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <About />
                <Proj />
                <Footer />
              </>
            }
          />
          {/* Route for the Pluvia project */}
          <Route
            path="/Pluvia"
            element={
              <>
                <Header />
                <Pluvia />
                <Footer />
              </>
            }
          />
          {/* Route for the Photography project */}
          <Route
            path="/Photography"
            element={
              <>
                <Header />
                <Photography />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
