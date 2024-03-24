import React, { useState } from 'react';
import Image from 'next/image';

const Project = ({ title, image, description, features, toggleActive, isActive }: {
  title: string;
  image: string;
  description: string;
  features: string[];
  toggleActive: () => void;
  isActive: boolean;
}) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold">{title}</h2>
    <Image
      src={image}
      alt={title}
      className="w-full h-auto rounded-lg cursor-pointer"
      onClick={toggleActive}
      width={500}
      height={500}
    />
    {isActive && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="max-w-md p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{`Explication du projet ${title}`}</h2>
          <p className="mb-4">{description}</p>
          <ul className="list-disc list-inside mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Image
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg mt-4"
            width={500}
            height={500}
          />
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={toggleActive}
          >
            Fermer
          </button>
        </div>
      </div>
    )}
  </div>
);

export const Projet = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const projects = [
    {
      title: 'Spotify',
      image: '/assets/spotify/accueil_spotify.png',
      description: 'Sur ce projet, notre objectif était de reproduire Spotify en utilisant React en seulement deux jours. Nous devions implémenter les fonctionnalités suivantes :',
      features: ['pagination', 'recherche par genre', 'recherche par artiste', 'recherche par album', 'recherche par titre', 'requete API', 'utilisation de docker'],
    },
    {
      title: 'Puissance 4',
      image: '/assets/puissance4/home.png',
      description: 'Sur ce projet, notre objectif était de reproduire le jeu Puissance 4 en utilisant Javascript. Nous devions implémenter les fonctionnalités suivantes :',
      features: ['choix du nom des joueurs', 'choix de la couleur des jetons', 'jeu contre un autre joueur', 'possibilité de rejouer une partie', 'affichage du gagnant', 'affichage du nombre de victoires'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projets</h1>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            {...project}
            isActive={activeProject === project.title}
            toggleActive={() => setActiveProject(activeProject === project.title ? null : project.title)}
          />
        ))}
      </div>
    </div>
  );
};