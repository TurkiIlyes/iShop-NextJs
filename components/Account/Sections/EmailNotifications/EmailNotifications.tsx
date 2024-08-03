"use client";
import CustomSwitch from "@/components/Common/CustomInput/CustomSwitch";
import { UserType } from "@/redux/slices/usersSlice";
import useEmailNotifications from "./useEmailNotifications";
const EmailNotifications = ({ user }: { user: UserType | null }) => {
  const { data, customHandleChangeSwitch } = useEmailNotifications(user);

  return (
    <div className=" flex flex-col gap-7">
      <CustomSwitch
        title="Products Updates"
        content="News, announcements, and products updates."
        checked={data.emailProductsNotifications}
        onChange={() =>
          customHandleChangeSwitch(
            "emailProductsNotifications",
            !data.emailProductsNotifications
          )
        }
      />
      <hr className="h-[1px] bg-grayscale-400 border-none" />
      <CustomSwitch
        title="Security Updates"
        content="Import notifications, about your account security."
        checked={data.emailSecurityNotifications}
        onChange={() =>
          customHandleChangeSwitch(
            "emailSecurityNotifications",
            !data.emailSecurityNotifications
          )
        }
      />
    </div>
  );
};

export default EmailNotifications;
