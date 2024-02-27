"use client";

import { useState, useEffect, useRef } from "react";

export const Title = () => {
  const [showFirstTitle, setShowFirstTitle] = useState(true);
  const firstTitleRef = useRef(null);
  const secondTitleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstTitle((prev) => !prev); // Alterne entre true et false
    }, 4750); // Change l'état toutes les 3 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle quand le composant est démonté
  }, []);

  const handleAnimationEnd = () => {
    // Tu peux ajouter une logique ici si tu veux faire quelque chose à la fin de l'animation
  };

  return (
    <>
      <div className="w-max">
        <h1
        style={{ animationPlayState: "paused" }}
          ref={firstTitleRef}
          onAnimationEnd={handleAnimationEnd}
          className={`animate-typing block overflow-hidden whitespace-nowrap border-r-4 border-r-#F1861D  // text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-neutral font-black ${
            showFirstTitle ? "block" : "hidden"
          }`}>
          Alexandre Laborde
        </h1>
        <h1
        style={{ animationPlayState: "paused" }}
          ref={secondTitleRef}
          onAnimationEnd={handleAnimationEnd}
          className={`animate-typing block overflow-hidden whitespace-nowrap border-r-4 border-r-#F1861D   // text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-neutral font-black ${
            !showFirstTitle ? "block" : "hidden"
          }`}>
          Mon portfolio
        </h1>
      </div>
    </>
  );
};

export default Title;
