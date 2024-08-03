import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteUser } from "@/redux/slices/usersSlice";
import { useApiCallWithToast } from "@/utils/Toast/useApiCallWithToast";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
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
  return {
    isOpen,
    setIsOpen,
    password,
    handlePassword,
    isLoading,
    executeDeleteAccount,
  };
};

export default useDeleteDialog;
