import React, { useState } from "react";
import { ButtonS } from "@/lib/Button";

// Supposons que vous ayez un tableau d'objets représentant vos chansons
// avec un id, un titre et le chemin du fichier source.
const songList = [
  { id: 1, title: "Ave Maria", src: "/audio/ave-maria.mp3" },
  { id: 2, title: "Intro de spectacle", src: "/audio/intro-spectacle.mp3" },
  { id: 3, title: "Le Original", src: "/audio/le-original.wav" },
  // Ajoutez autant de chansons que vous le souhaitez
];

const AudioPlayer = () => {
  // État pour suivre la chanson actuellement jouée
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Fonction pour jouer la chanson suivante
  const playNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songList.length);
  };

  // Fonction pour jouer la chanson précédente
  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) => {
      if (prevIndex === 0) return songList.length - 1;
      return prevIndex - 1;
    });
  };

  return (
    <>
      <main className="flex flex-col items-center">
        {/* Container */}
        <div className="flex flex-col items-center py-5 ">
          <h3 className="text-xl font-medium">En écoute</h3>
          <div className="">{songList[currentSongIndex].title}</div>
        </div>
        <div className=" flex flex-col justify-center items-center border-4 border-neutral rounded-lg py-4">
          <audio className="flex w-42" controls src={songList[currentSongIndex].src}>
            Votre navigateur ne prend pas en charge ce lecteur.
          </audio>
          <div className="flex gap-4">
            <ButtonS onClick={playPrevious}>Précédent</ButtonS>
            <ButtonS onClick={playNext}>Suivant</ButtonS>
          </div>
        </div>
      </main>
    </>
  );
};

export default AudioPlayer;
