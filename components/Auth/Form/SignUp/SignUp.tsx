"use client";
import ProviderButton from "@/components/Auth/subcomponents/ProviderButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import { faCircleCheck as regularCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthButton from "../../subcomponents/AuthButton";
import Link from "next/link";
import useSignUp from "./useSignUp";

const SignUp = ({ AuthButtonTitle }: { AuthButtonTitle: string }) => {
  const {
    signUpData,
    hasAcceptedTerms,
    handleChange,
    handleAcceptTerms,
    handleSubmit,
    loading,
  } = useSignUp();
  return (
    <>
      <div className=" grid gap-4 py-4">
        <div className=" w-full grid grid-cols-2 gap-4 ">
          <CustomInput
            label="full Name"
            placeholder="Full Name"
            value={signUpData.name}
            onChange={handleChange}
            name="name"
          />
          <CustomInput
            label="phone"
            placeholder="Phone"
            value={signUpData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>

        <CustomInput
          label="email"
          placeholder="Email"
          value={signUpData.email}
          onChange={handleChange}
          name="email"
        />
        <CustomInput
          label="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={handleChange}
          name="password"
        />
        <CustomInput
          label="password confirm"
          placeholder="Password Confirm"
          value={signUpData.passwordConfirm}
          onChange={handleChange}
          name="passwordConfirm"
        />
      </div>
      <div className=" w-full  flex gap-3  py-4 px-2">
        <button type="button" onClick={handleAcceptTerms}>
          {hasAcceptedTerms ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="  w-6 h-6 text-customBlue-800 "
            />
          ) : (
            <FontAwesomeIcon
              icon={regularCircleCheck}
              className="  w-6 h-6 text-customBlue-800 "
            />
          )}
        </button>

        <p className=" w-full font-medium text-[10px] text-grayscale-900">
          By creating account, you agree to accept our{" "}
          <span className=" text-customBlue-800">Privacy Policy</span> and{" "}
          <span className=" text-customBlue-800">Termes of Services</span>.
        </p>
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

export default SignUp;
