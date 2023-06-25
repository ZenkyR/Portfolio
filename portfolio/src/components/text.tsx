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
    <animated.div style={styles} className="text-center">
     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Developpeur full-stack en recherche d&apos;une alternance
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-3  text-justify">
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

export default TextAnimation;
