"use client";
import Canvas from "@/components/fond";
import React, { useState } from "react";
import { NavBar } from "@/components/navBar";
import { Pdf } from "@/components/pdf";
import TextAnimation from "@/components/text";
import { ContactUs } from "@/components/contact";
import { Info } from "@/components/info";
import { Projet } from "@/components/Projet";

const components = {
  text: <TextAnimation />,
  info: <Info />,
  pdf: <Pdf />,
  project: <Projet />,
  contact: <ContactUs />,
};

export default function Home() {
  const [visibleComponent, setVisibleComponent] = useState('text');

  return (
    <div className="flex justify-center items-center">
      <Canvas />
      <div style={width} className="absolute text-justify">
        <NavBar
          toggle={() => setVisibleComponent('pdf')}
          textVisible={() => setVisibleComponent('text')}
          contactVisible={() => setVisibleComponent('contact')}
          infoVisible={() => setVisibleComponent('info')}
          projectVisible={() => setVisibleComponent('project')}
        />
        <div className="fixed top-0">
        </div>
        {components[visibleComponent as keyof typeof components]}
      </div>
    </div>
  );
}

const width = {
  width: "80%",
};