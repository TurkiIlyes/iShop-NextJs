import { resetSignUpState } from "@/redux/auth/authSlice";
import { signUp } from "@/redux/auth/authThunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { handleError } from "@/utils/handleError";
import { customHandleChange, customHandleSubmit } from "@/utils/handlers";
import { validateFormFields } from "@/utils/validateFormFields";
import { signUpValidationRules } from "@/utils/validationRules";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface signUpType {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialSignUpState: signUpType = {
  name: "",
  phone: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const useSignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [signUpData, setSignUpData] = useState<signUpType>(initialSignUpState);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const loading = useAppSelector((state) => state.auth.loading);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customHandleChange(e, setSignUpData);
  };
  const handleAcceptTerms = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHasAcceptedTerms(!hasAcceptedTerms);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToValidate: Record<string, string> = {
      name: signUpData.name,
      email: signUpData.email,
      phone: signUpData.phone,
      password: signUpData.password,
      passwordConfirm: signUpData.passwordConfirm,
    };
    const newErrors = validateFormFields(dataToValidate, signUpValidationRules);
    if (Object.keys(newErrors).length > 0) {
      handleError({ customError: true, errors: newErrors });
      return;
    }
    if (!hasAcceptedTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    customHandleSubmit(
      e,
      {},
      {
        name: signUpData.name,
        phone: signUpData.phone,
        email: signUpData.email,
        password: signUpData.password,
        passwordConfirm: signUpData.passwordConfirm,
      },
      (formData) =>
        dispatch(signUp({ user: formData })).then((e: any) => {
          if (!e.error) {
            router.push("/auth/verify-sign-up");
          }
        }),
      handleReset
    );
  };
  const handleReset = () => {
    setSignUpData(initialSignUpState);
    setHasAcceptedTerms(false);
  };

  return {
    signUpData,
    hasAcceptedTerms,
    handleChange,
    handleAcceptTerms,
    handleSubmit,
    loading,
  };
};

export default useSignUp;
