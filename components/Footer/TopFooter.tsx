import SectionOne from "./subcomponents/SectionOne";
import SectionTwo from "./subcomponents/SectionTwo";
import SectionThree from "./subcomponents/SectionThree";

const TopFooter = () => {
  return (
    <div className=" bg-darkGrey-900">
      <div className="container ">
        <div className=" flex flex-wrap min-h-[400px] py-16 gap-y-4 max-lg:gap-x-3">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
