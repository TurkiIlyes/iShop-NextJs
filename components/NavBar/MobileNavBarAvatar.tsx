import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const MobileNavBarAvatar = ({ image }: { image?: string }) => {
  return (
    <Avatar className="w-20 h-20 rounded-full border-2 outline-2 outline-dotted outline-success-900 cursor-pointer">
      <AvatarImage
        src={image || "https://github.com/shadcn.png"}
        className="rounded-full"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MobileNavBarAvatar;
