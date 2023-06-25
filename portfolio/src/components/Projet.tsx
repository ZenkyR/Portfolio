import React, { useState } from 'react';

export const Projet = () => {
  const [spotifyActive, setSpotifyActive] = useState(false);
  const [puissance4Active, setPuissance4Active] = useState(false);

  const toggleSpotify = () => {
    setSpotifyActive(!spotifyActive);
  };

  const togglePuissance4 = () => {
    setPuissance4Active(!puissance4Active);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projets</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Spotify</h2>
            <img
              src="/assets/spotify/accueil_spotify.png"
              alt="Spotify"
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={toggleSpotify}
            />
            {spotifyActive && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="max-w-md p-4 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Explication du projet Spotify</h2>
                  <p className="mb-4">Sur ce projet, notre objectif était de reproduire Spotify en utilisant React en seulement deux jours. Nous devions implémenter les fonctionnalités suivantes :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>pagination</li>
                    <li>recherche par genre</li>
                    <li>recherche par artiste</li>
                    <li>recherche par album</li>
                    <li>recherche par titre</li>
                    <li>requete API</li>
                    <li>utilisation de docker</li>
                  </ul>
                  <img
                    src="/assets/spotify/accueil_spotify.png"
                    alt="Spotify"
                    className="w-full h-auto rounded-lg mt-4"
                  />
                  <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={toggleSpotify}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Puissance 4</h2>
            <img
              src="/assets/puissance4/home.png"
              alt="Puissance 4"
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={togglePuissance4}
            />
            {puissance4Active && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="max-w-md p-4 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Explication du projet Puissance 4</h2>
                  <p className="mb-4">Sur ce projet, notre objectif était de reproduire le jeu Puissance 4 en utilisant Javascript. Nous devions implémenter les fonctionnalités suivantes :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>choix du nom des joueurs</li>
                    <li>choix de la couleur des jetons</li>
                    <li>jeu contre un autre joueur</li>
                    <li>possibilité de rejouer une partie</li>
                    <li>affichage du gagnant</li>
                    <li>affichage du nombre de victoires</li>
                  </ul>

                  <img
                    src="/assets/puissance4/home.png"
                    alt="Puissance 4"
                    className="w-full h-auto rounded-lg mt-4"
                  />
                  <button
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={togglePuissance4}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
