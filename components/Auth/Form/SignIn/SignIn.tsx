"use client";
import ProviderButton from "@/components/Auth/subcomponents/ProviderButton";
import CustomInput from "@/components/Common/CustomInput/CustomInput";
import Link from "next/link";
import AuthButton from "../../subcomponents/AuthButton";
import useSignIn from "./useSignIn";
const SignInForm = ({ AuthButtonTitle }: { AuthButtonTitle: string }) => {
  const { email, setEmail, password, setPassword, handleSubmit } = useSignIn();
  return (
    <>
      <div className=" grid gap-y-4 py-4">
        <CustomInput
          label="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          label="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <hr className=" mx-4 border-grayscale-500" />
      <p className=" py-4 text-xs text-gray-400 font-medium text-center ">
        Or sign in with
      </p>
      <ProviderButton title="Google" icon="/imgs/google.png" />
      <p className=" py-4 text-xs text-gray-900 font-medium text-center ">
        Dont have an account?{" "}
        <Link href="/auth/signup">
          <span className=" text-sm font-bold text-customBlue-800">
            Sign Up
          </span>
        </Link>
      </p>
      <AuthButton onClick={handleSubmit} title={AuthButtonTitle} />
    </>
  );
};

export default SignInForm;
