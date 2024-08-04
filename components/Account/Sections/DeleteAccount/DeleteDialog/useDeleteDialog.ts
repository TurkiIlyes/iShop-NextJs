import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteUser } from "@/redux/slices/usersSlice";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { verifyDeleteAccountValidationRules } from "@/utils/validationRules";
import { validateFormFields } from "@/utils/validateFormFields";
import { handleError } from "@/utils/handleError";
const useDeleteDialog = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState<string>("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [isLoading, executeDeleteAccount] = useApiCallWithToast({
    apiCallFunction: () => {
      const formData = new FormData();
      formData.append("password", password);
      return dispatch(deleteUser({ user: formData }));
    },
    handleSuccess: () => {
      setIsOpen(false);
      signOut({
        callbackUrl: "/auth/login",
      });
    },
    messages: {
      loading: "Deleting account...",
      success: "Account deleted successfully.",
      error: "Could not delete account. Please check your password.",
    },
  });
  const handleDelete = () => {
    const dataToValidate: Record<string, string> = {
      password: password,
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifyDeleteAccountValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    executeDeleteAccount();
  };
  return {
    isOpen,
    setIsOpen,
    password,
    handlePassword,
    isLoading,
    handleDelete,
  };
};

export default useDeleteDialog;
