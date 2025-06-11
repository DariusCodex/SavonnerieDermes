// src/pages/Lab.jsx
import React, { useState } from "react";
import RecetteInfos from "@components/lab/RecetteInfos";
import FormulationParams from "@components/lab/FormulationParams";
import IngredientsSelector from "@components/lab/IngredientsSelector";


const Lab = () => {
  const [recetteInfos, setRecetteInfos] = useState({});
  const [formulationParams, setFormulationParams] = useState({});
  const [ingredients, setIngredients] = useState({});

  return (
    <section className="carte-section">
      <div className="carte-grid">
        <RecetteInfos onChange={setRecetteInfos} data={recetteInfos} />
        <FormulationParams onChange={setFormulationParams} data={formulationParams} />
      </div>
      <IngredientsSelector onChange={setIngredients} data={ingredients} />
    </section>
  );
};




export default Lab;