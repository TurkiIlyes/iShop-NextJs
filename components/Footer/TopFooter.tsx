import AboutUs from "./subcomponents/AboutUs";
import QuickLinks from "./subcomponents/QuickLinks";
import Apps from "./subcomponents/Apps";
import ContactUs from "./subcomponents/ContactUs";

const TopFooter = () => {
  return (
    <div className=" bg-darkGrey-900">
      <div className="container ">
        <div className=" flex flex-wrap justify-center lg:justify-between gap-y-6 min-h-[400px] py-14">
          <AboutUs />
          <QuickLinks />
          <ContactUs />
          <Apps />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
