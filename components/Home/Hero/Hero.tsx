import LandingSwiper from "../../Swipers/LandingSwiper/LandingSwiper";
import CategorySideBar from "@/components/SideBar/CategorySideBar/CategorySideBar";

const Hero = () => {
  return (
    <div className=" lg:container flex ">
      <div className=" hidden lg:block w-1/5  border-r-[1px] border-grayscale-500 overflow-hidden">
        <CategorySideBar />
      </div>

      <div className=" w-full lg:w-4/5 lg:pt-[50px] lg:pb-[100px] lg:pl-12">
        <LandingSwiper />
      </div>
    </div>
  );
};

export default Hero;
