import Image from "next/image";
import empty from "@/public/images/notes/empty.svg";

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
          <Image src={empty} alt="note empty" />
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
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
        <div className="border-3 border-neutral rounded-full p-2">
          <Image src={empty} alt="svg emty " />
        </div>
      </div>
    </>
  );
}
