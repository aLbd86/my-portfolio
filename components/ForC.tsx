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
      {/* Range 2 - UP */}
      <div className="ml-28 flex">
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
      <div className="ml-14 flex">
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
    </>
  );
}
