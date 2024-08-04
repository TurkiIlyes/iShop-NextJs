"use client";
import { updateUserPassword } from "@/redux/slices/usersSlice";

import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { customHandleChange } from "@/utils/handlers";
import { verifyChangePasswordValidationRules } from "@/utils/validationRules";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";

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
      const dataToValidate: Record<string, string> = {
        currentPassword: data.currentPassword,
        password: data.password,
      };
      const newErrors = validateFormFields(
        dataToValidate,
        verifyChangePasswordValidationRules
      );
      if (Object.keys(newErrors).length > 0) {
        handleError({ customError: true, errors: newErrors });
        return;
      }
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
