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

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-10 items-center space-x-6 m-5">
        <animated.li style={props}>
          <button
            className="text-lg lg:text-xl text-yellow-500 hover:text-yellow-700 transition-colors duration-300 border p-5 animate-bounce"
            onClick={textVisible}
          >
            Accueil
          </button>
        </animated.li>
        <animated.li style={props}>
          <button
            className="text-lg lg:text-xl text-green-500 hover:text-green-700 transition-colors duration-300 border p-5 animate-bounce"
            onClick={infoVisible}
          >
            Info
          </button>
        </animated.li>
        <animated.li style={props}>
          <button
            className="text-lg lg:text-xl text-blue-500 hover:text-blue-700 transition-colors duration-300 border p-5 animate-bounce"
            onClick={toggle}
          >
            CV
          </button>
        </animated.li>
        <animated.li style={props}>
          <button
            className="text-lg lg:text-xl text-pink-500 hover:text-pink-700 transition-colors duration-300 border p-5 animate-bounce"
            onClick={projectVisible}
          >
            Projet
          </button>
        </animated.li>
        <animated.li style={props}>
          <button
            className="text-lg lg:text-xl text-purple-500 hover:text-purple-700 transition-colors duration-300 border p-5 animate-bounce"
            onClick={contactVisible}
          >
            Contact
          </button>
        </animated.li>
      </ul>
    </nav>
  );
};
