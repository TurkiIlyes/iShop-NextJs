"use client";
import { UserType, updateUser } from "@/redux/slices/usersSlice";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";

export type EmailNotificationsType = {
  emailProductsNotifications: boolean;
  emailSecurityNotifications: boolean;
};

const useEmailNotifications = (user: UserType | null) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<EmailNotificationsType>({
    emailProductsNotifications: user?.emailProductsNotifications || false,
    emailSecurityNotifications: user?.emailSecurityNotifications || false,
  });

  useEffect(() => {
    if (user) {
      setData({
        emailProductsNotifications: user?.emailProductsNotifications || false,
        emailSecurityNotifications: user?.emailSecurityNotifications || false,
      });
    }
  }, [user]);

  const customHandleChangeSwitch = (
    field: keyof EmailNotificationsType,
    value: boolean
  ) => {
    const formData = new FormData();
    formData.append(field as string, value.toString());

    dispatch(updateUser({ user: formData }));
  };

  return { data, customHandleChangeSwitch };
};

export default useEmailNotifications;
