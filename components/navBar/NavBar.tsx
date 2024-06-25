import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
const NavBar = () => {
  return (
    <div className="flex max-sm:hidden items-center gap-5">
      <div className="flex items-center relative">
        <input
          type="search"
          placeholder="What Are You Looking For?"
          className=" bg-grayscale-300 focus:bg-gradientAccent-600 focus:bg-opacity-20 w-[255px] h-[52px] p-4 rounded-lg border-[7px] border-transparent focus:border-grayscale-200 outline outline-1 outline-grayscale-900 focus:outline-gradientAccent-600 text-[12px] font-normal placeholder-gray-500 "
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className=" absolute right-5 z-1 w-4 h-4 text-grayscale-900 text-opacity-80 "
        />
      </div>
      <FontAwesomeIcon icon={faHeart} className=" w-5 h-5 " />
      <FontAwesomeIcon icon={faCartShopping} className=" w-5 h-5 " />
      <FontAwesomeIcon icon={faUser} className=" w-5 h-5 " />
    </div>
  );
};

export default NavBar;
