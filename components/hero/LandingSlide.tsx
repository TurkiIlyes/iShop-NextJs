import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LandingSlide = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="flex h-full py-9 px-10 ">
      <div className=" h-full w-1/2 text-grayscale-200 ">
        <div className="flex flex-col justify-between pb-20  h-full">
          <span className=" text-base">{title}</span>
          <h2 className="text-[36px] sm:text-[48px] font-medium leading-thin">
            {description}
          </h2>
        </div>
      </div>
      <div className=" flex justify-end items-center w-1/2 relative ">
        <Image
          src={img}
          width={220}
          height={220}
          objectFit="cover"
          alt="landingSwiper1"
          className=""
        />
      </div>
      <button className=" flex items-center gap-4 absolute left-10 bottom-12 text-white border-b-2 border-white  py-2 z-10">
        <span className="  text-base">Buy Now</span>
        <FontAwesomeIcon icon={faArrowRight} className=" w-5 h-5 " />
      </button>
    </div>
  );
};

export default LandingSlide;
