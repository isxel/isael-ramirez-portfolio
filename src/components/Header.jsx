import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="header">
        <Link to="/" className="header-link">
          Isael Ramirez
        </Link>
      </nav>
    </header>
  );
}

export default Header;
