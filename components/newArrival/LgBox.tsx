import Image from "next/image";

const LgBox = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="flex justify-end items-end relative bg-darkGrey-900 rounded-sm">
      <div className=" py-1 max-w-[260px] absolute left-6 bottom-14 z-10 text-grayscale-200 ">
        <div className="flex flex-col  h-full">
          <h2 className="text-2xl font-medium ">{title}</h2>
          <p className=" text-xs py-2 leading-normal">{description}</p>
        </div>
      </div>

      <div className="  relative ">
        <Image
          src={img}
          width={410}
          height={410}
          objectFit="cover"
          alt="landingSwiper1"
          className=" max-sm:w-[270px]"
        />
      </div>

      <button className=" absolute left-7 bottom-4 text-white border-b-2 border-white text-base  py-2 z-10">
        Buy Now
      </button>
    </div>
  );
};

export default LgBox;
