import Image from "next/image";

const SmBox = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className=" group flex justify-end sm:justify-center items-center relative bg-darkGrey-800 rounded-sm max-sm:pr-6 ">
      <div className=" py-1 max-w-[260px] absolute left-6 bottom-14 z-10 text-grayscale-200 ">
        <div className="flex flex-col  h-full">
          <h2 className="text-2xl font-medium ">{title}</h2>
          <p className=" text-xs py-2">{description}</p>
        </div>
      </div>

      <div className="  relative ">
        <Image
          src={img}
          width={190}
          height={190}
          objectFit="cover"
          alt="landingSwiper1"
          className="group-hover:grayscale-0 grayscale max-sm:mt-4 max-sm:mb-2 max-sm:w-[150px]"
        />
      </div>

      <button className=" absolute left-6 bottom-4 text-white border-b-2 border-white text-base  py-2 z-10">
        Buy Now
      </button>
    </div>
  );
};

export default SmBox;
