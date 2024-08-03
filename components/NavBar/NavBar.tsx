import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";
import CustomSearchInput from "../Common/CustomInput/CustomSearchInput";
import CartShopping from "./CartShopping/CartShopping";
import Wishlist from "./Wishlist";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex max-sm:hidden items-center gap-5">
      <CustomSearchInput />

      <Wishlist />

      <CartShopping />

      <Link href="/auth/login" className="flex">
        <Avatar className="w-9 h-9 rounded-full border-2 outline-2 outline-dotted outline-success-900">
          <AvatarImage
            src={`${session?.user?.image || "https://github.com/shadcn.png"}`}
            className="rounded-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* <FontAwesomeIcon icon={faUser} className=" w-5 h-5 " /> */}
      </Link>
    </div>
  );
};

export default NavBar;
