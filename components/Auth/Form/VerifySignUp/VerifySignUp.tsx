"use client";
import ProviderButton from "@/components/Auth/subcomponents/ProviderButton";
import AuthButton from "../../subcomponents/AuthButton";
import Link from "next/link";
import useVerifySignUp from "./useVerifySignUp";
import CustomInputOTP from "@/components/Common/CustomInput/CustomInputOTP";

const VerifySignUp = ({ AuthButtonTitle }: { AuthButtonTitle: string }) => {
  const { signUpCode, handleChange, handleSubmit, loading } = useVerifySignUp();
  return (
    <>
      <div className=" grid gap-4 py-4">
        <CustomInputOTP value={signUpCode} onChange={handleChange} />
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

export default VerifySignUp;
