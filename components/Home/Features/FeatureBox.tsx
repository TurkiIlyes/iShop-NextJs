import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
  title: string;
  description: string;
  icon: IconProp;
}
const FeatureBox = ({ title, description, icon }: props) => {
  return (
    <div className=" text-center py-8 ">
      <FontAwesomeIcon
        icon={icon}
        className=" w-8 h-8 text-white p-3 my-4  bg-grayscale-900 border-[10px] border-grayscale-500 rounded-full"
      />
      <h2 className="text-xl sm:text-lg md:text-xl font-semibold text-grayscale-900">
        {title}
      </h2>
      <p className="text-sm sm:text-xs md:text-sm font-normal text-grayscale-900">
        {description}
      </p>
    </div>
  );
};

export default FeatureBox;
