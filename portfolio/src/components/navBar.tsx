"use client";
import React from "react";
import { useSpring, animated } from "react-spring";

interface NavBarProps {
  toggle: () => void;
  textVisible: () => void;
  contactVisible: () => void;
  infoVisible: () => void;
  projectVisible: () => void;
}

export const NavBar = ({
  toggle,
  textVisible,
  contactVisible,
  infoVisible,
  projectVisible,
}: NavBarProps) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  });

  const buttons = [
    { name: "Accueil", color: "yellow", action: textVisible },
    { name: "Info", color: "green", action: infoVisible },
    { name: "CV", color: "blue", action: toggle },
    { name: "Projet", color: "pink", action: projectVisible },
    { name: "Contact", color: "purple", action: contactVisible },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 inline-flex">
      <ul className="flex  flex-wrap justify-center gap-5 items-center mt-5">
        {buttons.map((button, index) => (
          <animated.li key={index} style={props}>
            <button
              className={`text-lg lg:text-xl text-${button.color}-500 hover:text-${button.color}-700 transition-colors duration-300 border p-5 animate-bounce`}
              onClick={button.action}
            >
              {button.name}
            </button>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
}