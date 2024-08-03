import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";

const bgColors = [
  "bg-customAqua-700",
  "bg-gradientPrimary-700",
  "bg-customBlue-700",
  "bg-gradientAccent-700",
  "bg-success-700",
  "bg-warning-700",
];

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
  const bgColor = bgColors[index % bgColors.length];
  return (
    <Link href={`/categories/${id}`}>
      <div className=" w-full aspect-[1/1] flex flex-col items-center justify-center gap-3 text-grayscale-800 cursor-pointer">
        {/* {image && (
        <div className="">
          <Image src={image} alt={name} width={30} height={30} />
          <FontAwesomeIcon icon={icon} className=" w-9 h-9" />
        </div>
      )} */}
        <div
          className={` w-3/5 aspect-[1/1]  flex items-center justify-center rounded-full ${bgColor}`}
        >
          <Image
            src={image || ""}
            alt={name}
            width={30}
            height={30}
            className=" w-10 h-10"
          />
        </div>
        <h3 className=" text-xl font-medium">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryBox;
