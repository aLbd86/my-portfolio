import ForC from "@/components/ForC";

export default function page() {
  return (
    <>
      {/* SECTION - MAIN */}
      <main className="p-3 ml-20 flex flex-col gap-2 rounded-lg justify-center">
        <div className="flex border-4 justify-center items-center border-neutral rounded-lg py-4">
          <h1 className="flex text-5xl text-neutral font-bold ">L&apos;accordéon</h1>
        </div>

        <div className="flex justify-start items-center h-screen">
          <div className="w-full flex flex-col basis-1/2 ">
            <ForC />
          </div>
          <div className="p-8 flex flex-col justify-center gap-4 // border-4 border-neutral rounded-lg basis-1/2 // ">
            <h4 className="flex text-xl font-semibold">Tout est dans la main gauche!</h4>
            <p className="flex">
              Prenons comme exemple les 4 accords que tous les guitaristes apprennent dès leur
              premiers grattements de cordes.
            </p>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title text-xl font-medium">Si DO est la fondamentale</div>
              <div className="collapse-content text-neutral">
                <p>Voici les changements</p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Si RÉ est la fondamentale</div>
              <div className="collapse-content">
                <p></p>
              </div>
            </div>
            <div className="collapse bg-base-200">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Si LA est la fondamentale</div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
