import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const DropDownMenuLoginAvatar = () => {
  return (
    <Link href="/auth/login" className="flex">
      <Avatar className="w-9 h-9 rounded-full border-2 outline-2 outline-dotted outline-success-900 cursor-pointer ">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="rounded-full"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default DropDownMenuLoginAvatar;
