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
      <main className="flex w-full flex-col items-center">
        {/* Container */}
        <div className="flex flex-col items-center py-5 ">
          <h3 className="text-2xl font-medium">En écoute</h3>
        </div>
        <div className=" border-neutral flex w-full flex-col items-center justify-center rounded-lg border-4 py-4">
          <div className="">{songList[currentSongIndex].title}</div>
          <audio
            // autoPlay={true}
            className="flex lg:w-full "
            controls
            src={songList[currentSongIndex].src}
          >
            Votre navigateur ne prend pas en charge ce lecteur.
          </audio>
          <div className="flex gap-4">
            <svg
              onClick={playPrevious}
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path d="M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7V416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V214.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96V214.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96V416c0 12.4-7.2 23.7-18.4 29z" />
            </svg>
            <svg
              onClick={playNext}
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="32"
              viewBox="0 0 512 512"
            >
              <path d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z" />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default AudioPlayer;
