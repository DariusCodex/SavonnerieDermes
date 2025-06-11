// /components/lab/AnalyseTechnique.jsx
import React from "react";
import PropTypes from "prop-types";

const AnalyseTechnique = ({ profil, indices }) => {
  return (
    <div className="carte-module">
      <h3>Analyse technique</h3>
      {/* Affichage profil acides gras, indices SLI/SIF, alertes */}
    </div>
  );
};

AnalyseTechnique.propTypes = {
  profil: PropTypes.object,
  indices: PropTypes.object
};

export default AnalyseTechnique;


