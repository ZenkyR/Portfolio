"use client";

import React from "react";

interface NavBarProps {
  toggle: () => void;
  pdfVisible: boolean;
  textVisible: boolean;
}

export const NavBar = ({ toggle, pdfVisible, textVisible }: NavBarProps) => {
  return (
    <>
      <nav>
        <ul style={btn} className="flex">
          <li style={a}> <button onClick={toggle}>Accueil</button></li>
          <li style={a}> <button onClick={toggle}>Info</button></li>
          <li style={a}> <button onClick={toggle}>CV</button></li>
          <li style={a}> <button onClick={toggle}>Projet</button></li>
          <li style={a}> <button onClick={toggle}>Contact</button></li>
        </ul>
      </nav>
    </>
  );
};

const btn = {
  fontSize: "1.8rem",
  margin: "1rem",
  gap: "20px",
};

const a = {
  border: "1px dotted black",
  borderRadius: "10px",
  padding: "20px",
};
