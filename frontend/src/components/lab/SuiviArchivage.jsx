// /components/lab/SuiviArchivage.jsx
import React from "react";
import PropTypes from "prop-types";

const SuiviArchivage = ({ historique, onExport }) => {
  return (
    <div className="carte-module">
      <h3>Suivi et archivage</h3>
      {/* Export PDF/CSV/JSON, historique de modifs */}
    </div>
  );
};

SuiviArchivage.propTypes = {
  historique: PropTypes.array,
  onExport: PropTypes.func
};

export default SuiviArchivage;