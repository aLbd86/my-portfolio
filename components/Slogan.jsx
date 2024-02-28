export default function Slogan() {
  return (
    <>
      <div className="flex items-center justify-center overflow-hidden rounded-lg pt-0">
        {" "}
        <span
          // style={{ animationPlayState: "paused" }}
          className="animate-slideToLeft text-neutral flex whitespace-nowrap pt-16 text-[5em] font-bold "
        >
          Une solution peut en cacher une autre
        </span>
        <span
          // style={{ animationPlayState: "paused" }}
          className="animate-slideToRight text-neutral flex whitespace-nowrap text-[10em] font-black uppercase opacity-15 blur-sm"
        >
          Une solution peut en cacher une autre
        </span>
      </div>
    </>
  );
}

// style={{ animationPlayState: "paused" }}
