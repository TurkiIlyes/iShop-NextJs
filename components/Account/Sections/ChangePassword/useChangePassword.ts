"use client";
import { updateUserPassword } from "@/redux/slices/usersSlice";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { customHandleChange } from "@/utils/handlers";

type PasswordFormFields = {
  currentPassword: string;
  password: string;
};

const useChangePassword = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<PasswordFormFields>({
    currentPassword: "",
    password: "",
  });

  const [editField, setEditField] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customHandleChange(e, setData);
  };

  const handleEdit = (field: keyof PasswordFormFields) => {
    const formData = new FormData();
    if (field === editField) {
      formData.append("currentPassword", data.currentPassword);
      formData.append("password", data.password);
      dispatch(updateUserPassword({ user: formData }));
      setEditField("");
    } else {
      setEditField(field);
    }
  };
  return { data, handleChange, handleEdit, editField };
};

export default useChangePassword;
