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

  const colorClasses = {
    yellow: "text-yellow-500 hover:text-yellow-700",
    green: "text-green-500 hover:text-green-700",
    blue: "text-blue-500 hover:text-blue-700",
    pink: "text-pink-500 hover:text-pink-700",
    purple: "text-purple-500 hover:text-purple-700",
  };

  const buttons = [
    { name: "Accueil", color: colorClasses.yellow, action: textVisible },
    { name: "Info", color: colorClasses.green, action: infoVisible },
    { name: "CV", color: colorClasses.blue, action: toggle },
    { name: "Projet", color: colorClasses.pink, action: projectVisible },
    { name: "Contact", color: colorClasses.purple, action: contactVisible },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 inline-flex">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-5 items-center mt-2 sm:mt-5">
        {buttons.map((button, index) => (
          <animated.li key={index} style={props}>
            <button
              className={`text-sm sm:text-lg lg:text-xl ${button.color} transition-colors duration-300 border p-2 sm:p-5 animate-bounce`}
              onClick={button.action}
            >
              {button.name}
            </button>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
};