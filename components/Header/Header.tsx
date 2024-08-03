import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../NavBar/MobileNavBar";
import MobileCategoryNavBar from "../NavBar/MobileCategoryNavBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" bg-grayscale-200 shadow-sm shadow-grayscale-500 border-b-[1px] border-grayscale-500">
      <div className="container flex items-center pt-4 h-[105px] text-black">
        <div className=" flex flex-1 gap-5 items-center">
          <MobileCategoryNavBar />
          <Link href="/">
            <h1 className="text-3xl font-bold">iShop</h1>
          </Link>
        </div>

        <NavBar />
        <MobileNavBar />
      </div>
    </div>
  );
};

export default Header;
