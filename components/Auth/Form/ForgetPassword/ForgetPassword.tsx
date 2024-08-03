"use client";
import ProviderButton from "@/components/Auth/subcomponents/ProviderButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import AuthButton from "../../subcomponents/AuthButton";
import Link from "next/link";
import useForgetPassword from "./useForgetPassword";

const ForgetPassword = ({ AuthButtonTitle }: { AuthButtonTitle: string }) => {
  const { email, handleChange, handleSubmit, loading } = useForgetPassword();
  return (
    <>
      <div className=" grid gap-4 py-4">
        <CustomInput
          label="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          name="email"
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

export default ForgetPassword;
