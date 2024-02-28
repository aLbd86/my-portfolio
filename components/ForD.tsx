import Image from "next/image";
import empty from "@/public/images/notes/empty.svg";
import d1 from "@/public/images/notes/d1.svg";
import a5 from "@/public/images/notes/a5.svg";
import g4 from "@/public/images/notes/g4.svg";
import b6 from "@/public/images/notes/b6.svg";



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
          <Image src={a5} alt="svg emty " />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={empty} alt="note empty" />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={b6} alt="svg emty " />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={empty} alt="svg emty " />
        </div>
      </div>
      {/* Range 1 - DOWN */}
      <div className="ml-14 flex">
        {/* Notes */}

        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={g4} alt="svg emty " />
        </div>
        <div className="p-2 rounded-full border-3 border-neutral">
          <Image src={d1} alt="svg emty " />
        </div>
      </div>
    </>
  );
}
