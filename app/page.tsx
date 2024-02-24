import { ButtonS } from "@/lib/Button";
import { Title } from "@/lib/Title";
import Slogan from "../components/Slogan";
import SwiperHome from "../components/SwiperHome";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col gap-3 md:ml-20  p-4  overflow-hidden">
        {/* Bloc - info */}
        <div className=" flex flex-col md:flex-row gap-4">
          {/* Bloc - Title */}
          <div className="flex items-end xl:items-start justify-center flex-col gap-4 rounded-lg border-4 border-neutral // md:basis-2/3 lg:basis-3/4 2xl:basis-4/5 // px-4 md:px-4 lg:px-8 xl:px-8  2xl:px-8 py-8 md:py-0  ">
            {/* Title - texte */}
            <div className="flex flex-col justify-center gap-8">
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
          <div className="w-[50%] md:w-0 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5 flex justify-center items-center  bg-white rounded-lg // ">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className=" flex border-4 border-neutral rounded-lg bg-origin-border">
          <Slogan />
        </div>
      </div>
    </>
  );
}
