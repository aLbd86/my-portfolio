"use client";
import { SetStateAction, useState } from "react";
import DegresEmpty from "@/components/DegresEmpty";
import DegresCollapse from "@/components/DegresCollapse";
import ForG from "@/components/ForG";
import ForC from "@/components/ForC";
import ForD from "@/components/ForD";

const DegresGame = () => {
  const DEGRES_G = 1;
  const DEGRES_C = 2;
  const DEGRES_D = 3;

  const [selectedDegresGroup, setSelectedDegresGroup] = useState<number | null>(null);

  // La fonction handleDegresClick accepte un nombre comme argument
  const handleDegresClick = (degre: number) => {
    setSelectedDegresGroup(degre);
  };
  const renderSelectedDegres = () => {
    if (selectedDegresGroup === null) {
      return <DegresEmpty />;
    }
    switch (selectedDegresGroup) {
      case DEGRES_G:
        return <ForG />;
      case DEGRES_C:
        return <ForC />;
      case DEGRES_D:
        return <ForD />;
      default:
        return <DegresEmpty />;
    }
  };

  return (
    <>
      <main className="p-3 ml-20 flex flex-col gap-2 rounded-lg justify-center">
        <div className="flex justify-start items-center h-screen">
          <div className="w-full flex flex-col basis-1/2 ">{renderSelectedDegres()}</div>
          <div className="p-8 flex flex-col justify-center gap-4 basis-1/2">
            <DegresCollapse
              deg1="G"
              deg4="C"
              deg5="D"
              deg6="E"
              onClick={() => handleDegresClick(DEGRES_G)}
            />
            <DegresCollapse
              deg1="C"
              deg4="F"
              deg5="G"
              deg6="A"
              onClick={() => handleDegresClick(DEGRES_C)}
            />
            <DegresCollapse
              deg1="D"
              deg4="G"
              deg5="A"
              deg6="B"
              onClick={() => handleDegresClick(DEGRES_D)}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default DegresGame;
