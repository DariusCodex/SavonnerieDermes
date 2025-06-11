// /components/lab/IngredientsSelector.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "@styles/layout.scss";

const IngredientsSelector = ({ onChange, data }) => {
  const [huiles, setHuiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHuiles = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/huiles");
        const json = await res.json();
        setHuiles(json);
      } catch (err) {
        console.error("Erreur lors du chargement des huiles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHuiles();
  }, []);

  return (
    <div className="carte-large">
      <h3 className="titre-carte">Ingrédients et matières premières</h3>
      {loading ? (
        <p>Chargement des huiles...</p>
      ) : (
        <ul>
          {huiles.map((huile) => (
            <li key={huile.id}>{huile.nom} – {huile.type} ({huile.famille})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

IngredientsSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default IngredientsSelector;
