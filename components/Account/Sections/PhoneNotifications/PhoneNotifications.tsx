"use client";
import CustomSwitch from "@/components/Common/CustomInput/CustomSwitch";
import { UserType } from "@/redux/slices/usersSlice";
import usePhoneNotifications from "./usePhoneNotifications";

const PhoneNotifications = ({ user }: { user: UserType | null }) => {
  const { data, customHandleChangeSwitch } = usePhoneNotifications(user);
  return (
    <div className=" flex flex-col gap-7">
      <CustomSwitch
        title="Security Updates"
        content="Import notifications, about your account security."
        checked={data.phoneSecurityNotifications}
        onChange={() =>
          customHandleChangeSwitch(
            "phoneSecurityNotifications",
            !data.phoneSecurityNotifications
          )
        }
      />
    </div>
  );
};

export default PhoneNotifications;
