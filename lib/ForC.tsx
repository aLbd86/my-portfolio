import Image from "next/image";
import empty from "@/public/images/notes/empty.svg";
import c1 from "@/public/images/notes/c1.svg";
import g5 from "@/public/images/notes/g5.svg";
import a6 from "@/public/images/notes/a6.svg";
import f4 from "@/public/images/notes/f4.svg";

export default function ForC() {
  // Logique
  // Si une lettre est fondamentale, les autres sont le résultat d'une addition ou soustraction avec lettre
  // Les ronds sont des objects, possédant des attributs color et letter

  return (
    <>
      {/* SECTION PROJET  */}
      <div className="p-3 ml-20 flex flex-col gap-2 rounded-lg">
        {/* Hero - Title */}
        <div className="flex h-40 w-full border-4 border-neutral rounded-lg "></div>

        {/* Container DOWN */}

        <div className="flex gap-2">
          {/* Left Hand Container */}
          <div className="py-10 w-full flex basic-1/2 ">
            <div className="py-10 gap-5 w-full flex flex-col justify-center items-center // border-4 border-neutral rounded-lg ">
              {/* Range 2 - UP */}
              <div className="ml-40 flex">
                {/* Notes */}

                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={a6} alt="svg emty " />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={empty} alt="note empty" />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={empty} alt="svg emty " />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={empty} alt="svg emty " />
                </div>
              </div>
              {/* Range 1 - DOWN */}
              <div className="flex">
                {/* Notes */}

                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={f4} alt="svg emty " />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={c1} alt="svg emty " />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={g5} alt="svg emty " />
                </div>
                <div className="p-2 rounded-full border-3 border-neutral">
                  <Image src={empty} alt="svg emty " />
                </div>
              </div>
            </div>
          </div>
          {/* Text Container */}
          <div className="w-full flex basic-1/2">
            <div className="w-full flex flex-col justify-center items-center // border-4 border-neutral rounded-lg "></div>
          </div>
        </div>
      </div>
    </>
  );
}
