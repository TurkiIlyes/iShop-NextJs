import Image from "next/image";

const AuthSlide = ({ img }: { img: string }) => {
  return (
    <div className=" flex w-full h-full relative bg-customRed-900 ">
      <Image
        src={img}
        width={800}
        height={800}
        objectFit="cover"
        alt="landingSwiper1"
        className=" w-full h-full  drop-shadow-customRed"
      />
    </div>
  );
};

export default AuthSlide;
