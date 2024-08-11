import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const LandingSlide = ({
  title,
  brandIcon,
  brandName,
  description,
  img,
}: {
  title: string;
  brandIcon: IconProp;
  brandName: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="flex h-full py-6 px-10 ">
      <div className=" w-2/3 text-grayscale-200 flex flex-col gap-4 sm:gap-6 ">
        <span className=" text-base">{title}</span>
        <div className=" flex items-center gap-2 ">
          <FontAwesomeIcon
            icon={brandIcon}
            className=" w-6 h-6 sm:w-14 sm:h-14 "
          />
          <span className=" text-xs sm:text-lg font-medium ">{brandName}</span>
        </div>
        <h2 className="text-2xl sm:text-5xl leading-normal sm:leading-normal font-medium">
          {description}
        </h2>
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
      <Link
        href="/products"
        className=" group flex items-center gap-4 absolute left-10 bottom-9 py-2.5 text-white transition-all duration-500 linear hover:text-primary z-10"
      >
        <span className=" text-base font-medium ">Shop Now</span>
        <CircleArrowRight className=" w-5 h-5 " />
        <hr className=" absolute left-0 -bottom-2 w-1/3 border-2 border-white transition-all duration-500 linear group-hover:w-full group-hover:border-primary " />
      </Link>
    </div>
  );
};

export default LandingSlide;
