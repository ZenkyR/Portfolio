import React from "react";
import { useSpring, animated } from "react-spring";

export const Info = () => {
  return (
    <>
      <div className="border">
        <h1 className="text-3xl font-bold mb-2">Kezon Lacheteau</h1>
        <h2 className="text-xl font-semibold mb-4">
          Recherche Alternance Développeur
        </h2>
        <div className="flex gap-20">
          <div>
            <p className="mb-4">age: 20 ans</p>
            <p className="mb-4">ville: Lyon</p>
          </div>

          <div>
            <p className="mb-4">email: kezon.lacheteau@epitech.eu</p>
            <p className="mb-4">téléphone: 06 99 82 91 71</p>
          </div>

          <p className="mb-4">
            <a
              href="https://www.linkedin.com/in/kezon-lacheteau-911656216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
            </a>
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Compétences</h2>

      <div className="flex justify-between border">
        <div>
          <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Travail d&apos;équipe</li>
            <li>Autonomie</li>
            <li>Curiosité</li>
            <li>Adaptabilité</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hard Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Programmation orientée objet</li>
            <li>Base de données</li>
            <li>Algorithmie</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Langages</h3>
          <ul className="list-disc list-inside mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Mysql</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Frameworks</h3>
          <ul className="list-disc list-inside">
            <li>Tailwind</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>React Native</li>
            <li>NestJS</li>
            <li>Laravel</li>
            <li>Symfony</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-10 border">
        <div>
          <h3 className="text-lg font-semibold mb-2">Outils</h3>
          <ul className="list-disc list-inside mb-4 gap-10">
            <li>Visual Studio Code</li>
            <li>GitKraken</li>
            <li>GitHub</li>
            <li>Trello</li>
            <li>Figma</li>
            <li>Discord</li>
            <li>Linux</li>
            <li>Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
          <ul className="list-disc list-inside mb-4 gap-10">
            <li>Jeux vidéos</li>
            <li>Animes/Mangas</li>
            <li>Programmation</li>
          </ul>
        </div>
      </div>
    </>
  );
};
