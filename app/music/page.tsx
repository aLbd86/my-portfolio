"use client";

import Player from "@/components/Player";

export default function page() {
  return (
    <>
      {/* Main  */}
      <main className="p-3 md:ml-20 flex flex-col gap-4 justify-center ">
        <div className="flex border-4 justify-center items-center border-neutral rounded-lg py-4">
          <h1 className="flex text-3xl text-neutral font-bold ">Espace musical</h1>
        </div>
        {/* Media Player */}
        <div className="flex flex-col md:flex-row py-4 items-center gap-8">
          <div className="flex lg:basis-1/3">
            <Player />
          </div>
          {/* Contenu text */}
          <div className="flex p-4 lg:basis-2/3 border-4 border-neutral rounded-lg">
            <h3 className="flex">Toutes ces pièces musicales ont une histoire</h3>
            <p className=""></p>
          </div>
        </div>
        <div className="border-4 border-neutral rounded-lg">
          <video controls src="./video/fou-bar-720.mp4" className="w-[50%]"></video>
        </div>
      </main>
    </>
  );
}
