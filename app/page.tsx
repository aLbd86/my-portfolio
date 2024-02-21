"use client";

import Image from "next/image";
import { ButtonS } from "@/components/button";
import SwiperHome from "../components/SwiperHome";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col flex-center gap-3 lg:ml-20 p-4 overflow-hidden">
        {/* Bloc - info/cta */}
        <div className=" flex flex-col lg:flex-row gap-4">
          {/* Bloc - Title */}
          <div className=" w-0 basis-1/2 lg:basis-2/3 flex items-end justify-center flex-col px-6 py-2 md:px-10 lg:px-10 gap-4 rounded-lg border-4 border-neutral ">
            {/* Bloc - texte */}
            <div className="flex flex-col justify-center lg:py-4 gap-8">
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-#F1861D pr-8 text-7xl text-neutral font-black">
                  Alexandre Laborde
                </h1>
              </div>
              <p className="text-lg font-light text-neutral pr-16">
                Bienvenue dans mon espace de croissance et{" "}
                <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-xl">
                  d’innovation
                </span>
                . <br />
              </p>
            </div>
            {/* bloc button */}
            <div className="flex">
              <ButtonS>Entrez dans mon univers</ButtonS>
            </div>
          </div>
          {/* Bloc - slider */}
          <div className="basis-1/2 lg:basis-1/3 flex justify-center items-center w-0  bg-white rounded-lg">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className="flex p-16 bg-white rounded-lg"></div>
      </div>
    </>
  );
}
