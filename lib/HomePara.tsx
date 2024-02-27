import React from "react";

export const HomePara = () => {
  return (
    <>
      <div className="mockup-code mockup-window bg-neutral border-4 border-primary basis-4/5 flex items-center ">
        <div className="flex flex-col gap-4 items-end font-medium p-10">
          {/* espace - musique */}
          <div className="flex ">
            <a href="/music" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@musique</code>
              </pre>
            </a>
            <pre data-prefix="">
              <code>Ici, une phrase pas trop longue va devroir être créée.</code>
            </pre>
          </div>
          {/* esoace - dev web */}
          <div className="flex ">
            <a href="/devweb" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@developpement</code>
              </pre>
            </a>
            <pre data-prefix="">
              <code>Ici, une phrase pas trop longue va devroir être créée.</code>
            </pre>
          </div>
          {/* espace - qui suis-je */}
          <div className="flex ">
            <a href="/" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@qui-suis-je</code>
              </pre>
            </a>
            <pre data-prefix="">
              <code>Ici, une phrase pas trop longue va devroir être créée.</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
