import Image from "next/image";

const AuthSlide = ({ img }: { img: string }) => {
  return (
    <div className=" flex w-full h-full relative ">
      <Image
        src={img}
        width={800}
        height={800}
        objectFit="cover"
        alt="landingSwiper1"
        className="w-full aspect-[2/3] rounded-xl"
      />
    </div>
  );
};

export default AuthSlide;
