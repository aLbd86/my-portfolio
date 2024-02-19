import Image from "next/image";
import { ButtonS } from "@/components/button";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col flex-center  gap-3 ml-20 p-3 min-h-screen bg-base-200 overflow-hidden">
        <div className="flex flex-center gap-4 bg-base-200">
          <div className="flex flex-col gap-6 h-[37.5rem] w-[62.5rem] bg-white rounded-lg ">
            <h1 className="text-7xl font-black pt-10 pl-20">Alexandre Laborde</h1>
            <p className="pt-0 px-20 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur labore
              harum explicabo sed, ratione, debitis voluptates nihil possimus aut molestias ducimus
              blanditiis magni voluptatibus reprehenderit laboriosam fugit obcaecati quas?
            </p>
          </div>
          <div className="flex h-[37.5rem] w-[25rem] bg-white rounded-lg"></div>
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
