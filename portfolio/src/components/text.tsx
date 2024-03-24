"use client";
import React, { memo } from "react";
import { useSpring, animated } from "react-spring";

const springConfig = {
  from: { opacity: 0, transform: "scale(0)" },
  to: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(2)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  config: { duration: 1000 },
  delay: 500,
  reset: true,
};
const TextAnimation = () => {
  const styles = useSpring(springConfig);

  return (
    <animated.div style={styles}>
      <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-6">
        Developpeur full-stack Étudiant chez Epitech Lyon et alternant chez
        Avicom
      </h1>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-3 text-justify">
        Actuellement en formation à Epitech, où je me concentre sur le
        développement web et mobile, je suis également alternant chez Avicom,
        une agence de communication digitale. Je suis passionné par le
        développement web et mobile, et je suis toujours à la recherche de
        nouveaux projets à réaliser pour améliorer mes compétences.
      </p>
    </animated.div>
  );
};

export default memo(TextAnimation);