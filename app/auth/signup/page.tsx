import CustomAuthPage from "@/components/Auth/CustomAuthPage";
import SignUp from "@/components/Auth/Form/SignUp/SignUp";

const page = () => {
  return (
    <CustomAuthPage title="Sign Up" subTitle="Create an account">
      <SignUp AuthButtonTitle="Sign Up" />
    </CustomAuthPage>
  );
};

export default page;
