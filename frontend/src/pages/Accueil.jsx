import React from "react";
import HeroSlider from "@components/HeroSlider";
import SectionLabBoutique from "@components/SectionLabBoutique";
import labImage from "@assets/images/labthumbnail.webp";
import boutiqueImage from "@assets/images/Boutiquethumb.webp";
import "../styles/layout.scss";

const Accueil = () => {
  return (
    <>
      <HeroSlider />

      <section className="presentation">
        <h2>Notre Vision</h2>
        <p>
          Chez Dermès, chaque savon est une œuvre d’art formulée dans le respect
          des matières et du vivant. Découvrez notre univers où l’authenticité
          rencontre l’innovation.
        </p>
      </section>

      <SectionLabBoutique
        id="lab"
        titre="Le Lab"
        texte="Formulez vos propres savons avec notre calculateur artisanal. Une approche pédagogique, ouverte à tous les curieux de cosmétique naturelle."
        image={labImage}
        lien="/lab"
        cta="Explorer le Lab"
        inverse={true}
      />

      <SectionLabBoutique
        id="boutique"
        titre="La Boutique"
        texte="Découvrez nos créations uniques, élaborées à la main en séries limitées dans notre atelier provençal."
        image={boutiqueImage}
        lien="/boutique"
        cta="Voir les produits"
        inverse={false}
      />
    </>
  );
};

export default Accueil;
