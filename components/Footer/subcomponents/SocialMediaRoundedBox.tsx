import { cn } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaRoundedBox = ({
  icon,
  className,
}: {
  icon: IconProp;
  className: string;
}) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={cn(
        ` w-5 h-5 p-2.5 my-4  bg-white  hover:text-white rounded-full cursor-pointer `,
        className
      )}
    />
  );
};

export default SocialMediaRoundedBox;
