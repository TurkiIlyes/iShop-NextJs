import { resetVerifyState } from "@/redux/auth/authSlice";
import { signUp, verifySignUpCode } from "@/redux/auth/authThunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { handleError } from "@/utils/handleError";
import { customHandleChange, customHandleSubmit } from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { verifySignUpValidationRules } from "@/utils/validationRules";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useVerifySignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [signUpCode, setSignUpCode] = useState<string>("");
  const email = useAppSelector((state) => state.auth.email);
  const loading = useAppSelector((state) => state.auth.loading);

  const handleChange = (e: string) => {
    setSignUpCode(e);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToValidate: Record<string, string> = {
      email: email as string,
      signUpCode: signUpCode,
    };
    const newErrors = validateFormFields(
      dataToValidate,
      verifySignUpValidationRules
    );
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    customHandleSubmit(
      e,
      {},
      {
        signUpCode: signUpCode,
        email: email as string,
      },
      (formData) =>
        dispatch(verifySignUpCode({ data: formData })).then((e: any) => {
          if (!e.error) {
            router.push("/auth/login");
          }
        }),
      handleReset
    );
  };
  const handleReset = () => {
    setSignUpCode("");
  };

  return {
    signUpCode,
    handleChange,
    handleSubmit,
    loading,
  };
};

export default useVerifySignUp;
