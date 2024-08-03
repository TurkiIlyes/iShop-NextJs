"use client";
import ProviderButton from "@/components/Auth/subcomponents/ProviderButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import AuthButton from "../../subcomponents/AuthButton";
import Link from "next/link";
import useResetPassword from "./useResetPassword";

const ResetPassword = ({ AuthButtonTitle }: { AuthButtonTitle: string }) => {
  const { resetPasswordData, handleChange, handleSubmit, loading } =
    useResetPassword();
  return (
    <>
      <div className=" grid gap-4 py-4">
        <CustomInput
          label="password"
          placeholder="Password"
          value={resetPasswordData.password}
          onChange={handleChange}
          name="password"
        />
        <CustomInput
          label="password confirm"
          placeholder="Password Confirm"
          value={resetPasswordData.passwordConfirm}
          onChange={handleChange}
          name="passwordConfirm"
        />
      </div>
      <hr className=" mx-4 border-grayscale-500" />
      <p className=" py-4 text-xs text-gray-400 font-medium text-center ">
        Or sign up with
      </p>
      <ProviderButton title="Google" icon="/imgs/google.png" />
      <p className=" py-4 text-xs text-gray-900 font-medium text-center ">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className=" text-sm font-bold text-customBlue-800"
        >
          Log In
        </Link>
      </p>
      <AuthButton
        title={AuthButtonTitle}
        onClick={handleSubmit}
        loading={loading}
      />
    </>
  );
};

export default ResetPassword;
