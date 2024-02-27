interface Props {
  deg1: string;
  deg4: string;
  deg5: string;
  deg6: string;
  onclick?: null;
}

export default function DegresCollapse({ deg1, deg4, deg5, deg6, onclick }: Props) {
  return (
    <>
      {/* Accordion G*/}
      <div className="collapse collapse-arrow p-3 bg-base-100 border-2 border-neutral">
        <input type="radio" name="accordion-1" />
        <div className="collapse-title collapse-arrow text-xl font-medium">
          Si <span className=" font-bold text-[#3083DC] text-2xl ">{deg1}</span> est le 1er degré
        </div>
        <div className="collapse-content text-neutral">
          <div className="flex flex-col  gap-2">
            <div className="flex items-center">
              <p className="flex items-center text-lg">
                Le 3ème degré sera{" "}
                <span className=" font-bold pl-4 text-4xl text-[#36B39C] ">{deg4}</span>
              </p>
            </div>
            <p className="flex items-center text-lg">
              Le 5ème degré sera{" "}
              <span className=" font-bold pl-4 text-4xl text-[#FFA400]">{deg5}</span>
            </p>
            <p className="flex items-center text-lg">
              Le 6ème degré sera{" "}
              <span className=" font-bold pl-4 text-4xl text-[#FF331F]">{deg6}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
