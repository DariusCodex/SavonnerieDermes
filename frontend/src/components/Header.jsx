// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.scss";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Savonnerie Dermès</h1>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/lab">Le Lab</Link></li>
            <li><Link to="/boutique">Boutique</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
