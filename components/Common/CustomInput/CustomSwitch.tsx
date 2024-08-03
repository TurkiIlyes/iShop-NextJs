"use client";
import { EmailNotificationsType } from "@/components/Account/Sections/EmailNotifications/useEmailNotifications";
import { Switch } from "@/components/ui/switch";

const CustomSwitch = ({
  title,
  content,
  checked,
  onChange,
}: {
  title: string;
  content: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex justify-between items-center">
        <h2 className=" text-base font-medium text-grayscale-800">{title}</h2>
        <Switch
          checked={checked}
          onClick={(e) => {
            onChange();
          }}
        />
      </div>
      <p className=" text-sm font-normal text-grayscale-700 ">{content}</p>
    </div>
  );
};

export default CustomSwitch;
