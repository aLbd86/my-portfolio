"use client";
import { useState } from "react";
import DegresEmpty from "@/components/DegresEmpty";
import DegresCollapse from "@/components/DegresCollapse";
import ForG from "@/components/ForG";
import ForC from "@/components/ForC";
import ForD from "@/components/ForD";

const DegresGame = () => {
  const [selectedDegresGroup, setSelectedDegresGroup] = useState(null); // Initialisation avec null

  const handleDegresClick = () => {
    // Assurez-vous que le paramètre est toujours une chaîne de caractères
  };

  const renderSelectedDegres = () => {
    if (selectedDegresGroup === null) {
      return <DegresEmpty />;
    }
    switch (selectedDegresGroup) {
      case "G":
        return <ForG />;
      case "C":
        return <ForC />;
      case "D":
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
            <DegresCollapse deg1="G" deg4="C" deg5="D" deg6="E" />
            <DegresCollapse deg1="C" deg4="F" deg5="G" deg6="A" />
            <DegresCollapse deg1="D" deg4="G" deg5="A" deg6="B" />
          </div>
        </div>
      </main>
    </>
  );
};

export default DegresGame;
