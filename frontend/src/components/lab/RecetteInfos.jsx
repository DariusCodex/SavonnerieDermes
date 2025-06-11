// /components/lab/RecetteInfos.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "@styles/layout.scss";

const RecetteInfos = ({ onChange, data }) => {
  const [form, setForm] = useState({
    nom: "",
    objectif: "",
    methode: "SAF",
    type: "solide",
    date: new Date().toISOString().slice(0, 10),
    auteur: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    onChange(form);
  }, [form]);

  const validate = () => {
    const newErrors = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est requis.";
    if (!form.auteur.trim()) newErrors.auteur = "L'auteur est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="carte-module carte-lab" style={{ maxWidth: "480px", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
      <h3 className="titre-carte">Informations générales</h3>
      <div className="form-grid">
        <label>
          Nom de la recette *
          <input type="text" name="nom" value={form.nom} onChange={handleChange} />
          {errors.nom && <span className="error">{errors.nom}</span>}
        </label>

        <label>
          Objectif cosmétique
          <input type="text" name="objectif" value={form.objectif} onChange={handleChange} />
        </label>

        <label>
          Méthode de saponification
          <select name="methode" value={form.methode} onChange={handleChange}>
            <option value="SAF">SAF</option>
            <option value="chaudron">Chaudron</option>
            <option value="rebatch">Rebatch</option>
          </select>
        </label>

        <label>
          Type de savon
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="solide">Solide</option>
            <option value="pateux">Pâteux</option>
            <option value="liquide">Liquide</option>
          </select>
        </label>

        <label>
          Date de création
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>

        <label>
          Auteur / Formulateur *
          <input type="text" name="auteur" value={form.auteur} onChange={handleChange} />
          {errors.auteur && <span className="error">{errors.auteur}</span>}
        </label>
      </div>
    </div>
  );
};

RecetteInfos.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default RecetteInfos;
