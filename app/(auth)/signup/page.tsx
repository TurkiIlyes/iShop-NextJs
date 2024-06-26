import AuthButton from "@/components/auth/AuthButton";
import FormTextInput from "@/components/auth/FormTextInput";
import ProviderButton from "@/components/auth/ProviderButton";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  return (
    <div className=" w-[300px] mx-auto py-4 ">
      <div className=" py-4 text-center">
        <h1 className=" text-3xl font-semibold text-customRed-900">Sign Up</h1>
        <p className=" text-sm font-normal pt-3">
          sign up to create an account and <br /> enjoy exclusive shopping.
        </p>
      </div>
      <div className=" grid gap-4 py-4">
        <div className="grid grid-cols-2 gap-4 ">
          <FormTextInput type="text" placeholder="First Name" />
          <FormTextInput type="text" placeholder="Last Name" />
        </div>
        <FormTextInput type="email" placeholder="Email" />
        <FormTextInput type="password" placeholder="Password" />
      </div>
      <div className=" flex gap-3  py-4 px-2">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="  w-6 h-6 text-customRed-900 "
        />

        <p className=" w-full font-medium text-[10px] text-grayscale-900">
          By creating account, you agree to accept our{" "}
          <span className=" text-customRed-900">Privacy Policy</span> and{" "}
          <span className=" text-customRed-900">Termes of Services</span>.
        </p>
      </div>
      <hr className=" mx-4 border-grayscale-500" />
      <p className=" py-4 text-xs text-gray-400 font-medium text-center ">
        Or sign up with
      </p>
      <ProviderButton title="Google" icon="/imgs/google.png" />
      <p className=" py-4 text-xs text-gray-900 font-medium text-center ">
        Already have an account?{" "}
        <span className=" text-sm font-bold text-customRed-900">Log In</span>
      </p>
      <AuthButton title="Sign Up" />
    </div>
  );
};

export default page;
