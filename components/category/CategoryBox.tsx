import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const CategoryBox = ({ title, icon }: { title: string; icon: IconProp }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 w-[150px] h-28 md:w-52 md:h-36 border-[1px] hover:bg-customRed-900 text-grayscale-800 hover:text-white  border-grayscale-800 hover:border-none rounded-sm cursor-pointer">
      <div className="">
        <FontAwesomeIcon icon={icon} className=" w-10 h-10" />
      </div>
      <h3 className=" text-base font-normal">{title}</h3>
    </div>
  );
};

export default CategoryBox;
