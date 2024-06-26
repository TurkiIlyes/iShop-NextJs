import AuthButton from "@/components/auth/AuthButton";
import FormTextInput from "@/components/auth/FormTextInput";
import ProviderButton from "@/components/auth/ProviderButton";

const page = () => {
  return (
    <div className=" w-[300px] mx-auto py-4">
      <div className=" py-4 text-center">
        <h1 className=" text-3xl font-semibold text-customRed-900">
          Recover account
        </h1>
        <p className=" text-sm font-normal pt-3">get back your account.</p>
      </div>
      <div className=" grid gap-y-4 py-4">
        <FormTextInput type="email" placeholder="Email" />
      </div>

      <hr className=" mx-4 border-grayscale-500" />
      <p className=" py-4 text-xs text-gray-400 font-medium text-center ">
        Or sign in with
      </p>
      <ProviderButton title="Google" icon="/imgs/google.png" />
      <p className=" py-4 text-xs text-gray-900 font-medium text-center ">
        Dont have an account?{" "}
        <span className=" text-sm font-bold text-customRed-900">Sign Up</span>
      </p>
      <AuthButton title="Send Code" />
    </div>
  );
};

export default page;
