// src/components/Footer.jsx
import React from "react";
import "../styles/layout.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Savonnerie Dermès – Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
