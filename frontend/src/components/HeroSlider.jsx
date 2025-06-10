import React, { useEffect, useState } from "react";
import "../styles/layout.scss";
import savonLavande from "@assets/images/savon1.webp";
import savonMiel from "@assets/images/savon2.webp";
import savonMenthe from "@assets/images/savon3.webp";


const slides = [
  {
    texte: "La douceur de la lavande.",
    image: savonLavande
  },
  {
    texte: "Le calme dans chaque savon.",
    image: savonMiel
  },
  {
    texte: "L’équilibre par la nature.",
    image: savonMenthe
  }
];


const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider" style={{ backgroundImage: `url(${slides[index].image})` }}>
      <div className="slider-overlay">
        <h1>{slides[index].texte}</h1>
      </div>
      <div className="slider-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
