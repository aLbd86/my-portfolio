interface Props {
  deg1: string;
  deg4: string;
  deg5: string;
  deg6: string;
  onClick?: any;
}

export default function DegresCollapse({
  deg1,
  deg4,
  deg5,
  deg6,
  onClick,
}: Props) {
  return (
    <>
      {/* Accordion G*/}
      <div
        className="collapse-arrow bg-base-100 border-neutral collapse border-2 p-3"
        onClick={onClick}
      >
        <input type="radio" name="accordion-1" />
        <div className="collapse-title collapse-arrow text-xl font-medium">
          Si <span className=" text-2xl font-bold text-[#3083DC] ">{deg1}</span>{" "}
          est le 1er degré
        </div>
        <div className="collapse-content text-neutral">
          <div className="flex flex-col  gap-2">
            <div className="flex items-center">
              <p className="flex items-center text-lg">
                Le 3ème degré sera{" "}
                <span className=" pl-4 text-4xl font-bold text-[#36B39C] ">
                  {deg4}
                </span>
              </p>
            </div>
            <p className="flex items-center text-lg">
              Le 5ème degré sera{" "}
              <span className=" pl-4 text-4xl font-bold text-[#FFA400]">
                {deg5}
              </span>
            </p>
            <p className="flex items-center text-lg">
              Le 6ème degré sera{" "}
              <span className=" pl-4 text-4xl font-bold text-[#FF331F]">
                {deg6}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
