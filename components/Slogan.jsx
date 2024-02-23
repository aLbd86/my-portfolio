"use client";

export default function Slogan() {
  return (
    <>
      <div className="flex pt-0 items-center justify-center overflow-hidden rounded-lg">
        {" "}
        <span
          // style={{ animationPlayState: "paused" }}
          className="pt-16 whitespace-nowrap animate-slideToLeft flex text-neutral text-[5em] font-bold ">
          Une solution peut en cacher une autre
        </span>
        <span
          // style={{ animationPlayState: "paused" }}
          className="uppercase whitespace-nowrap animate-slideToRight text-neutral opacity-15 flex text-[10em] font-black blur-sm">
          Une solution peut en cacher une autre
        </span>
      </div>
    </>
  );
}

// style={{ animationPlayState: "paused" }}
