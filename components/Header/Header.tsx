import NavBar from "../NavBar/NavBar";
import MobileNavBar from "../NavBar/MobileNavBar";
import DynamicMobileNavBar from "../NavBar/DynamicMobileNavBar";
import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";
import DropDownMenuLoginAvatar from "../NavBar/CustomDropDownMenu/DropDownMenuLoginAvatar";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" bg-grayscale-200 shadow-sm shadow-grayscale-500 border-b-[1px] border-grayscale-500">
      <div className="container flex items-center pt-4 h-[105px] text-black">
        <div className=" flex flex-1 gap-5 items-center">
          <DynamicMobileNavBar />
          <Link href="/">
            <h1 className="text-3xl font-bold">iShop</h1>
          </Link>
        </div>
        <NavBar />
        <div className=" sm:hidden">
          {session?.user && session?.user?.image ? (
            <MobileNavBar session={session} />
          ) : (
            <DropDownMenuLoginAvatar />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
