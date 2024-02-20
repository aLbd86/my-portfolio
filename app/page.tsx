"use client";

import Image from "next/image";
import { ButtonS } from "@/components/button";
import SwiperHome from "../components/SwiperHome";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col flex-center gap-3 lg:ml-20 p-4 lg:min-h-screen overflow-hidden">
        {/* Bloc - info/cta */}
        <div className="flex flex-col md:flex-row flex-center gap-4">
          {/* Bloc - Title */}
          <div className="w-full flex items-end flex-col px-6 py-8 md:px-10 lg:px-10 gap-10 md:h-[37.5rem] xl:h-[37.5rem] md:w-[80rem] rounded-lg border-4 border-neutral ">
            {/* Bloc - texte */}
            <div className="flex flex-col lg:pt-20 gap-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral font-black">
                Alexandre Laborde
              </h1>
              <p className="text-md font-light text-neutral">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur labore
                harum explicabo sed, ratione, debitis voluptates nihil possimus aut molestias
                ducimus blanditiis magni voluptatibus reprehenderit laboriosam fugit obcaecati quas?
              </p>
            </div>
            {/* bloc button */}
            <div className="flex">
              <ButtonS>Entrez dans mon univers</ButtonS>
            </div>
          </div>
          {/* Bloc - slider */}
          <div className="flex h-60 md:h-[37.5rem] md:w-[25rem] bg-white rounded-lg">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className="flex gap-4 p-16 bg-white rounded-lg"></div>
      </div>
    </>
  );
}
