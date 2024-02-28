import { Title } from "@/lib/Title";
import SwiperHome from "../components/SwiperHome";
import { HomePara } from "@/lib/HomePara";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className=" flex flex-col justify-center gap-4 p-4 md:ml-20 lg:h-screen">
        {/* Bloc - info */}
        <div className=" flex flex-col gap-3 md:flex-row">
          {/* Bloc - Title */}
          <div className="border-neutral // // flex flex-col justify-center gap-4 rounded-lg border-4 px-4 py-6 md:basis-2/3 md:px-4 md:py-0 lg:basis-3/4 lg:px-8  xl:items-end  xl:px-8 2xl:basis-4/5 2xl:px-8  ">
            {/* SubTitle */}
            <h4 className="flex text-lg">Artiste multi-disciplinaire</h4>

            {/* Title - texte */}
            <div className="flex flex-col justify-center gap-4 ">
              <Title />
              <p className="text-neutral text-lg font-light xl:text-2xl">
                Bienvenue dans mon espace de croissance et
                <span className="from-primary to-secondary inline-block bg-gradient-to-r bg-clip-text pl-3 text-xl font-bold text-transparent xl:text-4xl">
                  d’innovation
                </span>
                .
              </p>
            </div>
          </div>
          {/* Bloc - slider */}
          <div className="// flex w-[100%] items-center justify-center rounded-lg md:w-0 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5 ">
            <SwiperHome></SwiperHome>
          </div>
        </div>
        <div className="py-6 md:py-10">
          <HomePara />
        </div>
        <div className="hidden">
          <h2>Espace musique</h2>
          <p>
            Découvrez en avant-première des pièces inédites mais aussi des
            interprétations originales enregistrées en studio mais aussi aussi
            en direct.
          </p>
        </div>
      </div>
    </>
  );
}
