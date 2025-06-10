// src/pages/Accueil.jsx
import React from "react";
import HeroSlider from "@components/HeroSlider";
import labImage from "@assets/images/labthumbnail.webp";
import boutiqueImage from "@assets/images/Boutiquethumb.webp";
import "../styles/layout.scss";

const Accueil = () => {
  return (
    <>
      <HeroSlider />

      <section className="presentation">
        <h2>Notre Vision</h2>
        <p>Chez Dermès, chaque savon est une œuvre d’art formulée dans le respect des matières et du vivant.</p>
      </section>

      <section className="lab-preview carte-section">
        <div className="split-section">
          <div className="text">
            <h2>Le Lab</h2>
            <p>
              Formulez vos propres savons avec notre calculateur de recette.
              Une approche artisanale, pédagogique et ouverte à tous les curieux de cosmétique naturelle.
            </p>
            <a href="/lab" className="cta-button">Explorer le Lab</a>
          </div>
          <div className="image">
            <img src={labImage} alt="Illustration laboratoire Dermès" />
          </div>
        </div>
      </section>

      <section className="boutique-preview carte-section inverse">
        <div className="split-section inverse">
          <div className="image">
            <img src={boutiqueImage} alt="Présentation produits boutique Dermès" />
          </div>
          <div className="text">
            <h2>La Boutique</h2>
            <p>Découvrez nos créations uniques, élaborées à la main en séries limitées dans notre atelier provençal.</p>
            <a href="/boutique" className="cta-button">Voir les produits</a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Accueil;
