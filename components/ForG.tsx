import Image from "next/image";
import empty from "@/public/images/notes/empty.svg";
import d5 from "@/public/images/notes/d5.svg";
import e6 from "@/public/images/notes/e6.svg";
import g1 from "@/public/images/notes/g1.svg";
import c4 from "@/public/images/notes/c4.svg";

export default function ForC() {
  // Logique
  // Si une lettre est fondamentale, les autres sont le résultat d'une addition ou soustraction avec lettre
  // Les ronds sont des objects, possédant des attributs color et letter

  return (
    <>
      {/* Range 2 - UP */}
      <div className="mr-12 flex w-full ">
        {/* Notes */}

        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={e6} alt="note empty" />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
      </div>
      {/* Range 1 - DOWN */}
      <div className="ml-12 flex w-full">
        {/* Notes */}

        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={c4} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={g1} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={d5} alt="svg emty " />
        </div>
      </div>
    </>
  );
}
