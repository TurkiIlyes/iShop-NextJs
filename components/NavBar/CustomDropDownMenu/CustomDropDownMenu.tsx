import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomDropdownMenuContent from "./CustomDropdownMenuContent";
import DropDownMenuLoginAvatar from "./DropDownMenuLoginAvatar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";
import DropDownMenuLoggedAvatar from "./DropDownMenuLoggedAvatar";

const CustomDropDownMenu = async () => {
  const session = await getServerSession(authOptions);
  return (
    <DropdownMenu>
      {session?.user && session?.user?.image ? (
        <DropdownMenuTrigger asChild>
          <DropDownMenuLoggedAvatar image={session?.user?.image} />
        </DropdownMenuTrigger>
      ) : (
        <DropDownMenuLoginAvatar />
      )}

      <CustomDropdownMenuContent role={session?.user?.role} />
    </DropdownMenu>
  );
};

export default CustomDropDownMenu;
