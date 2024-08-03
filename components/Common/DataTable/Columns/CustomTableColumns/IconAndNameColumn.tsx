import { Row } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Customers } from "../CustomersColumn";

const IconAndNameColumn = ({ row }: { row: Row<Customers> }) => {
  const image = row.original.image as string;
  const title = row.getValue("name") as string;
  return (
    <div className=" flex items-center gap-8">
      <Avatar className=" w-14 h-14 border-4 outline-2 outline-dotted outline-customBlue-700">
        <AvatarImage src={image} />
        <AvatarFallback className=" text-xl font-medium text-customBlue-800 text-opacity-50 capitalize">
          {title?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <span className="flex text-sm font-medium text-grayscale-900 capitalize">
        {title}
      </span>
    </div>
  );
};

export default IconAndNameColumn;
