"use client";
import Canvas from "@/components/fond";
import React, { useState } from "react";
import { NavBar } from "@/components/navBar";
import { Pdf } from "@/components/pdf";
import TextAnimation from "@/components/text";
import { ContactUs } from "@/components/contact";
import { Info } from "@/components/info";
import { Projet } from "@/components/Projet";

export default function Home() {
  const [textVisible, setTextVisible] = useState(true);
  const [infoVisible, setInfoVisible] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const toggleVisible = () => {
    setTextVisible(true);
    setInfoVisible(false);
    setPdfVisible(false);
    setProjectVisible(false);
    setContactVisible(false);
  };

  const toggleInfoVisible = () => {
    setTextVisible(false);
    setInfoVisible(true);
    setPdfVisible(false);
    setProjectVisible(false);
    setContactVisible(false);
  };

  const togglePDF = () => {
    setTextVisible(false);
    setInfoVisible(false);
    setPdfVisible(true);
    setProjectVisible(false);
    setContactVisible(false);
  };

  const toggleProjectVisible = () => {
    setTextVisible(false);
    setInfoVisible(false);
    setPdfVisible(false);
    setProjectVisible(true);
    setContactVisible(false);
  };

  const toggleContactVisible = () => {
    setTextVisible(false);
    setInfoVisible(false);
    setPdfVisible(false);
    setProjectVisible(false);
    setContactVisible(true);
  };

  return (
    <div className="flex justify-center items-center">
      <Canvas />
      <div style={width} className="absolute text-justify">
        <div className="fixed top-0">
          <NavBar
            toggle={togglePDF}
            textVisible={toggleVisible}
            contactVisible={toggleContactVisible}
            infoVisible={toggleInfoVisible}
            projectVisible={toggleProjectVisible}
          />
        </div>
        <div> {textVisible && <TextAnimation />} </div>
        <div> {infoVisible && <Info />} </div>
        <div> {pdfVisible && <Pdf />} </div>
        <div> {projectVisible && <Projet />} </div>
        <div> {contactVisible && <ContactUs />} </div>
      </div>
    </div>
  );
}

const width = {
  width: "40%",
};
