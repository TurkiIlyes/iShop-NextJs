import React from "react";
import SectionHeader from "../../Common/SectionHeader";
import SmBox from "./subcomponents/SmBox";
import LgBox from "./subcomponents/LgBox";
import XlBox from "./subcomponents/XlBox";

const NewArrival = () => {
  return (
    <div className=" container ">
      <SectionHeader title="Featured" description="New Arrival" />

      <div className="grid grid-cols-1 lg:grid-cols-[3fr,4fr] gap-7  ">
        <XlBox
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          img="/imgs/plays.png"
        />

        <div className=" grid grid-cols-1 lg:grid-rows-2 gap-7">
          <LgBox
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
            img="/imgs/women.png"
          />

          <div className="  grid grid-cols-1 sm:grid-cols-2  gap-7">
            <SmBox
              title="Speakers"
              description="Amazon wireless speakers"
              img="/imgs/speakers.png"
            />
            <SmBox
              title="Perfume"
              description="GUCCI INTENSE OUD EDP"
              img="/imgs/perfume.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
