import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <div className=" sm:hidden">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} className=" w-5 h-5 " />
        </SheetTrigger>
        <SheetContent className=" w-[290px] bg-grayscale-500 border-grayscale-900">
          <div>
            <Image
              src="/imgs/userIcon.png"
              alt="userIcon"
              width={90}
              height={90}
              className=" border-2 border-grayscale-800 rounded-xl"
            />
          </div>
          <ul className=" flex flex-col gap-3 my-4">
            <li className=" py-2 px-4 rounded-lg bg-grayscale-800">test1</li>
            <li className=" py-2 px-4 rounded-lg bg-grayscale-800">test1</li>
            <li className=" py-2 px-4 rounded-lg bg-grayscale-800">test1</li>
            <li className=" h-[1px] w-full bg-grayscale-800"></li>
            <li className=" py-2 px-4 rounded-lg bg-grayscale-800">test1</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
