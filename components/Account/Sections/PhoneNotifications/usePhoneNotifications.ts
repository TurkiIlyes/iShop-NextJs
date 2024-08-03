"use client";
import { UserType, updateUser } from "@/redux/slices/usersSlice";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

export type PhoneNotificationsType = {
  phoneSecurityNotifications: boolean;
};

const usePhoneNotifications = (user: UserType | null) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<PhoneNotificationsType>({
    phoneSecurityNotifications: user?.phoneSecurityNotifications || false,
  });

  useEffect(() => {
    if (user) {
      setData({
        phoneSecurityNotifications: user?.phoneSecurityNotifications || false,
      });
    }
  }, [user]);

  const customHandleChangeSwitch = (
    field: keyof PhoneNotificationsType,
    value: boolean
  ) => {
    const formData = new FormData();
    formData.append(field as string, value.toString());
    dispatch(updateUser({ user: formData }));
  };
  
  return { data, customHandleChangeSwitch };
};

export default usePhoneNotifications;
