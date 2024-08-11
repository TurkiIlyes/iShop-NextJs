import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";

// const bgColors = [
//   "bg-customAqua-700",
//   "bg-gradientPrimary-700",
//   "bg-customBlue-700",
//   "bg-gradientAccent-700",
//   "bg-success-700",
//   "bg-warning-700",
// ];

const CategoryBox = ({
  name,
  image,
  index,
  id,
}: {
  name: string;
  image?: string;
  index: number;
  id: string;
}) => {
  // const bgColor = bgColors[index % bgColors.length];
  return (
    <Link href={`/categories/${id}`}>
      <div className=" w-full aspect-[1/1] flex flex-col items-center justify-center gap-3 cursor-pointer">
        {/* {image && (
        <div className="">
          <Image src={image} alt={name} width={30} height={30} />
          <FontAwesomeIcon icon={icon} className=" w-9 h-9" />
        </div>
      )} */}
        <div
          className={` w-3/5 aspect-[1/1]  flex items-center justify-center bg-primary rounded-full shadow-[0_0_3px] shadow-grayscale-700 `}
          // className={` w-3/5 aspect-[1/1]  flex items-center justify-center rounded-full ${bgColor}`}
        >
          <Image
            src={image || ""}
            alt={name}
            width={30}
            height={30}
            className=" w-8 aspect-[1/1]"
          />
        </div>
        <h3 className=" text-xl font-semibold text-primary ">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryBox;
