"use client";
import React from "react";
import { useSpring, animated } from "react-spring";

const TextAnimation = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: [
      { opacity: 1, transform: "scale(1)" },
      { opacity: 0, transform: "scale(2)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    config: { duration: 1000 },
    delay: 500,
    reset: true,
  });

  return (
    <animated.div style={styles}>
      <h1 style={headingStyle}>
        Developpeur full-stack en recherche d&apos;une alternance
      </h1>
      <p style={paragraphStyle}>
        Actuellement en formation à Epitech, où je me consacre à
        l&apos;acquisition de compétences informatiques. À présent, je me lance
        dans une quête passionnante : trouver une opportunité d&apos;alternance
        pour la rentrée de septembre, pour une durée d&apos;un an. Doté
        d&apos;une véritable passion pour la programmation, je suis animé par un
        esprit d&apos;équipe et une soif d&apos;apprendre. Mon objectif est de
        me plonger dans un environnement professionnel stimulant, où je pourrai
        mettre en pratique mes connaissances et continuer à développer mes
        talents au sein d&apos;une équipe dynamique et innovante.
      </p>
    </animated.div>
  );
};

const headingStyle = {
  fontSize: "1.8rem",
  marginBottom: "1rem",
};

const paragraphStyle = {
  fontSize: "1rem",
  maxWidth: "750px",
};

export default TextAnimation;
