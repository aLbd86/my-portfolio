import { ButtonS } from "@/lib/Button";
import { Title } from "@/lib/Title";
import Slogan from "../components/Slogan";
import SwiperHome from "../components/SwiperHome";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col gap-3 ml-20  p-4 h-screen overflow-hidden">
        {/* Bloc - info */}
        <div className=" flex flex-col lg:flex-row gap-4">
          {/* Bloc - Title */}
          <div className="  flex items-end justify-center flex-col gap-4 rounded-lg border-4 border-neutral // basis-1/2 lg:basis-3/4 2xl:basis-4/5 // px-3 md:px-8 lg:px-10 xl:px-16  2xl:px-16  ">
            {/* Title - texte */}
            <div className="flex flex-col justify-center lg:py-4 gap-8 xl:text-end">
              <Title />
              <p className="text-lg xl:text-2xl font-light text-neutral pr-8 xl:pr-0">
                Bienvenue dans mon espace de croissance et
                <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-xl xl:text-4xl">
                  d’innovation
                </span>
                .
              </p>
            </div>
            {/* Title - button */}
            <div className="flex">
              <ButtonS>Entrez dans mon univers</ButtonS>
            </div>
          </div>
          {/* Bloc - slider */}
          <div className="w-0 basis-1/2 lg:basis-1/4 2xl:basis-1/5 flex justify-center items-center  bg-white rounded-lg // ">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className="flex border-4 border-neutral rounded-lg bg-origin-border">
          <Slogan />
        </div>
      </div>
    </>
  );
}
