// /components/lab/FormulationParams.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "@styles/layout.scss";

const FormulationParams = ({ onChange, data }) => {
  const [params, setParams] = useState({
    base: "NaOH",
    ratioEau: "38",
    surgras: "5",
    typeSAP: "fixe",
    modeSurgras: "trace"
  });

  useEffect(() => {
    onChange(params);
  }, [params]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="carte-module carte-lab" style={{ maxWidth: "480px", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
      <h3 className="titre-carte">Paramètres de formulation</h3>
      <div className="form-grid">
        <label>
          Base
          <select name="base" value={params.base} onChange={handleChange}>
            <option value="NaOH">NaOH</option>
            <option value="KOH">KOH</option>
            <option value="mix">Mix</option>
          </select>
        </label>

        <label>
          Ratio Eau / Huiles (%)
          <input type="number" name="ratioEau" value={params.ratioEau} onChange={handleChange} />
        </label>

        <label>
          Surgras (%)
          <input type="number" name="surgras" value={params.surgras} onChange={handleChange} />
        </label>

        <label>
          Type de SAP
          <select name="typeSAP" value={params.typeSAP} onChange={handleChange}>
            <option value="fixe">Fixe</option>
            <option value="dynamique">Dynamique</option>
          </select>
        </label>

        <label>
          Mode d’ajout du surgras
          <select name="modeSurgras" value={params.modeSurgras} onChange={handleChange}>
            <option value="trace">À la trace</option>
            <option value="post-cuisson">Post-cuisson</option>
          </select>
        </label>
      </div>
    </div>
  );
};

FormulationParams.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default FormulationParams;
