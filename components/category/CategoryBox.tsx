import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const CategoryBox = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 w-[150px] h-28 md:w-52 md:h-36 border-[1px] hover:bg-gradientAccent-800 text-grayscale-800 hover:text-white  border-grayscale-800 hover:border-none rounded-sm cursor-pointer">
      <div className="">
        <FontAwesomeIcon icon={faMobileScreenButton} className=" w-10 h-10" />
      </div>
      <h3 className=" text-base font-normal">Phones</h3>
    </div>
  );
};

export default CategoryBox;
