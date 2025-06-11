// /components/lab/SimulationResultats.jsx
import React from "react";
import PropTypes from "prop-types";

const SimulationResultats = ({ resultats }) => {
  return (
    <div className="carte-module">
      <h3>Simulation du savon fini</h3>
      {/* Dureté, texture, courbe sensorielle, risques */}
    </div>
  );
};

SimulationResultats.propTypes = {
  resultats: PropTypes.object
};

export default SimulationResultats;