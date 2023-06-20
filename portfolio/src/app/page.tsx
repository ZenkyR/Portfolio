"use client";
import Canvas from "@/components/fond";
import React, { useState } from "react";
import { NavBar } from "@/components/navBar";
import { Pdf } from "@/components/pdf";
import TextAnimation from "@/components/text";

export default function Home() {
  const [textVisible, setTextVisible] = useState(true);
  const [pdfVisible, setPdfVisible] = useState(false);

  const togglePDF = () => {
    setPdfVisible(!pdfVisible);
    setTextVisible(!textVisible);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="absolute text-justify">
        <div className="fixed top-0">
          <NavBar
            toggle={togglePDF}
            pdfVisible={pdfVisible}
            textVisible={textVisible}
          />
        </div>
        <div>{textVisible && <TextAnimation />}</div>
        <div>{pdfVisible && <Pdf />}</div>
      </div>
      <Canvas />
    </div>
  );
}
