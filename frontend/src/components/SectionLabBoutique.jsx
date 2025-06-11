import React from "react";
import PropTypes from "prop-types";
import "../styles/layout.scss";

const SectionLabBoutique = ({ id, titre, texte, image, lien, cta, inverse }) => {
    return (
        <section id={id} className={`carte-section ${inverse ? "inverse" : ""}`}>
            <div className={`split-section ${inverse ? "inverse" : ""}`}>
                {inverse ? (
                    <>
                        <div className="image">
                            <img src={image} alt={titre} />
                        </div>
                        <div className="text">
                            <h2>{titre}</h2>
                            <p>{texte}</p>
                            <a href={lien} className="cta-button">{cta}</a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text">
                            <h2>{titre}</h2>
                            <p>{texte}</p>
                            <a href={lien} className="cta-button">{cta}</a>
                        </div>
                        <div className="image">
                            <img src={image} alt={titre} />
                        </div>
                    </>
                )}
            </div>

        </section>
    );
};

SectionLabBoutique.propTypes = {
    id: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    texte: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    inverse: PropTypes.bool
};

export default SectionLabBoutique;
