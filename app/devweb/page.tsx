import Slogan from "@/components/Slogan";
import { ButtonS } from "@/lib/Button";

export default function DevWeb() {
  return (
    <>
      {/* Main */}
      <main className="flex md:ml-20 p-4 flex-col gap-4">
        <div className="flex border-4 justify-center items-center border-neutral rounded-lg py-4">
          <h1 className="flex text-3xl text-neutral font-bold ">Développement Web</h1>
        </div>
        <div className=" flex border-4 border-neutral rounded-lg bg-origin-border">
          <Slogan />
        </div>
        <div className="flex gap-4">
              <ButtonS link="/devweb/harmonacc">Harmon&apos;Acc</ButtonS>
              <ButtonS link="/devweb/solutions">Cod&apos;Hymmne</ButtonS>
            </div>
      </main>
    </>
  );
}
