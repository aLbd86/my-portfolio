"use client";

import Image from "next/image";
import { ButtonS } from "@/components/button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col flex-center gap-3 lg:ml-20 p-4 lg:min-h-screen overflow-hidden">
        {/* Bloc - info/cta */}
        <div className="flex flex-col md:flex-row flex-center gap-4">
          {/* Bloc - Title */}
          <div className="w-full flex flex-col p-3 lg:gap-6 lg:h-[37.5rem] lg:w-[62.5rem] rounded-lg border-4 border-black ">
            <h1 className="text-5xl lg:text-7xl text-[--color-dark] font-black lg:pt-10 lg:pl-20">
              Alexandre Laborde
            </h1>
            <p className="text-md pt-0 lg:px-20 font-light text-[--color-dark]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur labore
              harum explicabo sed, ratione, debitis voluptates nihil possimus aut molestias ducimus
              blanditiis magni voluptatibus reprehenderit laboriosam fugit obcaecati quas?
            </p>
            <ButtonS>Contactez-moi</ButtonS>
          </div>
          {/* Bloc - slider */}
          <div className="flex h-60 md:h-[37.5rem] md:w-[25rem] bg-white rounded-lg"></div>
        </div>
        <div className="flex gap-4 p-3 bg-white rounded-lg">
          <ButtonS link="/about" target="_blank">
            En Savoir Plus
          </ButtonS>
        </div>
      </div>
    </>
  );
}
