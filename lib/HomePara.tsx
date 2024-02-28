import React from "react";

export const HomePara = () => {
  return (
    <>
      <div className="mockup-code mockup-window bg-neutral border-primary basis-4/5 items-center border-4 ">
        <div className="flex flex-col items-end gap-4 py-6 font-medium">
          {/* espace - musique */}
          <div className="flex flex-col lg:flex-row ">
            <a href="/music" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@musique</code>
              </pre>
            </a>
            <pre
              data-prefix=""
              className="animate-typingP hidden overflow-hidden whitespace-nowrap md:block"
            >
              <code>
                Ici, une phrase pas trop longue va devroir être créée.
              </code>
            </pre>
          </div>
          {/* esoace - dev web */}
          <div className="flex flex-col lg:flex-row ">
            <a href="/devweb" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@developpement</code>
              </pre>
            </a>
            <pre
              data-prefix=""
              className="animate-typingP hidden overflow-hidden whitespace-nowrap md:block"
            >
              <code className="">
                Ici, une phrase pas trop longue va devroir être créée.
              </code>
            </pre>
          </div>
          {/* espace - qui suis-je */}
          <div className="flex flex-col lg:flex-row">
            <a href="/" className="hover:text-primary">
              <pre data-prefix="$">
                <code>espace@qui-suis-je</code>
              </pre>
            </a>
            <pre
              data-prefix=""
              className="animate-typingP hidden overflow-hidden whitespace-nowrap md:block"
            >
              <code>
                Ici, une phrase pas trop longue va devroir être créée.
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
